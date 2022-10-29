import { BrowserWindow, app } from "electron";
import { setupConfig, setupDevTools } from "utils";

import { IpcChannel } from "types/ipc";

import "electron/ipc";

import { domain } from "./electron/domain";

if (require("electron-squirrel-startup")) {
	app.quit();
}

declare const MAIN_WINDOW_WEBPACK_ENTRY: string;

const isDevelopment = !app.isPackaged;
const appLock = app.requestSingleInstanceLock();

const WINDOW_WIDTH = 1350;
const WINDOW_HEIGHT = 900;
const DEVTOOLS_WIDTH = 500;

let mainWindow: BrowserWindow = null;

setupDevTools(app, DEVTOOLS_WIDTH);
setupConfig(app);

const createWindow = (): void => {
	mainWindow = new BrowserWindow({
		frame: false,
		height: WINDOW_HEIGHT,
		width: isDevelopment ? WINDOW_WIDTH + DEVTOOLS_WIDTH : WINDOW_WIDTH,
		webPreferences: {
			nodeIntegration: true,
			contextIsolation: false,
		},
	});

	mainWindow.webContents.session.webRequest.onHeadersReceived((details, callback) => {
		callback({
			responseHeaders: {
				...details.responseHeaders,
				"Content-Security-Policy": ["script-src *;image-src *"],
			},
		});
	});

	mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY).catch(console.error);
	mainWindow.setMenu(null);

	isDevelopment && mainWindow.webContents.openDevTools();
};

appLock || app.quit();

if (appLock) {
	app.whenReady().then(() => {
		createWindow();
	});
}

app.on("window-all-closed", () => {
	if (process.platform !== "darwin") {
		app.quit();
	}
});

app.on("activate", () => {
	if (BrowserWindow.getAllWindows().length === 0) {
		createWindow();
	}
});

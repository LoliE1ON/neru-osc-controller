import { BrowserWindow, Menu, Tray, app, nativeImage } from "electron";
import unhandled from "electron-unhandled";
import * as path from "path";
import { setupConfig, setupDevTools } from "utils";

import "electron/ipc";

import "./electron/job/vrchatJob";

if (require("electron-squirrel-startup")) {
	app.quit();
}

unhandled();

declare const MAIN_WINDOW_WEBPACK_ENTRY: string;

const isDevelopment = !app.isPackaged;
const appLock = app.requestSingleInstanceLock();

let isQuiting: boolean;
let tray;

const WINDOW_WIDTH = 1350;
const WINDOW_HEIGHT = 900;
const DEVTOOLS_WIDTH = 500;

let mainWindow: BrowserWindow = null;

setupDevTools(app, DEVTOOLS_WIDTH);

const createWindow = (): void => {
	const icon = nativeImage.createFromPath("../icon.png");

	tray = new Tray(icon);
	tray.setToolTip("Neru OSC Controller");

	tray.on("click", function () {
		if (!mainWindow.isVisible()) {
			mainWindow.show();
		}
	});

	tray.setContextMenu(
		Menu.buildFromTemplate([
			{
				label: "Neru OSC Controller",
				click: function () {
					mainWindow.show();
				},
			},
			{
				label: "Quit",
				click: function () {
					isQuiting = true;
					app.quit();
				},
			},
		])
	);

	mainWindow = new BrowserWindow({
		frame: false,
		height: WINDOW_HEIGHT,
		width: isDevelopment ? WINDOW_WIDTH + DEVTOOLS_WIDTH : WINDOW_WIDTH,
		webPreferences: {
			nodeIntegration: true,
			contextIsolation: false,
		},
		icon: icon,
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

	mainWindow.on("minimize", function (event: any) {
		event.preventDefault();
		mainWindow.hide();
	});

	mainWindow.on("close", function (event) {
		if (!isQuiting) {
			event.preventDefault();
			mainWindow.hide();
			event.returnValue = false;
		}
	});
};

appLock || app.quit();

if (app.isPackaged) {
	app.setLoginItemSettings({
		openAtLogin: true,
		path: app.getPath("exe"),
	});
}

if (appLock) {
	app.whenReady().then(() => {
		createWindow();
		setupConfig(app);
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

app.on("before-quit", function () {
	isQuiting = true;
});

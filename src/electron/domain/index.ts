import { alert } from "domain/alert";
import { ApplicationState, application } from "domain/application";
import { VrchatState, vrchat } from "domain/vrchat";
import fs from "fs";
import onChange from "on-change";

import { IpcChannel } from "types/ipc";
import { AlertState } from "types/store/alert";

import { getMainWindow } from "utils/getMainWindow";

const states: Domain = {
	alert,
	vrchat,
	application,
	setState: (newState: Domain): void => {
		for (const key in newState) {
			// @ts-ignore
			states[key] = newState[key];
		}
	},
};

export const domain = onChange(states, function () {
	if (states.application.configPath.length) {
		fs.writeFileSync(states.application.configPath, JSON.stringify(this), {
			encoding: "utf-8",
		});

		if (getMainWindow()) {
			getMainWindow().webContents.send(
				IpcChannel.sendStore,
				JSON.parse(JSON.stringify(this))
			);
		}
	}
});

export type Domain = {
	alert: AlertState;
	vrchat: VrchatState;
	application: ApplicationState;
	setState: (newState: Domain) => void;
};

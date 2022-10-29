import { alert } from "domain/alert";
import { ApplicationState, application } from "domain/application";
import fs from "fs";
import onChange from "on-change";

import { AlertState } from "types/store/alert";

const states: Domain = {
	alert,
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
		fs.writeFileSync(states.application.configPath, JSON.stringify(this));
	}
});

export type Domain = {
	alert: AlertState;
	application: ApplicationState;
	setState: (newState: Domain) => void;
};

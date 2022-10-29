import childProcess from "child_process";
import cron from "cron";
import { handleJobs } from "job/handleJobs";

import config from "../config/vrchat.json";
import { domain } from "../domain";

const expressionTemplate = `*/${config.refreshRate} * * * * *`;

new cron.CronJob(
	expressionTemplate,
	() => {
		childProcess.exec("tasklist", (err, stdout) => {
			stdout.includes(config.processName) ? setIsRunning() : setIsNotRunning();
		});

		handleJobs();
	},
	null,
	true
);

const setIsRunning = () => {
	if (!domain.vrchat.isRunning) {
		domain.vrchat.isRunning = true;

		console.log("VRChat is running");
	}
};

const setIsNotRunning = () => {
	if (domain.vrchat.isRunning) {
		domain.vrchat.isRunning = false;

		console.log("VRChat is closed");
	}
};

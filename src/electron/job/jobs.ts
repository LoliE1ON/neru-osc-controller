import { alertJob } from "job/alertJob";

import { domain } from "../domain";

export const runJobs = (): void => {
	if (domain.vrchat.isRunning) {
		if (domain.alert.enable) {
			alertJob.start();
		}
	}
};

export const stopJobs = (): void => {
	alertJob.stop();
};

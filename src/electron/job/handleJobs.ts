import { alertJob } from "job/alertJob";

import { domain } from "../domain";

export const handleJobs = (): void => {
	if (domain.vrchat.isRunning) {
		if (domain.alert.enable) {
			alertJob.start();
		} else {
			alertJob.stop();
		}
	} else {
		alertJob.stop();
	}
};

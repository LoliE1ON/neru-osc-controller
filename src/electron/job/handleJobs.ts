import { alertJob } from "job/alertJob";
import { systemInformationJob } from "job/systemInformationJob";

import { domain } from "../domain";

export const handleJobs = (): void => {
	if (domain.vrchat.isRunning) {
		if (domain.alert.enable) {
			alertJob.start();
		} else {
			alertJob.stop();
		}

		if (domain.systemInformation.enable) {
			systemInformationJob.start();
		} else {
			systemInformationJob.stop();
		}
	} else {
		alertJob.stop();
		systemInformationJob.stop();
	}
};

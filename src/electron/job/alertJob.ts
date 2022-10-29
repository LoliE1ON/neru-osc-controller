import cron from "cron";
import { infrastructure } from "infrastructure";

import { domain } from "../domain";

const expressionTemplate = `*/${domain.alert.refreshRate - 1} * * * * *`;

export const alertJob = new cron.CronJob(expressionTemplate, async () => {
	domain.alert.status = await infrastructure.alert.getStatus();

	infrastructure.osc.sendAlertStatus(domain.alert.status);

	console.log(`[Alert] Status: ${domain.alert.status} [${new Date()}]`);
});

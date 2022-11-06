import cron from "cron";
import { infrastructure } from "infrastructure";
import { cpu } from "node-os-utils";

import { domain } from "../domain/index";

const expressionTemplate = `*/${domain.systemInformation.refreshRate - 1} * * * * *`;

export const systemInformationJob = new cron.CronJob(expressionTemplate, async () => {
	const usage = await cpu.usage();
	domain.systemInformation.cpuUsage = usage;

	infrastructure.osc.sendCpuUsage(usage);

	console.log(`CPU usage: ${usage}`);
});

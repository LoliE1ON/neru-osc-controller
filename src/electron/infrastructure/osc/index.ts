import { sendAlertStatus } from "infrastructure/osc/sendAlertStatus";
import { sendCpuUsage } from "infrastructure/osc/sendCpuUsage";

export const osc = {
	sendAlertStatus,
	sendCpuUsage,
};

import config from "../../config/animationParameters.json";
import { client } from "./client";

export const sendCpuUsage = (usage: number): void => {
	try {
		client.send({
			address: config.cpuUsage.address,
			args: {
				type: config.cpuUsage.type,
				value: usage,
			},
		});
	} catch (throwable) {
		console.error(throwable);
	}
};

import config from "../../config/animationParameters.json";
import { client } from "./client";

export const sendAlertStatus = (status: boolean): void => {
	try {
		client.send({
			address: config.alert.address,
			args: {
				type: config.alert.type,
				value: Boolean(status),
			},
		});
	} catch (throwable) {
		console.error(throwable);
	}
};

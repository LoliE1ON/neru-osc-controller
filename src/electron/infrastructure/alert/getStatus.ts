import { browser } from "infrastructure/alert/browser";

import config from "../../config/alert.json";
import { domain } from "../../domain";

export const getStatus = async (): Promise<boolean> => {
	try {
		const browserInstance = await browser.getInstance();

		const page = await browserInstance.newPage();

		await page.goto(config.url, {
			waitUntil: "networkidle0",
		});

		const selector = `[${config.selector}="${domain.alert.activeRegion}"]`;
		await page.waitForSelector(selector);

		const alert = await page.$eval(selector, element => {
			return element.getAttribute("data-alert-type");
		});

		return Boolean(alert);
	} catch (throwable) {
		console.error(throwable);

		return false;
	}
};

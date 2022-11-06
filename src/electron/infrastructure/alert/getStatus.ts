import puppeteer from "puppeteer";

import config from "../../config/alert.json";
import { domain } from "../../domain";

export const getStatus = async (): Promise<boolean> => {
	try {
		const browser = await puppeteer.launch({
			headless: true,
			args: ["--no-sandbox", "--disable-setuid-sandbox"],
			defaultViewport: { width: 800, height: 600 },
		});

		const page = await browser.newPage();

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

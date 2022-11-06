import puppeteer from "puppeteer";

export const browser: BrowserType = {
	browser: null,
	getInstance: async function () {
		if (this.browser) {
			return this.browser;
		}

		this.browser = await puppeteer.launch({
			headless: true,
			args: ["--no-sandbox", "--disable-setuid-sandbox"],
			defaultViewport: { width: 800, height: 600 },
		});

		return this.browser;
	},
};

type BrowserType = {
	browser: puppeteer.Browser;
	getInstance: () => Promise<puppeteer.Browser>;
};

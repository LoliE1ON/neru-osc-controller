import * as fs from "fs";
import * as path from "path";

import { domain } from "../domain";

export const setupConfig = (app: Electron.App): void => {
	const userDataPath = app.getPath("userData");
	const configPath = path.join(userDataPath, "config.json");

	if (fs.existsSync(configPath)) {
		domain.setState(JSON.parse(fs.readFileSync(configPath, "utf-8")));
	} else {
		domain.application.configPath = configPath;
		fs.writeFileSync(configPath, JSON.stringify(domain));
	}
};

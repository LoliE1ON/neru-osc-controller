import React from "react";

import { Dashboard } from "pages/Dashboard";
import { Parameters } from "pages/Parameters";
import { Settings } from "pages/Settings";
import { Alert } from "pages/events/Alert";
import { SystemInformation } from "pages/events/SystemInformation";

export const routes = {
	dashboard: {
		pathname: "/",
		component: <Dashboard />,
	},
	parameters: {
		pathname: "/parameters",
		component: <Parameters />,
	},
	settings: {
		pathname: "/settings",
		component: <Settings />,
	},
	eventAlert: {
		pathname: "/events/alert",
		component: <Alert />,
	},
	eventSystemInformation: {
		pathname: "/events/system-information",
		component: <SystemInformation />,
	},
};

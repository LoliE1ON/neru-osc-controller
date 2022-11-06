import React from "react";

import { Dashboard } from "pages/Dashboard";
import { Parameters } from "pages/Parameters";
import { Settings } from "pages/Settings";
import { Alert } from "pages/events/Alert";

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
};

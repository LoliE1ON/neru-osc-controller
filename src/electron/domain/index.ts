import { alert } from "domain/alert";

import { AlertState } from "types/store/alert";

export const domain: Domain = {
	alert,
};

type Domain = {
	alert: AlertState;
};

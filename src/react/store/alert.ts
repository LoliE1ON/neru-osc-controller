import { atom } from "nanostores";

import { AlertState } from "types/store/alert";

import { syncStore } from "store/store";

const ALERT = "alert";

export const alert = atom<AlertState>({
	enable: false,
	activeRegion: "Київська область",
	regions: ["Київська область"],
	refreshRate: 20,
	status: false,
});

export function setActiveRegion(region: string): void {
	alert.set({
		...alert.get(),
		activeRegion: region,
	});

	syncStore(ALERT, alert.get());
}

export function setRefreshRate(rate: number): void {
	alert.set({
		...alert.get(),
		refreshRate: rate,
	});

	syncStore(ALERT, alert.get());
}

export function setEnable(value: boolean): void {
	alert.set({
		...alert.get(),
		enable: value,
	});

	syncStore(ALERT, alert.get());
}

export function setAlertStore(state: AlertState): void {
	alert.set({
		...state,
	});
}

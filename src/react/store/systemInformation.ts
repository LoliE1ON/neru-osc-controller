import { atom } from "nanostores";

import { SystemInformationState } from "types/store/systemInformation";

import { syncStore } from "store/store";

const SYSTEM_INFORMATION = "systemInformation";

export const systemInformation = atom<SystemInformationState>({
	enable: false,
	cpuUsage: 0,
	refreshRate: 1,
});

export function setRefreshRate(rate: number): void {
	systemInformation.set({
		...systemInformation.get(),
		refreshRate: rate,
	});

	syncStore(SYSTEM_INFORMATION, systemInformation.get());
}

export function setEnable(value: boolean): void {
	systemInformation.set({
		...systemInformation.get(),
		enable: value,
	});

	syncStore(SYSTEM_INFORMATION, systemInformation.get());
}

export function setSystemInformationStore(state: SystemInformationState): void {
	systemInformation.set({
		...state,
	});
}

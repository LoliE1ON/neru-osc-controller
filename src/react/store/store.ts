import { ipc } from "utils";

import { IpcChannel } from "types/ipc";

import { setAlertStore } from "store/alert";
import { setApplicationState } from "store/application";
import { setVrchatStore } from "store/vrchat";

export const syncStore = (key: string, store: any): void => {
	ipc.invoke(IpcChannel.syncStore, { key, store }).then();
};

export const syncStores = (store: any): void => {
	for (const key in store) {
		if (key === "alert") {
			setAlertStore(store[key]);
		}

		if (key === "application") {
			setApplicationState(store[key]);
		}

		if (key === "vrchat") {
			setVrchatStore(store[key]);
		}
	}
};

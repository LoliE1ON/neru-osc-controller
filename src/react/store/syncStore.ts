import { ipc } from "utils";

import { IpcChannel } from "types/ipc";

export const syncStore = (key: string, store: any): void => {
	ipc.invoke(IpcChannel.syncStore, { key, store }).then();
};

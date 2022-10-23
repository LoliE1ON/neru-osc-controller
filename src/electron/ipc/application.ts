import { ipc } from "utils";

import { IpcChannel } from "types/ipc";

import { getMainWindow } from "utils/getMainWindow";

ipc.handle(IpcChannel.clientClose, async () => {
	getMainWindow().close();
});

ipc.handle(IpcChannel.clientMinimize, async () => {
	getMainWindow().minimize();
});

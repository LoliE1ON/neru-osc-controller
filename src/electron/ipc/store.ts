import { ipc } from "utils";

import { IpcChannel } from "types/ipc";

import { domain } from "../domain";

ipc.handle(IpcChannel.syncStore, async (event, args) => {
	// @ts-ignore
	domain[args.key] = args.store;
});

ipc.handle(IpcChannel.getStore, async () => {
	return JSON.parse(JSON.stringify(domain));
});

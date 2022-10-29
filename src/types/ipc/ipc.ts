import { Domain } from "../../electron/domain";

export enum IpcChannel {
	clientReady = "clientReady",
	clientClose = "clientClose",
	clientMinimize = "clientMinimize",

	syncStore = "syncStore",
	getStore = "getStore",
}

export type IpcEvent = {
	[IpcChannel.clientReady]: null;
	[IpcChannel.clientClose]: null;
	[IpcChannel.clientMinimize]: null;
	[IpcChannel.syncStore]: { key: string; store: any };
	[IpcChannel.getStore]: null;
};

export type IpcResponse = {
	[IpcChannel.clientReady]: void;
	[IpcChannel.clientClose]: void;
	[IpcChannel.clientMinimize]: void;
	[IpcChannel.syncStore]: void;
	[IpcChannel.getStore]: Domain;
};

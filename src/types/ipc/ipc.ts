export enum IpcChannel {
	clientReady = "clientReady",
	clientClose = "clientClose",
	clientMinimize = "clientMinimize",
}

export type IpcEvent = {
	[IpcChannel.clientReady]: null;
	[IpcChannel.clientClose]: null;
	[IpcChannel.clientMinimize]: null;
};

export type IpcResponse = {
	[IpcChannel.clientReady]: void;
	[IpcChannel.clientClose]: void;
	[IpcChannel.clientMinimize]: void;
};

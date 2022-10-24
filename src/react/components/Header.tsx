import { ipc } from "utils";

import React from "react";

import { IpcChannel } from "types/ipc";

import CloseIcon from "@mui/icons-material/Close";
import MinimizeIcon from "@mui/icons-material/Minimize";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";

export const Header = () => {
	const onClose = () => ipc.invoke(IpcChannel.clientClose, null);
	const onMinimize = () => ipc.invoke(IpcChannel.clientMinimize, null);

	return (
		<AppBar position="static" color="primary" enableColorOnDark>
			<Toolbar
				sx={{
					height: "var(--header-height)",
					minHeight: "auto",
					padding: "0 !important",
				}}
				variant="dense">
				<Typography
					sx={{ p: 1, fontWeight: "600" }}
					variant="subtitle1"
					component="div">
					Neru OSC Controller
				</Typography>
				<div className="app-header-hack" />
				<Button
					sx={{ minWidth: "35px" }}
					onClick={onMinimize}
					size="small"
					color="inherit">
					<MinimizeIcon />
				</Button>
				<Button
					sx={{ minWidth: "35px" }}
					onClick={onClose}
					size="small"
					color="inherit">
					<CloseIcon />
				</Button>
			</Toolbar>
		</AppBar>
	);
};

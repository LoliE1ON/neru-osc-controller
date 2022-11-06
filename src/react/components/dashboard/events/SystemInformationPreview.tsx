import { useStore } from "@nanostores/react";

import React from "react";

import { systemInformation } from "store/systemInformation";

import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { Chip, ListItemIcon, ListItemText, Typography } from "@mui/material";

export function SystemInformationPreview() {
	const systemInformationStore = useStore(systemInformation);

	const Icon = () =>
		systemInformationStore.enable ? (
			<CheckCircleOutlineIcon color={"primary"} />
		) : (
			<ErrorOutlineIcon color={"error"} />
		);

	const Body = () =>
		systemInformationStore.enable ? (
			<Typography>
				<Typography component={"span"} mr={2}>
					<b>System information</b> event is active
				</Typography>
				<Chip
					label={`CPU usage: ${systemInformationStore.cpuUsage}%`}
					variant="outlined"
				/>
			</Typography>
		) : (
			<Typography>
				<b>System information</b> event is not active
			</Typography>
		);

	return (
		<React.Fragment>
			<ListItemIcon>
				<Icon />
			</ListItemIcon>
			<ListItemText>
				<Body />
			</ListItemText>
		</React.Fragment>
	);
}

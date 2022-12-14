import { useStore } from "@nanostores/react";

import React from "react";

import { alert } from "store/alert";

import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Chip, ListItemIcon, ListItemText, Typography } from "@mui/material";

export function AlertPreview() {
	const alertStore = useStore(alert);

	const Icon = () =>
		alertStore.status ? (
			<CheckCircleOutlineIcon color={"primary"} />
		) : (
			<ErrorOutlineIcon color={"error"} />
		);

	const Body = () =>
		alertStore.status ? (
			<Typography>
				<Typography component={"span"} mr={2}>
					<b>Alert</b> event is active
				</Typography>
				<Chip
					icon={<LocationOnIcon fontSize={"small"} />}
					label={alertStore.activeRegion}
					variant="outlined"
				/>
			</Typography>
		) : (
			<Typography>
				<b>Alert</b> event is not active
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

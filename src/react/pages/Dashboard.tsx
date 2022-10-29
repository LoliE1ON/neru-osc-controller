import { useStore } from "@nanostores/react";

import React from "react";

import { vrchat } from "store/vrchat";

import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { Stack, Typography } from "@mui/material";
import Container from "@mui/material/Container";

export function Dashboard() {
	const vrchatStore = useStore(vrchat);

	const VrchatIsRunning = () => (
		<React.Fragment>
			<CheckCircleOutlineIcon color={"primary"} fontSize={"large"} />
			<Typography variant={"h5"} color={"primary"}>
				<b>VRChat</b> is running
			</Typography>
		</React.Fragment>
	);

	const VrchatIsNotRunning = () => (
		<React.Fragment>
			<CheckCircleOutlineIcon color={"error"} fontSize={"large"} />
			<Typography variant={"h5"} color={"error"}>
				<b>VRChat</b> is not running
			</Typography>
		</React.Fragment>
	);

	return (
		<div>
			<Container component={"div"} sx={{ marginTop: 40 }}>
				<Stack direction="row" justifyContent="center">
					{vrchatStore.isRunning ? <VrchatIsRunning /> : <VrchatIsNotRunning />}
				</Stack>
			</Container>
		</div>
	);
}

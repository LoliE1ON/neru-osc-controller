import { useStore } from "@nanostores/react";

import React from "react";

import { alert } from "store/alert";
import { vrchat } from "store/vrchat";

import { AlertPreview } from "components/dashboard/events/AlertPreview";

import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import {
	Divider,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Paper,
	Stack,
	Typography,
} from "@mui/material";
import Container from "@mui/material/Container";

export function Dashboard() {
	const vrchatStore = useStore(vrchat);
	const alertStore = useStore(alert);

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
			<ErrorOutlineIcon color={"error"} fontSize={"large"} />
			<Typography variant={"h5"} color={"error"}>
				<b>VRChat</b> is not running
			</Typography>
		</React.Fragment>
	);

	return (
		<Container component={"div"} sx={{ marginTop: 20 }}>
			<Stack direction="row" justifyContent="center">
				{vrchatStore.isRunning ? <VrchatIsRunning /> : <VrchatIsNotRunning />}
			</Stack>

			{vrchatStore.isRunning ? (
				<React.Fragment>
					<Typography variant={"h6"}>Events</Typography>
					<Paper elevation={1}>
						<List dense={true}>
							<ListItem>
								<AlertPreview />
							</ListItem>
						</List>
					</Paper>
				</React.Fragment>
			) : (
				<Typography variant={"h6"} align={"center"}>
					Please, run VRChat for detect events status
				</Typography>
			)}
		</Container>
	);
}

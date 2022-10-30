import { useStore } from "@nanostores/react";

import React from "react";

import { application } from "store/application";

import { Paper, Typography } from "@mui/material";
import Container from "@mui/material/Container";

export function Settings() {
	const applicationStore = useStore(application);

	return (
		<Container component={"div"} maxWidth="sm" sx={{ marginTop: 20 }}>
			<Typography
				mb={2}
				variant="h6"
				align={"center"}
				id="input-slider"
				gutterBottom>
				Settings
			</Typography>

			<Typography component={"div"}>Config path:</Typography>

			<Paper sx={{ p: 1, mb: 2 }} elevation={1}>
				<Typography variant="caption" display="block">
					{applicationStore.configPath}
				</Typography>
			</Paper>

			<Typography component={"div"}>Version:</Typography>

			<Paper sx={{ p: 1, mb: 2 }} elevation={1}>
				<Typography variant="caption" display="block">
					{process.env.npm_package_version}
				</Typography>
			</Paper>
		</Container>
	);
}

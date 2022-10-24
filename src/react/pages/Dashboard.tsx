import React from "react";

import { Typography } from "@mui/material";
import Container from "@mui/material/Container";

export function Dashboard() {
	return (
		<div>
			<Container component={"div"} maxWidth="sm" sx={{ marginTop: 30 }}>
				<Typography component={"div"} align={"center"}>
					<p>Welcome to Dashboard</p>
				</Typography>
			</Container>
		</div>
	);
}
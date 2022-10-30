import React from "react";

import {
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Typography,
} from "@mui/material";
import Container from "@mui/material/Container";

import animationParameters from "../../electron/config/animationParameters.json";

export function Parameters() {
	return (
		<Container component={"div"} maxWidth="sm" sx={{ marginTop: 20 }}>
			<Typography
				mb={5}
				variant="h6"
				align={"center"}
				id="input-slider"
				gutterBottom>
				Animation parameters
			</Typography>

			<TableContainer component={Paper}>
				<Table stickyHeader aria-label="table">
					<TableHead>
						<TableRow>
							<TableCell>Name</TableCell>
							<TableCell>Address</TableCell>
							<TableCell>Type</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{Object.keys(animationParameters).map((parameter, key) => (
							<TableRow
								key={key}
								sx={{
									"&:last-child td, &:last-child th": { border: 0 },
								}}>
								<TableCell component="th" scope="row">
									{parameter}
								</TableCell>
								<TableCell>
									{
										// @ts-ignore
										animationParameters[parameter].address
									}
								</TableCell>
								<TableCell>
									{
										// @ts-ignore
										animationParameters[parameter].type
									}
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</Container>
	);
}

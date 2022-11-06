import { useStore } from "@nanostores/react";

import React from "react";

import { setEnable, setRefreshRate, systemInformation } from "store/systemInformation";

import {
	Checkbox,
	FormControl,
	FormControlLabel,
	Slider,
	Typography,
} from "@mui/material";
import Container from "@mui/material/Container";

export function SystemInformation() {
	const systemInformationStore = useStore(systemInformation);

	const handleChangeEnable = (event: React.ChangeEvent<HTMLInputElement>) => {
		setEnable(event.target.checked);
	};

	const handleChangeRefreshRate = (event: Event, value: number | number[]) => {
		setRefreshRate(value as number);
	};

	return (
		<Container component={"div"} maxWidth="sm" sx={{ marginTop: 20 }}>
			<Typography
				mb={5}
				variant="h6"
				align={"center"}
				id="input-slider"
				gutterBottom>
				System information
			</Typography>

			<FormControl fullWidth>
				<Typography mt={3} id="input-slider" gutterBottom>
					Refresh rate (secs)
				</Typography>
				<Slider
					size="small"
					min={2}
					max={30}
					value={systemInformationStore.refreshRate}
					onChange={handleChangeRefreshRate}
					aria-label="Small"
					valueLabelDisplay="auto"
				/>
			</FormControl>

			<FormControl fullWidth>
				<FormControlLabel
					control={<Checkbox />}
					checked={systemInformationStore.enable}
					onChange={handleChangeEnable}
					label="Enabled"
				/>
			</FormControl>
		</Container>
	);
}

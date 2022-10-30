import { useStore } from "@nanostores/react";

import React from "react";

import { alert, setActiveRegion, setEnable, setRefreshRate } from "store/alert";

import {
	Checkbox,
	FormControl,
	FormControlLabel,
	InputLabel,
	MenuItem,
	Select,
	SelectChangeEvent,
	Slider,
	Typography,
} from "@mui/material";
import Container from "@mui/material/Container";

export function Alert() {
	const alertStore = useStore(alert);

	const handleChangeActiveRegion = (event: SelectChangeEvent) => {
		setActiveRegion(event.target.value as string);
	};

	const handleChangeRefreshRate = (event: Event, value: number | number[]) => {
		setRefreshRate(value as number);
	};

	const handleChangeEnable = (event: React.ChangeEvent<HTMLInputElement>) => {
		setEnable(event.target.checked);
	};

	return (
		<Container component={"div"} maxWidth="sm" sx={{ marginTop: 20 }}>
			<Typography
				mb={5}
				variant="h6"
				align={"center"}
				id="input-slider"
				gutterBottom>
				Alert setting
			</Typography>

			<FormControl fullWidth>
				<InputLabel id="demo-simple-select-label">Active region</InputLabel>
				<Select
					labelId="demo-simple-select-label"
					id="demo-simple-select"
					value={alertStore.activeRegion}
					label="Active region"
					onChange={handleChangeActiveRegion}>
					{alertStore.regions.map((region, key) => (
						<MenuItem key={key} value={region}>
							{region}
						</MenuItem>
					))}
				</Select>
			</FormControl>

			<FormControl fullWidth>
				<Typography mt={3} id="input-slider" gutterBottom>
					Refresh rate (secs)
				</Typography>
				<Slider
					size="small"
					min={10}
					max={60}
					value={alertStore.refreshRate}
					onChange={handleChangeRefreshRate}
					aria-label="Small"
					valueLabelDisplay="auto"
				/>
			</FormControl>

			<FormControl fullWidth>
				<FormControlLabel
					control={<Checkbox />}
					checked={alertStore.enable}
					onChange={handleChangeEnable}
					label="Enabled"
				/>
			</FormControl>
		</Container>
	);
}

import React from "react";
import { useNavigate } from "react-router-dom";

import GridViewIcon from "@mui/icons-material/GridView";
import SettingsIcon from "@mui/icons-material/Settings";
import { Paper } from "@mui/material";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

const bottomStyles = {
	paddingTop: "12px!important",
};
export const Menu = () => {
	const [value, setValue] = React.useState(0);
	const navigate = useNavigate();

	return (
		<Paper elevation={0} style={{ marginLeft: "320px" }}>
			<BottomNavigation
				showLabels
				value={value}
				onChange={(event, newValue) => {
					setValue(newValue);
				}}>
				<BottomNavigationAction
					label="Dashboard"
					sx={bottomStyles}
					onClick={() => navigate("/")}
					icon={<GridViewIcon />}
				/>
				<BottomNavigationAction
					label="Settings"
					sx={bottomStyles}
					onClick={() => navigate("/settings")}
					icon={<SettingsIcon />}
				/>
			</BottomNavigation>
		</Paper>
	);
};

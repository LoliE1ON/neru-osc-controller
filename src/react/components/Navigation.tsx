import * as React from "react";
import { useNavigate } from "react-router-dom";

import GridViewIcon from "@mui/icons-material/GridView";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import { Paper } from "@mui/material";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

const bottomStyles = {
	paddingTop: "12px!important",
};

export function Navigation() {
	const [value, setValue] = React.useState(0);
	const navigate = useNavigate();

	return (
		<Paper elevation={0}>
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
					label="Alert"
					sx={bottomStyles}
					onClick={() => navigate("/events/alert")}
					icon={<WarningAmberIcon />}
				/>
			</BottomNavigation>
		</Paper>
	);
}

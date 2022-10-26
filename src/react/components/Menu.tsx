import { routes } from "config/routes";

import React, { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import GrainIcon from "@mui/icons-material/Grain";
import GridViewIcon from "@mui/icons-material/GridView";
import SettingsIcon from "@mui/icons-material/Settings";
import { Paper } from "@mui/material";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

const bottomStyles = {
	paddingTop: "12px!important",
};

export const Menu = () => {
	const navigate = useNavigate();
	const location = useLocation();

	const value = useMemo(() => {
		const keys = Object.keys(routes);

		for (const route in routes) {
			// @ts-ignore
			if (routes[route].pathname === location.pathname) {
				return keys.indexOf(route);
			}
		}
	}, [location.pathname]);

	return (
		<Paper elevation={0} style={{ marginLeft: "320px" }}>
			<BottomNavigation showLabels value={value}>
				<BottomNavigationAction
					label="Dashboard"
					sx={bottomStyles}
					onClick={() => navigate("/")}
					icon={<GridViewIcon />}
				/>
				<BottomNavigationAction
					label="Parameters"
					sx={bottomStyles}
					onClick={() => navigate("/parameters")}
					icon={<GrainIcon />}
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

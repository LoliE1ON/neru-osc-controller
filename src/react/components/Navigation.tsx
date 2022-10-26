import * as React from "react";
import { useNavigate } from "react-router-dom";

import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import {
	ListItemIcon,
	ListItemText,
	MenuItem,
	MenuList,
	Paper,
	Typography,
} from "@mui/material";

export function Navigation() {
	const navigate = useNavigate();

	return (
		<Paper
			sx={{
				width: 320,
				height: "calc(100vh - var(--header-height))",
				maxWidth: "100%",
				position: "absolute",
				top: "30px",
			}}>
			<MenuList>
				<MenuItem disabled={true}>
					<ListItemText>Events</ListItemText>
					<Typography variant="body2" color="text.secondary"></Typography>
				</MenuItem>
			</MenuList>
			<MenuList>
				<MenuItem onClick={() => navigate("/events/alert")}>
					<ListItemIcon>
						<WarningAmberIcon fontSize="small" />
					</ListItemIcon>
					<ListItemText>Alert</ListItemText>
					<Typography variant="body2" color="text.secondary"></Typography>
				</MenuItem>
			</MenuList>
		</Paper>
	);
}

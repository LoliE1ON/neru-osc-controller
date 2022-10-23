import { store } from "store";
import { ipc } from "utils";

import "@fontsource/roboto/400.css";
import "App.css";

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { HashRouter as BrowserRouter, Route, Routes } from "react-router-dom";

import { IpcChannel } from "types/ipc";

import { Dashboard } from "pages/Dashboard";
import { Alert } from "pages/events/Alert";

import { Navigation } from "components/Navigation";

import CloseIcon from "@mui/icons-material/Close";
import MinimizeIcon from "@mui/icons-material/Minimize";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

function Header() {
	const onClose = () => ipc.invoke(IpcChannel.clientClose, null);
	const onMinimize = () => ipc.invoke(IpcChannel.clientMinimize, null);

	return (
		<AppBar position="static" color="primary" enableColorOnDark>
			<Toolbar
				sx={{ height: "var(--header-height)", minHeight: "auto", padding: "0 !important" }}
				variant="dense">
				<Typography sx={{ p: 1, fontWeight: "600" }} variant="subtitle1" component="div">
					Neru OSC Controller
				</Typography>
				<div className="app-header-hack" />
				<Button sx={{ minWidth: "35px" }} onClick={onMinimize} size="small" color="inherit">
					<MinimizeIcon />
				</Button>
				<Button sx={{ minWidth: "35px" }} onClick={onClose} size="small" color="inherit">
					<CloseIcon />
				</Button>
			</Toolbar>
		</AppBar>
	);
}

function AppWrapper({ children }: { children: React.ReactNode }) {
	return (
		<div style={{ height: "100vh" }}>
			<Header />
			<Navigation />
			{children}
		</div>
	);
}

function AppBody({ children }: { children: React.ReactNode }) {
	return <div style={{ height: "calc(100vh - 56px - var(--header-height))", overflowX: "auto" }}>{children}</div>;
}

function App() {
	const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

	const theme = React.useMemo(
		() =>
			createTheme({
				palette: {
					primary: {
						main: "#1DB954",
					},
					secondary: {
						main: "#039be5",
					},
					mode: prefersDarkMode ? "dark" : "light",
				},
			}),
		[prefersDarkMode]
	);

	return (
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<BrowserRouter>
					<CssBaseline />
					<AppWrapper>
						<AppBody>
							<Routes>
								<Route path="/" element={<Dashboard />} />
								<Route path="/events/alert" element={<Alert />} />
							</Routes>
						</AppBody>
					</AppWrapper>
				</BrowserRouter>
			</ThemeProvider>
		</Provider>
	);
}

ReactDOM.render(<App />, document.body.querySelector("#app"));

import "@fontsource/roboto/400.css";
import "App.css";

import React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter as BrowserRouter, Route, Routes } from "react-router-dom";

import { Dashboard } from "pages/Dashboard";
import { Alert } from "pages/events/Alert";

import { Header } from "components/Header";
import { Menu } from "components/Menu";
import { Navigation } from "components/Navigation";

import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

function AppWrapper({ children }: { children: React.ReactNode }) {
	return (
		<div style={{ height: "100vh" }}>
			<Header />
			<Menu />
			<Navigation />
			{children}
		</div>
	);
}

function AppBody({ children }: { children: React.ReactNode }) {
	return (
		<div
			style={{
				height: "calc(100vh - 56px - var(--header-height))",
				overflowX: "auto",
				marginLeft: "320px",
			}}>
			{children}
		</div>
	);
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
	);
}

const root = createRoot(document.body.querySelector("#app"));
root.render(<App />);

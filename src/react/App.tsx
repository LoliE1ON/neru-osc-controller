import { routes } from "config/routes";
import { ipc } from "utils";

import "@fontsource/roboto/400.css";
import "App.css";

import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter as BrowserRouter, Route, Routes } from "react-router-dom";

import { IpcChannel } from "types/ipc";

import { syncStores } from "store/store";

import { Dashboard } from "pages/Dashboard";
import { Parameters } from "pages/Parameters";
import { Settings } from "pages/Settings";
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
	useEffect(() => {
		ipc.invoke(IpcChannel.getStore, null).then(store => syncStores(store));
		ipc.on(IpcChannel.sendStore, async (e, store) => syncStores(store));
	}, []);

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
							{Object.keys(routes).map((key: string, index: number) => {
								return (
									<Route
										// @ts-ignore
										path={routes[key].pathname}
										key={index}
										// @ts-ignore
										element={routes[key].component}
									/>
								);
							})}
							<Route path="/" element={<Dashboard />} />
							<Route path="/parameters" element={<Parameters />} />
							<Route path="/settings" element={<Settings />} />

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

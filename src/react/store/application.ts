import { ApplicationState } from "domain/application";
import { atom } from "nanostores";

export const application = atom<ApplicationState>({
	configPath: "",
});

export function setApplicationState(state: ApplicationState): void {
	application.set({
		...state,
	});
}

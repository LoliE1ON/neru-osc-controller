import { VrchatState } from "domain/vrchat";
import { atom } from "nanostores";

export const vrchat = atom<VrchatState>({
	isRunning: false,
});

export function setVrchatStore(state: VrchatState): void {
	vrchat.set({
		...state,
	});
}

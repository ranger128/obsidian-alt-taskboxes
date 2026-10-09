import { Plugin } from "obsidian";

interface Marker {
	/** Inner markup of a Lucide icon (ISC license, lucide.dev). */
	icon: string;
	/** CSS color for the icon. */
	color: string;
	/** Strike through the task text, like a finished task. */
	struck?: boolean;
}

const SQUARE = `<rect width="18" height="18" x="3" y="3" rx="2"/>`;
const SQUARE_CHECK_BIG = `<path d="M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344"/><path d="m9 11 3 3L22 4"/>`;

// Keyed by the character between the brackets: `- [x]`.
const MARKERS: Record<string, Marker> = {
	" ": { icon: SQUARE, color: "var(--checkbox-border-color)" }, // To do
	x: { icon: SQUARE_CHECK_BIG, color: "var(--color-green)", struck: true }, // Done
	X: { icon: SQUARE_CHECK_BIG, color: "var(--color-green)", struck: true }, // Done
	"/": { icon: SQUARE + `<line x1="9" x2="15" y1="15" y2="9"/>`, color: "var(--color-yellow)" }, // In progress
	"=": { icon: SQUARE + `<line x1="10" x2="10" y1="15" y2="9"/><line x1="14" x2="14" y1="15" y2="9"/>`, color: "var(--color-orange)" }, // Paused
	"#": { icon: SQUARE + `<rect x="9" y="9" width="6" height="6" rx="1"/>`, color: "var(--color-red)" }, // Blocked
	"@": { icon: SQUARE + `<circle cx="12" cy="10" r="3"/><path d="M7 21v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2"/>`, color: "var(--color-purple)" }, // Delegated
	">": { icon: SQUARE + `<path d="M8 12h8"/><path d="m12 16 4-4-4-4"/>`, color: "var(--color-blue)" }, // Forwarded
	"<": { icon: SQUARE + `<path d="m12 8-4 4 4 4"/><path d="M16 12H8"/>`, color: "var(--color-cyan)" }, // Scheduled
	"-": { icon: SQUARE + `<path d="m15 9-6 6"/><path d="m9 9 6 6"/>`, color: "var(--text-faint)", struck: true }, // Cancelled
};

// Any other character shows as a checked box.
const FALLBACK: Marker = { icon: SQUARE_CHECK_BIG, color: "var(--checkbox-color)" };

const iconUrl = (icon: string) =>
	`url("data:image/svg+xml,${encodeURIComponent(
		`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${icon}</svg>`
	)}")`;

const rule = (selector: string, { icon, color }: Marker) =>
	`${selector} { --atb-icon: ${iconUrl(icon)}; --atb-color: ${color}; }`;

const sel = (char: string) => `[data-task=${JSON.stringify(char)}]`;

const css = [
	rule("[data-task]", FALLBACK),
	...Object.entries(MARKERS).map(([char, marker]) => rule(sel(char), marker)),
	// Unstruck markers keep normal text instead of the done style.
	`[data-task]:not(${Object.keys(MARKERS).filter((c) => MARKERS[c].struck).map(sel).join(", ")}) {
		--checklist-done-decoration: none;
		--checklist-done-color: var(--text-normal);
	}`,
].join("\n");

export default class AltTaskboxesPlugin extends Plugin {
	onload() {
		const style = document.head.createEl("style", { text: css });
		this.register(() => style.remove());
	}
}

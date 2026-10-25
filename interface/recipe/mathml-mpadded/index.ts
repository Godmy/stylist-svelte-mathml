import type { HTMLAttributes } from 'svelte/elements';
import type { SlotMathmlGlobal } from '$stylist/mathml/interface/slot/mathml-global';

/** `<mpadded>`: Content with adjusted space around it. */
export interface RecipeMathmlMpadded extends HTMLAttributes<MathMLElement>, SlotMathmlGlobal {
	/** Bound DOM node (`bind:element`). */
	element?: MathMLElement | null;
	/** Width (CSS length). */
	width?: string;
	/** Height above the baseline (CSS length). */
	height?: string;
	/** Depth below the baseline (CSS length). */
	depth?: string;
	/** Horizontal shift of the content (CSS length). */
	lspace?: string;
	/** Vertical shift of the content (CSS length). */
	voffset?: string;
}

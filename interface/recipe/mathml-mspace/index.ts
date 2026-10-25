import type { HTMLAttributes } from 'svelte/elements';
import type { SlotMathmlGlobal } from '$stylist/mathml/interface/slot/mathml-global';

/** `<mspace>`: Blank space of the given size. */
export interface RecipeMathmlMspace extends HTMLAttributes<MathMLElement>, SlotMathmlGlobal {
	/** Bound DOM node (`bind:element`). */
	element?: MathMLElement | null;
	/** Width (CSS length). */
	width?: string;
	/** Height above the baseline (CSS length). */
	height?: string;
	/** Depth below the baseline (CSS length). */
	depth?: string;
}

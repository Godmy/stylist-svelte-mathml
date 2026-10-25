import type { HTMLAttributes } from 'svelte/elements';
import type { SlotMathmlGlobal } from '$stylist/mathml/interface/slot/mathml-global';

/** `<munderover>`: Underscript and overscript: base, underscript, overscript. */
export interface RecipeMathmlMunderover extends HTMLAttributes<MathMLElement>, SlotMathmlGlobal {
	/** Bound DOM node (`bind:element`). */
	element?: MathMLElement | null;
	/** Draws the overscript as an accent. */
	accent?: boolean;
	/** Draws the underscript as an accent. */
	accentunder?: boolean;
}

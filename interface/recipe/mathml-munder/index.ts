import type { HTMLAttributes } from 'svelte/elements';
import type { SlotMathmlGlobal } from '$stylist/mathml/interface/slot/mathml-global';

/** `<munder>`: Underscript: base, then underscript. */
export interface RecipeMathmlMunder extends HTMLAttributes<MathMLElement>, SlotMathmlGlobal {
	/** Bound DOM node (`bind:element`). */
	element?: MathMLElement | null;
	/** Draws the underscript as an accent. */
	accentunder?: boolean;
}

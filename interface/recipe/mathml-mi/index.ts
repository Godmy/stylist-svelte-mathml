import type { HTMLAttributes } from 'svelte/elements';
import type { SlotMathmlGlobal } from '$stylist/mathml/interface/slot/mathml-global';

/** `<mi>`: Identifier: variable, function name or symbolic constant. */
export interface RecipeMathmlMi extends HTMLAttributes<MathMLElement>, SlotMathmlGlobal {
	/** Bound DOM node (`bind:element`). */
	element?: MathMLElement | null;
	/** Upright rendering of a single-character identifier. */
	mathvariant?: 'normal';
}

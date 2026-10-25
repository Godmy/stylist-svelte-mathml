import type { HTMLAttributes } from 'svelte/elements';
import type { SlotMathmlGlobal } from '$stylist/mathml/interface/slot/mathml-global';

/** `<mroot>`: Root with an explicit index: base, then index. */
export interface RecipeMathmlMroot extends HTMLAttributes<MathMLElement>, SlotMathmlGlobal {
	/** Bound DOM node (`bind:element`). */
	element?: MathMLElement | null;
}

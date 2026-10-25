import type { HTMLAttributes } from 'svelte/elements';
import type { SlotMathmlGlobal } from '$stylist/mathml/interface/slot/mathml-global';

/** `<msub>`: Subscript: base, then subscript. */
export interface RecipeMathmlMsub extends HTMLAttributes<MathMLElement>, SlotMathmlGlobal {
	/** Bound DOM node (`bind:element`). */
	element?: MathMLElement | null;
}

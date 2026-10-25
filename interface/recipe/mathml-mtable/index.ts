import type { HTMLAttributes } from 'svelte/elements';
import type { SlotMathmlGlobal } from '$stylist/mathml/interface/slot/mathml-global';

/** `<mtable>`: Table or matrix of mtr rows. */
export interface RecipeMathmlMtable extends HTMLAttributes<MathMLElement>, SlotMathmlGlobal {
	/** Bound DOM node (`bind:element`). */
	element?: MathMLElement | null;
}

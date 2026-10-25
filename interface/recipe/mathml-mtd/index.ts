import type { HTMLAttributes } from 'svelte/elements';
import type { SlotMathmlGlobal } from '$stylist/mathml/interface/slot/mathml-global';

/** `<mtd>`: Cell of an mtr row. */
export interface RecipeMathmlMtd extends HTMLAttributes<MathMLElement>, SlotMathmlGlobal {
	/** Bound DOM node (`bind:element`). */
	element?: MathMLElement | null;
	/** Number of spanned columns. */
	columnspan?: number;
	/** Number of spanned rows. */
	rowspan?: number;
}

import type { HTMLAttributes } from 'svelte/elements';
import type { SlotMathmlGlobal } from '$stylist/mathml/interface/slot/mathml-global';

/** `<maction>`: Legacy action wrapper; renders its first child. */
export interface RecipeMathmlMaction extends HTMLAttributes<MathMLElement>, SlotMathmlGlobal {
	/** Bound DOM node (`bind:element`). */
	element?: MathMLElement | null;
	/** Action kind (ignored by MathML Core). */
	actiontype?: string;
	/** Selected child, 1-based (ignored by MathML Core). */
	selection?: number;
}

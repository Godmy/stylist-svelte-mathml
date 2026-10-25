import type { HTMLAttributes } from 'svelte/elements';
import type { SlotMathmlGlobal } from '$stylist/mathml/interface/slot/mathml-global';

/** `<mo>`: Operator, fence, separator or accent. */
export interface RecipeMathmlMo extends HTMLAttributes<MathMLElement>, SlotMathmlGlobal {
	/** Bound DOM node (`bind:element`). */
	element?: MathMLElement | null;
	/** Position used for the operator dictionary lookup. */
	form?: 'prefix' | 'infix' | 'postfix';
	/** Marks the operator as a fence. */
	fence?: boolean;
	/** Marks the operator as a separator. */
	separator?: boolean;
	/** Leading space (CSS length). */
	lspace?: string;
	/** Trailing space (CSS length). */
	rspace?: string;
	/** Stretches to the size of the surrounding content. */
	stretchy?: boolean;
	/** Stretches symmetrically around the math axis. */
	symmetric?: boolean;
	/** Maximum stretch size (CSS length). */
	maxsize?: string;
	/** Minimum stretch size (CSS length). */
	minsize?: string;
	/** Large operator in display style. */
	largeop?: boolean;
	/** Limits move to scripts when not in display style. */
	movablelimits?: boolean;
}

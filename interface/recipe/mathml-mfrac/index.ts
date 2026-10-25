import type { HTMLAttributes } from 'svelte/elements';
import type { SlotMathmlGlobal } from '$stylist/mathml/interface/slot/mathml-global';

/** `<mfrac>`: Fraction: numerator and denominator. */
export interface RecipeMathmlMfrac extends HTMLAttributes<MathMLElement>, SlotMathmlGlobal {
	/** Bound DOM node (`bind:element`). */
	element?: MathMLElement | null;
	/** Fraction bar thickness (CSS length or 0 for a binomial). */
	linethickness?: string;
}

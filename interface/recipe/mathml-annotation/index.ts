import type { HTMLAttributes } from 'svelte/elements';
import type { SlotMathmlGlobal } from '$stylist/mathml/interface/slot/mathml-global';

/** `<annotation>`: Text annotation inside semantics; not rendered. */
export interface RecipeMathmlAnnotation extends HTMLAttributes<MathMLElement>, SlotMathmlGlobal {
	/** Bound DOM node (`bind:element`). */
	element?: MathMLElement | null;
	/** Annotation format, e.g. application/x-tex. */
	encoding?: string;
}

import type { HTMLAttributes } from 'svelte/elements';
import type { SlotMathmlGlobal } from '$stylist/mathml/interface/slot/mathml-global';

/** `<annotation-xml>`: XML annotation inside semantics; not rendered. */
export interface RecipeMathmlAnnotationXml extends HTMLAttributes<MathMLElement>, SlotMathmlGlobal {
	/** Bound DOM node (`bind:element`). */
	element?: MathMLElement | null;
	/** Annotation format, e.g. MathML-Content. */
	encoding?: string;
}

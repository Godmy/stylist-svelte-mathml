import type { MATHML_ELEMENT } from '$stylist/mathml/const/record/mathml-element';

/** Name of a MathML Core element. */
export type MathmlTag = keyof typeof MATHML_ELEMENT;

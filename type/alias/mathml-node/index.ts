import type { HtmlTextNode } from '$stylist/html/type/struct/html-text-node';
import type { MathmlElementNode } from '$stylist/mathml/type/struct/mathml-element-node';

/** Node of a serializable MathML tree: an element or character data. */
export type MathmlNode = MathmlElementNode | HtmlTextNode;

import type { HtmlAttributeValue } from '$stylist/html/type/alias/html-attribute-value';
import type { HtmlTextNode } from '$stylist/html/type/struct/html-text-node';
import type { MathmlTag } from '$stylist/mathml/type/alias/mathml-tag';

/** Composite of a MathML tree: an element, its attributes and ordered children. */
export type MathmlElementNode = {
	kind: 'element';
	tag: MathmlTag;
	/** Stable id for editors (`data-mathml-node`). */
	id?: string;
	attrs?: Record<string, HtmlAttributeValue>;
	children?: (MathmlElementNode | HtmlTextNode)[];
};

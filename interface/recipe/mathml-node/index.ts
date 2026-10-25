import type { MathmlNode } from '$stylist/mathml/type/alias/mathml-node';

/** Recursive renderer of one node of a MathML tree; needs a `<math>` ancestor. */
export interface RecipeMathmlNode {
	node: MathmlNode;
}

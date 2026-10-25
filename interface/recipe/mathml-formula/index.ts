import type { HTMLAttributes } from 'svelte/elements';
import type { SlotMathmlGlobal } from '$stylist/mathml/interface/slot/mathml-global';
import type { MathmlNode } from '$stylist/mathml/type/alias/mathml-node';

/** Formula: a `<math>` root drawn from a serializable MathML tree. */
export interface RecipeMathmlFormula
	extends Omit<HTMLAttributes<MathMLElement>, 'children'>, SlotMathmlGlobal {
	/** Bound `<math>` node (`bind:element`). */
	element?: MathMLElement | null;
	/** Children of `<math>`; checked with checkMathmlNode in dev. */
	nodes: MathmlNode[];
	/** `block` centres the formula on its own line, `inline` keeps it in the text flow. */
	display?: 'block' | 'inline';
	/** Text alternative for assistive technology. */
	alttext?: string;
}

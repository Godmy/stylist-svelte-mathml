import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';
import type { TokenFontSize } from '$stylist/design-token/type/alias/font-size';
import type { SlotMathmlGlobal } from '$stylist/mathml/interface/slot/mathml-global';
import type { MathmlNode } from '$stylist/mathml/type/alias/mathml-node';

/** Formula: a `<math>` root drawn from a serializable MathML tree or from MathML markup. */
export interface RecipeMathmlFormula
	extends Omit<HTMLAttributes<MathMLElement>, 'children'>, SlotMathmlGlobal {
	/** Bound `<math>` node (`bind:element`). */
	element?: MathMLElement | null;
	/** Children of `<math>` as data; checked with checkMathmlNode in dev. */
	nodes?: MathmlNode[];
	/** Children of `<math>` as markup (MathML atoms); drawn after `nodes`. */
	children?: Snippet;
	/** `block` centres the formula on its own line, `inline` keeps it in the text flow. */
	display?: 'block' | 'inline';
	/** Font size step (`--font-size-*`); block formulas default to `6`, inline ones follow the text. */
	size?: TokenFontSize;
	/** Text alternative for assistive technology. */
	alttext?: string;
}

import { MATHML_FENCE } from '$stylist/mathml/const/record/mathml-fence';
import { createMathmlTokenNode } from '$stylist/mathml/function/create/mathml-token-node';
import type { MathmlElementNode } from '$stylist/mathml/type/struct/mathml-element-node';
import type { MathmlFence } from '$stylist/mathml/type/alias/mathml-fence';

/** Fenced matrix: `mrow` of an opening `mo`, an `mtable` of token cells and a closing `mo`. */
export function createMathmlMatrixNode(
	rows: readonly (readonly (string | number)[])[],
	fence: MathmlFence = 'parentheses'
): MathmlElementNode {
	const [open, close] = MATHML_FENCE[fence];
	const table: MathmlElementNode = {
		kind: 'element',
		tag: 'mtable',
		children: rows.map((row) => ({
			kind: 'element',
			tag: 'mtr',
			children: row.map((cell) => ({
				kind: 'element',
				tag: 'mtd',
				children: [createMathmlTokenNode(cell)]
			}))
		}))
	};
	const operator = (value: string): MathmlElementNode => ({
		kind: 'element',
		tag: 'mo',
		attrs: { fence: true, stretchy: true },
		children: [{ kind: 'text', value }]
	});
	return {
		kind: 'element',
		tag: 'mrow',
		children: open ? [operator(open), table, operator(close)] : [table]
	};
}

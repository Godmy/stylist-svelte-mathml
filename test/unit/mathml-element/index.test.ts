import { describe, expect, it } from 'vitest';
import { MATHML_ELEMENT } from '$stylist/mathml/const/record/mathml-element';

// MathML Core elements inside <math>, as listed by the Svelte compiler (minus the root).
const CORE = [
	'annotation',
	'annotation-xml',
	'maction',
	'merror',
	'mfrac',
	'mi',
	'mmultiscripts',
	'mn',
	'mo',
	'mover',
	'mpadded',
	'mphantom',
	'mprescripts',
	'mroot',
	'mrow',
	'ms',
	'mspace',
	'msqrt',
	'mstyle',
	'msub',
	'msubsup',
	'msup',
	'mtable',
	'mtd',
	'mtext',
	'mtr',
	'munder',
	'munderover',
	'semantics'
];

describe('mathml element registry', () => {
	it('covers every MathML Core element except the html-owned root', () => {
		expect(Object.keys(MATHML_ELEMENT).sort()).toEqual(CORE);
	});

	it('has one atom wrapper per element', () => {
		const atoms = Object.keys(
			import.meta.glob('$stylist/mathml/component/atom/*/index.svelte')
		).map((path) =>
			path
				.split('/')
				.at(-2)!
				.replace(/^mathml-/, '')
		);
		expect(atoms.sort()).toEqual(CORE);
	});

	it('gives arity only to fixed content models', () => {
		for (const spec of Object.values(MATHML_ELEMENT))
			expect(spec.arity > 0).toBe(spec.content === 'fixed');
	});
});

import { describe, expect, it } from 'vitest';
import { checkMathmlNode } from '$stylist/mathml/function/check/mathml-node';
import type { MathmlNode } from '$stylist/mathml/type/alias/mathml-node';
import type { MathmlTag } from '$stylist/mathml/type/alias/mathml-tag';

const el = (tag: MathmlTag, ...children: MathmlNode[]): MathmlNode => ({
	kind: 'element',
	tag,
	children
});
const text = (value: string): MathmlNode => ({ kind: 'text', value });
const x = el('mi', text('x'));

describe('checkMathmlNode', () => {
	it('accepts text in token elements only', () => {
		expect(checkMathmlNode(x)).toBe(true);
		expect(checkMathmlNode(el('mrow', text('x')))).toBe(false);
		expect(checkMathmlNode(el('mi', x))).toBe(false);
		expect(checkMathmlNode(el('mrow', text(' \n'), x))).toBe(true);
	});

	it('enforces exact arity of fractions, roots and scripts', () => {
		expect(checkMathmlNode(el('mfrac', x, x))).toBe(true);
		expect(checkMathmlNode(el('mfrac', x))).toBe(false);
		expect(checkMathmlNode(el('msubsup', x, x, x))).toBe(true);
		expect(checkMathmlNode(el('msup', x, x, x))).toBe(false);
	});

	it('keeps tables as mtable > mtr > mtd', () => {
		expect(checkMathmlNode(el('mtable', el('mtr', el('mtd', x))))).toBe(true);
		expect(checkMathmlNode(el('mtable', el('mtd', x)))).toBe(false);
		expect(checkMathmlNode(el('mtr', x))).toBe(false);
	});

	it('pairs multiscripts around one mprescripts', () => {
		expect(checkMathmlNode(el('mmultiscripts', x, x, x, el('mprescripts'), x, x))).toBe(true);
		expect(checkMathmlNode(el('mmultiscripts', x, x))).toBe(false);
		expect(checkMathmlNode(el('mmultiscripts', x, el('mprescripts'), el('mprescripts')))).toBe(
			false
		);
	});

	it('puts annotations after the presentation child of semantics', () => {
		const annotation = el('annotation', text('x'));
		expect(checkMathmlNode(el('semantics', x, annotation))).toBe(true);
		expect(checkMathmlNode(el('semantics', annotation, x))).toBe(false);
	});

	it('rejects unknown tags and checks descendants', () => {
		expect(checkMathmlNode({ kind: 'element', tag: 'none' as MathmlTag })).toBe(false);
		expect(checkMathmlNode(el('mrow', el('mfrac', x)))).toBe(false);
		expect(checkMathmlNode(el('mspace'))).toBe(true);
		expect(checkMathmlNode(el('mspace', x))).toBe(false);
	});
});

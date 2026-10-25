import { describe, expect, it } from 'vitest';
import { serializeMathmlMarkup } from '$stylist/mathml/function/serialize/mathml-markup';
import { createMathmlTokenNode } from '$stylist/mathml/function/create/mathml-token-node';
import { createMathmlMatrixNode } from '$stylist/mathml/function/create/mathml-matrix-node';
import { checkMathmlNode } from '$stylist/mathml/function/check/mathml-node';

describe('mathml serialize and create', () => {
	it('serializes a namespaced root with escaped text and attributes', () => {
		const markup = serializeMathmlMarkup(
			[
				{
					kind: 'element',
					tag: 'mo',
					attrs: { stretchy: false, lspace: '', title: 'a "b"' },
					children: [{ kind: 'text', value: '<' }]
				}
			],
			{ display: 'block', alttext: undefined }
		);
		expect(markup).toBe(
			'<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">' +
				'<mo stretchy="false" title="a &quot;b&quot;">&lt;</mo></math>'
		);
	});

	it('classifies plain values as mn, mi or mo', () => {
		expect(createMathmlTokenNode(42).tag).toBe('mn');
		expect(createMathmlTokenNode('-0.5').tag).toBe('mn');
		expect(createMathmlTokenNode('sin').tag).toBe('mi');
		expect(createMathmlTokenNode('α').tag).toBe('mi');
		expect(createMathmlTokenNode('±').tag).toBe('mo');
	});

	it('builds a valid fenced matrix', () => {
		const matrix = createMathmlMatrixNode(
			[
				[1, 0],
				[0, 1]
			],
			'brackets'
		);
		expect(checkMathmlNode(matrix)).toBe(true);
		expect(serializeMathmlMarkup([matrix])).toContain('<mo fence="true" stretchy="true">[</mo>');
		expect(createMathmlMatrixNode([[1]], 'none').children).toHaveLength(1);
	});
});

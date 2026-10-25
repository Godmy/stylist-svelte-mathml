import { afterEach, describe, expect, it } from 'vitest';
import { cleanup, render } from '@testing-library/svelte';
import { createRawSnippet } from 'svelte';
import MathmlFormula from '$stylist/mathml/component/molecule/mathml-formula/index.svelte';
import MathmlMatrix from '$stylist/mathml/component/organism/mathml-matrix/index.svelte';
import { MATHML_NAMESPACE } from '$stylist/mathml/const/value/mathml-namespace';

afterEach(() => cleanup());

const mathmlOnly = (root: Element) =>
	[root, ...root.querySelectorAll('*')].every((node) => node.namespaceURI === MATHML_NAMESPACE);

describe('MathmlFormula and MathmlMatrix', () => {
	it('draws the tree as MathML elements with attributes and text', () => {
		const { container } = render(MathmlFormula, {
			props: {
				display: 'block',
				alttext: 'x squared',
				nodes: [
					{
						kind: 'element',
						tag: 'msup',
						id: 'power',
						children: [
							{ kind: 'element', tag: 'mi', children: [{ kind: 'text', value: 'x' }] },
							{ kind: 'element', tag: 'mn', children: [{ kind: 'text', value: '2' }] }
						]
					}
				]
			}
		});
		const math = container.querySelector('math')!;
		expect(math.getAttribute('display')).toBe('block');
		expect(math.getAttribute('alttext')).toBe('x squared');
		expect(math.querySelector('msup')!.getAttribute('data-mathml-node')).toBe('power');
		expect(math.textContent).toBe('x2');
		expect(mathmlOnly(math)).toBe(true);
	});

	it('marks block formulas and size steps for the font-size scale', () => {
		const block = render(MathmlFormula, { props: { display: 'block', nodes: [] } }).container;
		expect(block.querySelector('math')!.getAttribute('display')).toBe('block');
		expect(block.querySelector('math')!.hasAttribute('data-size')).toBe(false);
		const sized = render(MathmlFormula, { props: { size: '8', nodes: [] } }).container;
		expect(sized.querySelector('math')!.getAttribute('data-size')).toBe('8');
	});

	it('draws markup children after the node tree', () => {
		const { container } = render(MathmlFormula, {
			props: {
				nodes: [{ kind: 'element', tag: 'mi', children: [{ kind: 'text', value: 'x' }] }],
				children: createRawSnippet(() => ({ render: () => '<mn>2</mn>' }))
			}
		});
		expect(container.querySelector('math')!.textContent).toBe('x2');
	});

	it('draws a fenced matrix with typed cells', () => {
		const { container } = render(MathmlMatrix, {
			props: {
				fence: 'brackets',
				rows: [
					[1, 'a'],
					['b', 2]
				]
			}
		});
		const math = container.querySelector('math')!;
		expect([...math.querySelectorAll('mo')].map((node) => node.textContent)).toEqual(['[', ']']);
		expect(math.querySelector('mo')!.getAttribute('stretchy')).toBe('true');
		expect(math.querySelectorAll('mtr')).toHaveLength(2);
		expect([...math.querySelectorAll('mtd > *')].map((node) => node.localName)).toEqual([
			'mn',
			'mi',
			'mi',
			'mn'
		]);
		expect(mathmlOnly(math)).toBe(true);
	});
});

import { describe, expect, it } from 'vitest';
import { HTML_LAYER_ORDER } from '$stylist/html/const/array/html-layer-order';

// MathML elements keep the browser's math layout; the formula root alone sets the math font and
// the size step, under the canonical layer order with zero-specificity selectors.
const sources = import.meta.glob<string>('../../../component/*/*/index.svelte', {
	eager: true,
	query: '?raw',
	import: 'default'
});

const styled = Object.entries(sources)
	.filter(([, source]) => source.includes('<style>'))
	.map(([path, source]) => ({
		family: path.replace('../../../component/', '').replace('/index.svelte', ''),
		css: source.slice(source.indexOf('<style>'), source.indexOf('</style>'))
	}));

/** Selector lines of the stylesheet: everything before `{` that is not an at-rule or keyframe. */
function selectors(css: string): string[] {
	return css
		.split('\n')
		.map((line) => line.trim())
		.filter((line) => line.endsWith('{') && !line.startsWith('@') && line !== ':global {')
		.map((line) => line.slice(0, -1).trim())
		.filter((selector) => !/^(\d+%|from|to)(,|$)/.test(selector))
		.flatMap((selector) => selector.split(/,(?![^(]*\))/).map((part) => part.trim()))
		.filter(Boolean);
}

describe('mathml style layer', () => {
	it('leaves the element wrappers unstyled', () => {
		expect(styled.map(({ family }) => family)).toEqual(['molecule/mathml-formula']);
	});

	it.each(styled)('$family orders the layers and keeps rules in @layer mathml', ({ css }) => {
		expect(css).toContain(`@layer ${HTML_LAYER_ORDER.join(', ')};`);
		expect(css).toContain('@layer mathml {');
	});

	it.each(styled)('$family uses zero-specificity selectors', ({ css }) => {
		for (const selector of selectors(css)) expect(selector).toMatch(/^:where\(/);
	});

	it.each(styled)('$family takes the math font from the theme token', ({ css }) => {
		for (const [, value] of css.matchAll(/font-family:\s*([^;]+);/g))
			expect(value).toBe('var(--font-math, math)');
		expect(css).not.toMatch(/line-height:\s*var\(--line-height-(normal|relaxed)/);
	});
});

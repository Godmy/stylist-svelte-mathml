import { afterEach, describe, expect, it } from 'vitest';
import { cleanup, render } from '@testing-library/svelte';
import type { Component } from 'svelte';
import type { ContractStory } from '$stylist/html/interface/contract/story';
import { MATHML_NAMESPACE } from '$stylist/mathml/const/value/mathml-namespace';
import { MATHML_ELEMENT } from '$stylist/mathml/const/record/mathml-element';

afterEach(() => cleanup());

const stories = import.meta.glob<{ default: ContractStory }>(
	'$stylist/mathml/component/*/*/index.story.ts',
	{ eager: true }
);
const renders = import.meta.glob<{ default: Component<Record<string, unknown>> }>(
	'$stylist/mathml/component/*/*/index.story.svelte',
	{ eager: true }
);

describe('mathml stories', () => {
	const entries = Object.entries(stories);

	it('exist for every component', () => {
		expect(entries.length).toBe(32);
	});

	it.each(entries)('%s renders MathML in its namespace', (path, story) => {
		const renderPath = path.replace(/\.ts$/, '.svelte');
		const custom = renderPath in renders ? renders[renderPath]!.default : undefined;
		const { container } = render(custom ?? story.default.component, {
			props: { ...story.default.args }
		});
		const math = container.querySelector('math');
		expect(math).not.toBeNull();
		const tag = path
			.split('/')
			.at(-2)!
			.replace(/^mathml-/, '');
		if (custom && tag in MATHML_ELEMENT)
			expect(math!.getElementsByTagName(tag).length).toBeGreaterThan(0);
		expect(
			[math!, ...math!.querySelectorAll('*')].every(
				(node) => node.namespaceURI === MATHML_NAMESPACE
			)
		).toBe(true);
	});
});

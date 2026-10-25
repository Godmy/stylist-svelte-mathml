import MathmlSemantics from '$stylist/mathml/component/atom/mathml-semantics/index.svelte';
import type { RecipeMathmlSemantics } from '$stylist/mathml/interface/recipe/mathml-semantics';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** MathML children are not HtmlNode tags, so index.story.svelte draws the formula. */
export default {
	component: MathmlSemantics,
	title: 'MathmlSemantics',
	description: '<semantics> — Формула и её аннотации (например, исходный TeX)',
	args: {},
	controls: {
		displaystyle: {
			type: 'boolean'
		},
		scriptlevel: {
			type: 'number',
			min: -2,
			max: 2,
			step: 1
		},
		mathcolor: {
			type: 'color'
		},
		mathbackground: {
			type: 'color'
		},
		dir: {
			type: 'select',
			options: ['ltr', 'rtl']
		},
		class: {
			type: 'text'
		}
	},
	layout: 'centered'
} satisfies ContractStory<RecipeMathmlSemantics>;

import MathmlMphantom from '$stylist/mathml/component/atom/mathml-mphantom/index.svelte';
import type { RecipeMathmlMphantom } from '$stylist/mathml/interface/recipe/mathml-mphantom';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** MathML children are not HtmlNode tags, so index.story.svelte draws the formula. */
export default {
	component: MathmlMphantom,
	title: 'MathmlMphantom',
	description: '<mphantom> — Невидимое содержимое, сохраняющее место',
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
} satisfies ContractStory<RecipeMathmlMphantom>;

import MathmlMsqrt from '$stylist/mathml/component/atom/mathml-msqrt/index.svelte';
import type { RecipeMathmlMsqrt } from '$stylist/mathml/interface/recipe/mathml-msqrt';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** MathML children are not HtmlNode tags, so index.story.svelte draws the formula. */
export default {
	component: MathmlMsqrt,
	title: 'MathmlMsqrt',
	description: '<msqrt> — Квадратный корень',
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
} satisfies ContractStory<RecipeMathmlMsqrt>;

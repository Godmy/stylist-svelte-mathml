import MathmlMsubsup from '$stylist/mathml/component/atom/mathml-msubsup/index.svelte';
import type { RecipeMathmlMsubsup } from '$stylist/mathml/interface/recipe/mathml-msubsup';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** MathML children are not HtmlNode tags, so index.story.svelte draws the formula. */
export default {
	component: MathmlMsubsup,
	title: 'MathmlMsubsup',
	description: '<msubsup> — Нижний и верхний индексы',
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
} satisfies ContractStory<RecipeMathmlMsubsup>;

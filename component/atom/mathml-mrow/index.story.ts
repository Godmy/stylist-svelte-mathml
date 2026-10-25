import MathmlMrow from '$stylist/mathml/component/atom/mathml-mrow/index.svelte';
import type { RecipeMathmlMrow } from '$stylist/mathml/interface/recipe/mathml-mrow';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** MathML children are not HtmlNode tags, so index.story.svelte draws the formula. */
export default {
	component: MathmlMrow,
	title: 'MathmlMrow',
	description: '<mrow> — Горизонтальная группа подвыражений',
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
} satisfies ContractStory<RecipeMathmlMrow>;

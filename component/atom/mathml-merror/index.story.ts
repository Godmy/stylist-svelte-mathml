import MathmlMerror from '$stylist/mathml/component/atom/mathml-merror/index.svelte';
import type { RecipeMathmlMerror } from '$stylist/mathml/interface/recipe/mathml-merror';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** MathML children are not HtmlNode tags, so index.story.svelte draws the formula. */
export default {
	component: MathmlMerror,
	title: 'MathmlMerror',
	description: '<merror> — Сообщение об ошибке разметки',
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
} satisfies ContractStory<RecipeMathmlMerror>;

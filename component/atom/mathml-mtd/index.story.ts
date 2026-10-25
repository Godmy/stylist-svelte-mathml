import MathmlMtd from '$stylist/mathml/component/atom/mathml-mtd/index.svelte';
import type { RecipeMathmlMtd } from '$stylist/mathml/interface/recipe/mathml-mtd';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** MathML children are not HtmlNode tags, so index.story.svelte draws the formula. */
export default {
	component: MathmlMtd,
	title: 'MathmlMtd',
	description: '<mtd> — Ячейка строки mtr',
	args: {
		mathbackground: '#e0f2fe'
	},
	controls: {
		columnspan: {
			type: 'number',
			min: 1,
			max: 2,
			step: 1
		},
		rowspan: {
			type: 'number',
			min: 1,
			max: 2,
			step: 1
		},
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
} satisfies ContractStory<RecipeMathmlMtd>;

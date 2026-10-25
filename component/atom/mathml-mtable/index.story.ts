import MathmlMtable from '$stylist/mathml/component/atom/mathml-mtable/index.svelte';
import type { RecipeMathmlMtable } from '$stylist/mathml/interface/recipe/mathml-mtable';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** MathML children are not HtmlNode tags, so index.story.svelte draws the formula. */
export default {
	component: MathmlMtable,
	title: 'MathmlMtable',
	description: '<mtable> — Таблица или матрица из строк mtr',
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
} satisfies ContractStory<RecipeMathmlMtable>;

import MathmlMspace from '$stylist/mathml/component/atom/mathml-mspace/index.svelte';
import type { RecipeMathmlMspace } from '$stylist/mathml/interface/recipe/mathml-mspace';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** MathML children are not HtmlNode tags, so index.story.svelte draws the formula. */
export default {
	component: MathmlMspace,
	title: 'MathmlMspace',
	description: '<mspace> — Пробел заданного размера',
	args: {
		width: '2em'
	},
	controls: {
		width: {
			type: 'text'
		},
		height: {
			type: 'text'
		},
		depth: {
			type: 'text'
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
} satisfies ContractStory<RecipeMathmlMspace>;

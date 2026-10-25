import MathmlMroot from '$stylist/mathml/component/atom/mathml-mroot/index.svelte';
import type { RecipeMathmlMroot } from '$stylist/mathml/interface/recipe/mathml-mroot';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** MathML children are not HtmlNode tags, so index.story.svelte draws the formula. */
export default {
	component: MathmlMroot,
	title: 'MathmlMroot',
	description: '<mroot> — Корень с показателем: основание, затем показатель',
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
} satisfies ContractStory<RecipeMathmlMroot>;

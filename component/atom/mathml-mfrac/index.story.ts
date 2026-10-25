import MathmlMfrac from '$stylist/mathml/component/atom/mathml-mfrac/index.svelte';
import type { RecipeMathmlMfrac } from '$stylist/mathml/interface/recipe/mathml-mfrac';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** MathML children are not HtmlNode tags, so index.story.svelte draws the formula. */
export default {
	component: MathmlMfrac,
	title: 'MathmlMfrac',
	description: '<mfrac> — Дробь: числитель и знаменатель',
	args: {},
	controls: {
		linethickness: {
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
} satisfies ContractStory<RecipeMathmlMfrac>;

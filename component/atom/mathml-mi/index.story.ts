import MathmlMi from '$stylist/mathml/component/atom/mathml-mi/index.svelte';
import type { RecipeMathmlMi } from '$stylist/mathml/interface/recipe/mathml-mi';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** MathML children are not HtmlNode tags, so index.story.svelte draws the formula. */
export default {
	component: MathmlMi,
	title: 'MathmlMi',
	description: '<mi> — Идентификатор: переменная, имя функции, константа',
	args: {},
	controls: {
		mathvariant: {
			type: 'select',
			options: ['normal']
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
} satisfies ContractStory<RecipeMathmlMi>;

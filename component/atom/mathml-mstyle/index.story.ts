import MathmlMstyle from '$stylist/mathml/component/atom/mathml-mstyle/index.svelte';
import type { RecipeMathmlMstyle } from '$stylist/mathml/interface/recipe/mathml-mstyle';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** MathML children are not HtmlNode tags, so index.story.svelte draws the formula. */
export default {
	component: MathmlMstyle,
	title: 'MathmlMstyle',
	description: '<mstyle> — Изменение стиля для вложенных подвыражений',
	args: {
		displaystyle: true
	},
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
} satisfies ContractStory<RecipeMathmlMstyle>;

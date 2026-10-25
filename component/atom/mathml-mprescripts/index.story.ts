import MathmlMprescripts from '$stylist/mathml/component/atom/mathml-mprescripts/index.svelte';
import type { RecipeMathmlMprescripts } from '$stylist/mathml/interface/recipe/mathml-mprescripts';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** MathML children are not HtmlNode tags, so index.story.svelte draws the formula. */
export default {
	component: MathmlMprescripts,
	title: 'MathmlMprescripts',
	description: '<mprescripts> — Разделитель предындексов внутри mmultiscripts',
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
} satisfies ContractStory<RecipeMathmlMprescripts>;

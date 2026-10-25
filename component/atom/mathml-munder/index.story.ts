import MathmlMunder from '$stylist/mathml/component/atom/mathml-munder/index.svelte';
import type { RecipeMathmlMunder } from '$stylist/mathml/interface/recipe/mathml-munder';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** MathML children are not HtmlNode tags, so index.story.svelte draws the formula. */
export default {
	component: MathmlMunder,
	title: 'MathmlMunder',
	description: '<munder> — Подпись снизу: основание, затем подпись',
	args: {},
	controls: {
		accentunder: {
			type: 'boolean'
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
} satisfies ContractStory<RecipeMathmlMunder>;

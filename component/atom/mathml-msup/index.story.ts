import MathmlMsup from '$stylist/mathml/component/atom/mathml-msup/index.svelte';
import type { RecipeMathmlMsup } from '$stylist/mathml/interface/recipe/mathml-msup';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** MathML children are not HtmlNode tags, so index.story.svelte draws the formula. */
export default {
	component: MathmlMsup,
	title: 'MathmlMsup',
	description: '<msup> — Верхний индекс: основание, затем степень',
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
} satisfies ContractStory<RecipeMathmlMsup>;

import MathmlMsub from '$stylist/mathml/component/atom/mathml-msub/index.svelte';
import type { RecipeMathmlMsub } from '$stylist/mathml/interface/recipe/mathml-msub';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** MathML children are not HtmlNode tags, so index.story.svelte draws the formula. */
export default {
	component: MathmlMsub,
	title: 'MathmlMsub',
	description: '<msub> — Нижний индекс: основание, затем индекс',
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
} satisfies ContractStory<RecipeMathmlMsub>;

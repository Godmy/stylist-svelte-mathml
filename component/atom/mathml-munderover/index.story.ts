import MathmlMunderover from '$stylist/mathml/component/atom/mathml-munderover/index.svelte';
import type { RecipeMathmlMunderover } from '$stylist/mathml/interface/recipe/mathml-munderover';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** MathML children are not HtmlNode tags, so index.story.svelte draws the formula. */
export default {
	component: MathmlMunderover,
	title: 'MathmlMunderover',
	description: '<munderover> — Подписи снизу и сверху',
	args: {},
	controls: {
		accent: {
			type: 'boolean'
		},
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
} satisfies ContractStory<RecipeMathmlMunderover>;

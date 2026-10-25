import MathmlMover from '$stylist/mathml/component/atom/mathml-mover/index.svelte';
import type { RecipeMathmlMover } from '$stylist/mathml/interface/recipe/mathml-mover';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** MathML children are not HtmlNode tags, so index.story.svelte draws the formula. */
export default {
	component: MathmlMover,
	title: 'MathmlMover',
	description: '<mover> — Подпись сверху: основание, затем подпись',
	args: {
		accent: true
	},
	controls: {
		accent: {
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
} satisfies ContractStory<RecipeMathmlMover>;

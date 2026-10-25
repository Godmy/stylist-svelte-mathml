import MathmlMaction from '$stylist/mathml/component/atom/mathml-maction/index.svelte';
import type { RecipeMathmlMaction } from '$stylist/mathml/interface/recipe/mathml-maction';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** MathML children are not HtmlNode tags, so index.story.svelte draws the formula. */
export default {
	component: MathmlMaction,
	title: 'MathmlMaction',
	description: '<maction> — Устаревшая обёртка действия; отображает первого потомка',
	args: {
		actiontype: 'toggle',
		selection: 1
	},
	controls: {
		actiontype: {
			type: 'text'
		},
		selection: {
			type: 'number',
			min: 1,
			max: 2,
			step: 1
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
} satisfies ContractStory<RecipeMathmlMaction>;

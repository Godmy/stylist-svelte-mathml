import MathmlMpadded from '$stylist/mathml/component/atom/mathml-mpadded/index.svelte';
import type { RecipeMathmlMpadded } from '$stylist/mathml/interface/recipe/mathml-mpadded';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** MathML children are not HtmlNode tags, so index.story.svelte draws the formula. */
export default {
	component: MathmlMpadded,
	title: 'MathmlMpadded',
	description: '<mpadded> — Содержимое с изменёнными отступами',
	args: {
		lspace: '1em',
		mathbackground: '#fde68a'
	},
	controls: {
		width: {
			type: 'text'
		},
		height: {
			type: 'text'
		},
		depth: {
			type: 'text'
		},
		lspace: {
			type: 'text'
		},
		voffset: {
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
} satisfies ContractStory<RecipeMathmlMpadded>;

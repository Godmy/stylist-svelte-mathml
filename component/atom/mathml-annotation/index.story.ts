import MathmlAnnotation from '$stylist/mathml/component/atom/mathml-annotation/index.svelte';
import type { RecipeMathmlAnnotation } from '$stylist/mathml/interface/recipe/mathml-annotation';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** MathML children are not HtmlNode tags, so index.story.svelte draws the formula. */
export default {
	component: MathmlAnnotation,
	title: 'MathmlAnnotation',
	description: '<annotation> — Текстовая аннотация внутри semantics; не отображается',
	args: {
		encoding: 'application/x-tex'
	},
	controls: {
		encoding: {
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
} satisfies ContractStory<RecipeMathmlAnnotation>;

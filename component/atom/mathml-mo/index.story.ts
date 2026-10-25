import MathmlMo from '$stylist/mathml/component/atom/mathml-mo/index.svelte';
import type { RecipeMathmlMo } from '$stylist/mathml/interface/recipe/mathml-mo';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** MathML children are not HtmlNode tags, so index.story.svelte draws the formula. */
export default {
	component: MathmlMo,
	title: 'MathmlMo',
	description: '<mo> — Оператор, скобка, разделитель или акцент',
	args: {
		lspace: '0.5em',
		rspace: '0.5em'
	},
	controls: {
		form: {
			type: 'select',
			options: ['prefix', 'infix', 'postfix']
		},
		fence: {
			type: 'boolean'
		},
		separator: {
			type: 'boolean'
		},
		lspace: {
			type: 'text'
		},
		rspace: {
			type: 'text'
		},
		stretchy: {
			type: 'boolean'
		},
		symmetric: {
			type: 'boolean'
		},
		maxsize: {
			type: 'text'
		},
		minsize: {
			type: 'text'
		},
		largeop: {
			type: 'boolean'
		},
		movablelimits: {
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
} satisfies ContractStory<RecipeMathmlMo>;

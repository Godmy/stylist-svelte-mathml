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
			label: 'Form',
			description: 'Operator position: prefix, infix or postfix.',
			options: ['prefix', 'infix', 'postfix']
		},
		fence: {
			type: 'boolean',
			label: 'Fence',
			description: 'Marks the operator as a fence such as a parenthesis.'
		},
		separator: {
			type: 'boolean',
			label: 'Separator',
			description: 'Marks the operator as a separator such as a comma.'
		},
		lspace: {
			type: 'text',
			label: 'Left Space',
			description: 'Space before the operator as a CSS length.'
		},
		rspace: {
			type: 'text',
			label: 'Right Space',
			description: 'Space after the operator as a CSS length.'
		},
		stretchy: {
			type: 'boolean',
			label: 'Stretchy',
			description: 'Lets the operator stretch to the height of its neighbours.'
		},
		symmetric: {
			type: 'boolean',
			label: 'Symmetric',
			description: 'Stretches the operator symmetrically around the math axis.'
		},
		maxsize: {
			type: 'text',
			label: 'Max Size',
			description: 'Upper limit of the stretched operator size.'
		},
		minsize: {
			type: 'text',
			label: 'Min Size',
			description: 'Lower limit of the stretched operator size.'
		},
		largeop: {
			type: 'boolean',
			label: 'Large Operator',
			description: 'Draws the operator large in display style.'
		},
		movablelimits: {
			type: 'boolean',
			label: 'Movable Limits',
			description: 'Moves under/over scripts to the side in inline style.'
		},
		displaystyle: {
			type: 'boolean',
			label: 'Display Style',
			description: 'Draws scripts and operators in display size instead of inline size.'
		},
		scriptlevel: {
			type: 'number',
			label: 'Script Level',
			description: 'Script nesting level; each step makes the content smaller.',
			min: -2,
			max: 2,
			step: 1
		},
		mathcolor: {
			type: 'color',
			label: 'Math Color',
			description: 'Text color of the element (MathML mathcolor).'
		},
		mathbackground: {
			type: 'color',
			label: 'Math Background',
			description: 'Background color of the element (MathML mathbackground).'
		},
		dir: {
			type: 'select',
			label: 'Direction',
			description: 'Writing direction of the content.',
			options: ['ltr', 'rtl']
		},
		class: {
			type: 'text',
			label: 'Class',
			description: 'Extra class on the root element.'
		}
	},
	presets: {
		Prefix: { form: 'prefix' },
		Stretchy: { stretchy: true, symmetric: true },
		Spaced: { lspace: '1em', rspace: '1em' },
		'Large operator': { largeop: true, movablelimits: false },
		Colored: { mathcolor: '#2563eb' },
		Highlighted: { mathbackground: '#fef3c7' },
		Script: { scriptlevel: 1 }
	},
	layout: 'centered'
} satisfies ContractStory<RecipeMathmlMo>;

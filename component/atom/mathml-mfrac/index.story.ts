import MathmlMfrac from '$stylist/mathml/component/atom/mathml-mfrac/index.svelte';
import type { RecipeMathmlMfrac } from '$stylist/mathml/interface/recipe/mathml-mfrac';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** MathML children are not HtmlNode tags, so index.story.svelte draws the formula. */
export default {
	component: MathmlMfrac,
	title: 'MathmlMfrac',
	description: '<mfrac> — Дробь: числитель и знаменатель',
	args: {},
	controls: {
		linethickness: {
			type: 'text',
			label: 'Line Thickness',
			description: 'Thickness of the fraction bar as a CSS length; 0 hides it.'
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
		Binomial: { linethickness: '0' },
		'Thick bar': { linethickness: '0.2em' },
		Colored: { mathcolor: '#2563eb' },
		Highlighted: { mathbackground: '#fef3c7' },
		Script: { scriptlevel: 1 }
	},
	layout: 'centered'
} satisfies ContractStory<RecipeMathmlMfrac>;

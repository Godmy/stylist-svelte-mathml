import MathmlMtd from '$stylist/mathml/component/atom/mathml-mtd/index.svelte';
import type { RecipeMathmlMtd } from '$stylist/mathml/interface/recipe/mathml-mtd';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** MathML children are not HtmlNode tags, so index.story.svelte draws the formula. */
export default {
	component: MathmlMtd,
	title: 'MathmlMtd',
	description: '<mtd> — Ячейка строки mtr',
	args: {
		mathbackground: '#e0f2fe'
	},
	controls: {
		columnspan: {
			type: 'number',
			label: 'Column Span',
			description: 'Number of table columns the cell spans.',
			min: 1,
			max: 2,
			step: 1
		},
		rowspan: {
			type: 'number',
			label: 'Row Span',
			description: 'Number of table rows the cell spans.',
			min: 1,
			max: 2,
			step: 1
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
		'Two columns': { columnspan: 2 },
		Colored: { mathcolor: '#2563eb' },
		Highlighted: { mathbackground: '#fef3c7' },
		Script: { scriptlevel: 1 }
	},
	layout: 'centered'
} satisfies ContractStory<RecipeMathmlMtd>;

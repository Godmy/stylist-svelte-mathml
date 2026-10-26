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
			type: 'text',
			label: 'Action Type',
			description: 'Interaction kind of maction; browsers show the selected child.'
		},
		selection: {
			type: 'number',
			label: 'Selection',
			description: 'One-based index of the child maction shows.',
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
		Second: { selection: 2 },
		Colored: { mathcolor: '#2563eb' },
		Highlighted: { mathbackground: '#fef3c7' },
		Script: { scriptlevel: 1 }
	},
	layout: 'centered'
} satisfies ContractStory<RecipeMathmlMaction>;

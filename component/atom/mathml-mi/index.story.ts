import MathmlMi from '$stylist/mathml/component/atom/mathml-mi/index.svelte';
import type { RecipeMathmlMi } from '$stylist/mathml/interface/recipe/mathml-mi';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** MathML children are not HtmlNode tags, so index.story.svelte draws the formula. */
export default {
	component: MathmlMi,
	title: 'MathmlMi',
	description: '<mi> — Идентификатор: переменная, имя функции, константа',
	args: {},
	controls: {
		mathvariant: {
			type: 'select',
			label: 'Math Variant',
			description:
				'Font variant of the identifier; `normal` turns off the italic of one-letter names.',
			options: ['normal']
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
		Upright: { mathvariant: 'normal' },
		Colored: { mathcolor: '#2563eb' },
		Highlighted: { mathbackground: '#fef3c7' },
		Script: { scriptlevel: 1 }
	},
	layout: 'centered'
} satisfies ContractStory<RecipeMathmlMi>;

import MathmlMunderover from '$stylist/mathml/component/atom/mathml-munderover/index.svelte';
import type { RecipeMathmlMunderover } from '$stylist/mathml/interface/recipe/mathml-munderover';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** MathML children are not HtmlNode tags, so index.story.svelte draws the formula. */
export default {
	component: MathmlMunderover,
	title: 'MathmlMunderover',
	description: '<munderover> — Подписи снизу и сверху',
	args: {},
	controls: {
		accent: {
			type: 'boolean',
			label: 'Accent',
			description: 'Treats the over script as an accent, drawn closer to the base.'
		},
		accentunder: {
			type: 'boolean',
			label: 'Accent Under',
			description: 'Treats the under script as an accent, drawn closer to the base.'
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
		Accents: { accent: true, accentunder: true },
		Colored: { mathcolor: '#2563eb' },
		Highlighted: { mathbackground: '#fef3c7' },
		Script: { scriptlevel: 1 }
	},
	layout: 'centered'
} satisfies ContractStory<RecipeMathmlMunderover>;

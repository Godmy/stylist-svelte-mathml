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
			type: 'text',
			label: 'Width',
			description: 'Width as a CSS length.'
		},
		height: {
			type: 'text',
			label: 'Height',
			description: 'Height above the baseline as a CSS length.'
		},
		depth: {
			type: 'text',
			label: 'Depth',
			description: 'Depth below the baseline as a CSS length.'
		},
		lspace: {
			type: 'text',
			label: 'Left Space',
			description: 'Space before the operator as a CSS length.'
		},
		voffset: {
			type: 'text',
			label: 'Vertical Offset',
			description: 'Vertical shift of the content as a CSS length.'
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
		Padded: { lspace: '0.5em', width: '+1em' },
		Raised: { voffset: '0.3em' },
		Colored: { mathcolor: '#2563eb' },
		Highlighted: { mathbackground: '#fef3c7' },
		Script: { scriptlevel: 1 }
	},
	layout: 'centered'
} satisfies ContractStory<RecipeMathmlMpadded>;

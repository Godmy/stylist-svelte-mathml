import MathmlFormula from '$stylist/mathml/component/molecule/mathml-formula/index.svelte';
import type { RecipeMathmlFormula } from '$stylist/mathml/interface/recipe/mathml-formula';
import type { ContractStory } from '$stylist/html/interface/contract/story';
import { TOKEN_FONT_SIZE } from '$stylist/design-token/const/object/font-size';

/** Formula from a serializable MathML tree; presets show typical layouts. */
export default {
	component: MathmlFormula,
	title: 'MathmlFormula',
	description:
		'Формула из сериализуемого дерева MathML: нативный рендер браузера, без JS-библиотек',
	args: {
		display: 'block',
		size: '8',
		alttext: 'x equals minus b plus or minus square root of b squared minus 4 a c, over 2 a',
		nodes: [
			{ kind: 'element', tag: 'mi', children: [{ kind: 'text', value: 'x' }] },
			{ kind: 'element', tag: 'mo', children: [{ kind: 'text', value: '=' }] },
			{
				kind: 'element',
				tag: 'mfrac',
				children: [
					{
						kind: 'element',
						tag: 'mrow',
						children: [
							{ kind: 'element', tag: 'mo', children: [{ kind: 'text', value: '−' }] },
							{ kind: 'element', tag: 'mi', children: [{ kind: 'text', value: 'b' }] },
							{ kind: 'element', tag: 'mo', children: [{ kind: 'text', value: '±' }] },
							{
								kind: 'element',
								tag: 'msqrt',
								children: [
									{
										kind: 'element',
										tag: 'msup',
										children: [
											{ kind: 'element', tag: 'mi', children: [{ kind: 'text', value: 'b' }] },
											{ kind: 'element', tag: 'mn', children: [{ kind: 'text', value: '2' }] }
										]
									},
									{ kind: 'element', tag: 'mo', children: [{ kind: 'text', value: '−' }] },
									{ kind: 'element', tag: 'mn', children: [{ kind: 'text', value: '4' }] },
									{ kind: 'element', tag: 'mi', children: [{ kind: 'text', value: 'a' }] },
									{ kind: 'element', tag: 'mi', children: [{ kind: 'text', value: 'c' }] }
								]
							}
						]
					},
					{
						kind: 'element',
						tag: 'mrow',
						children: [
							{ kind: 'element', tag: 'mn', children: [{ kind: 'text', value: '2' }] },
							{ kind: 'element', tag: 'mi', children: [{ kind: 'text', value: 'a' }] }
						]
					}
				]
			}
		]
	},
	controls: {
		size: {
			type: 'select',
			label: 'Size',
			description:
				'Absolute font size step; without it a block formula is 1.5em of the text around it.',
			options: Object.keys(TOKEN_FONT_SIZE)
		},
		display: {
			type: 'select',
			label: 'Display',
			description: 'block centres the formula on its own line, inline keeps it in the text.',
			options: ['block', 'inline']
		},
		alttext: {
			type: 'text',
			label: 'Alt Text',
			description: 'Text alternative read by assistive technology.'
		},
		displaystyle: {
			type: 'boolean',
			label: 'Display Style',
			description: 'Draws scripts and operators in display size instead of inline size.'
		},
		mathcolor: {
			type: 'color',
			label: 'Math Color',
			description: 'Text color of the element (MathML mathcolor).'
		},
		mathsize: {
			type: 'text',
			label: 'Math Size',
			description: 'Font size of the element as a CSS length.'
		},
		dir: {
			type: 'select',
			label: 'Direction',
			description: 'Writing direction of the content.',
			options: ['ltr', 'rtl']
		},
		nodes: {
			type: 'json',
			label: 'Nodes',
			description: 'MathML tree drawn inside <math>, as serializable nodes.',
			example: [{ kind: 'element', tag: 'mi', children: [{ kind: 'text', value: 'x' }] }]
		}
	},
	presets: {
		Pythagoras: {
			alttext: 'a squared plus b squared equals c squared',
			nodes: [
				{
					kind: 'element',
					tag: 'msup',
					children: [
						{ kind: 'element', tag: 'mi', children: [{ kind: 'text', value: 'a' }] },
						{ kind: 'element', tag: 'mn', children: [{ kind: 'text', value: '2' }] }
					]
				},
				{ kind: 'element', tag: 'mo', children: [{ kind: 'text', value: '+' }] },
				{
					kind: 'element',
					tag: 'msup',
					children: [
						{ kind: 'element', tag: 'mi', children: [{ kind: 'text', value: 'b' }] },
						{ kind: 'element', tag: 'mn', children: [{ kind: 'text', value: '2' }] }
					]
				},
				{ kind: 'element', tag: 'mo', children: [{ kind: 'text', value: '=' }] },
				{
					kind: 'element',
					tag: 'msup',
					children: [
						{ kind: 'element', tag: 'mi', children: [{ kind: 'text', value: 'c' }] },
						{ kind: 'element', tag: 'mn', children: [{ kind: 'text', value: '2' }] }
					]
				}
			]
		},
		Sum: {
			alttext: 'sum of i from 1 to n equals n times n plus 1 over 2',
			nodes: [
				{
					kind: 'element',
					tag: 'munderover',
					children: [
						{ kind: 'element', tag: 'mo', children: [{ kind: 'text', value: '∑' }] },
						{
							kind: 'element',
							tag: 'mrow',
							children: [
								{ kind: 'element', tag: 'mi', children: [{ kind: 'text', value: 'i' }] },
								{ kind: 'element', tag: 'mo', children: [{ kind: 'text', value: '=' }] },
								{ kind: 'element', tag: 'mn', children: [{ kind: 'text', value: '1' }] }
							]
						},
						{ kind: 'element', tag: 'mi', children: [{ kind: 'text', value: 'n' }] }
					]
				},
				{ kind: 'element', tag: 'mi', children: [{ kind: 'text', value: 'i' }] },
				{ kind: 'element', tag: 'mo', children: [{ kind: 'text', value: '=' }] },
				{
					kind: 'element',
					tag: 'mfrac',
					children: [
						{
							kind: 'element',
							tag: 'mrow',
							children: [
								{ kind: 'element', tag: 'mi', children: [{ kind: 'text', value: 'n' }] },
								{ kind: 'element', tag: 'mo', children: [{ kind: 'text', value: '(' }] },
								{ kind: 'element', tag: 'mi', children: [{ kind: 'text', value: 'n' }] },
								{ kind: 'element', tag: 'mo', children: [{ kind: 'text', value: '+' }] },
								{ kind: 'element', tag: 'mn', children: [{ kind: 'text', value: '1' }] },
								{ kind: 'element', tag: 'mo', children: [{ kind: 'text', value: ')' }] }
							]
						},
						{ kind: 'element', tag: 'mn', children: [{ kind: 'text', value: '2' }] }
					]
				}
			]
		},
		Inline: { display: 'inline' }
	},
	layout: 'centered'
} satisfies ContractStory<RecipeMathmlFormula>;

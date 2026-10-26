import MathmlMatrix from '$stylist/mathml/component/organism/mathml-matrix/index.svelte';
import type { RecipeMathmlMatrix } from '$stylist/mathml/interface/recipe/mathml-matrix';
import type { ContractStory } from '$stylist/html/interface/contract/story';
import { TOKEN_FONT_SIZE } from '$stylist/design-token/const/object/font-size';

/** Matrix from plain rows: numbers become mn, letters mi, signs mo. */
export default {
	component: MathmlMatrix,
	title: 'MathmlMatrix',
	description: 'Матрица из массива строк в скобках: круглые, квадратные, фигурные, модуль',
	args: {
		display: 'block',
		size: '8',
		fence: 'parentheses',
		alttext: 'Rotation matrix',
		rows: [
			['cos', '−sin'],
			['sin', 'cos']
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
		fence: {
			type: 'select',
			label: 'Fence',
			description: 'Marks the operator as a fence such as a parenthesis.',
			options: ['parentheses', 'brackets', 'braces', 'bars', 'none']
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
		mathcolor: {
			type: 'color',
			label: 'Math Color',
			description: 'Text color of the element (MathML mathcolor).'
		},
		rows: {
			type: 'json',
			label: 'Rows',
			description: 'Matrix rows: numbers become mn, letters mi, signs mo.',
			example: [
				[1, 'a'],
				['b', 2]
			]
		},
		class: { type: 'text', label: 'Class', description: 'Extra class on the root element.' }
	},
	presets: {
		Identity: {
			fence: 'brackets',
			alttext: 'Identity matrix 3 by 3',
			rows: [
				[1, 0, 0],
				[0, 1, 0],
				[0, 0, 1]
			]
		},
		Determinant: {
			fence: 'bars',
			alttext: 'Determinant of a b c d',
			rows: [
				['a', 'b'],
				['c', 'd']
			]
		}
	},
	layout: 'centered'
} satisfies ContractStory<RecipeMathmlMatrix>;

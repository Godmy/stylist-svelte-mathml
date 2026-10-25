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
			description: 'Font size step; block formulas default to 6.',
			options: Object.keys(TOKEN_FONT_SIZE)
		},
		fence: { type: 'select', options: ['parentheses', 'brackets', 'braces', 'bars', 'none'] },
		display: { type: 'select', options: ['block', 'inline'] },
		alttext: { type: 'text' },
		mathcolor: { type: 'color' }
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

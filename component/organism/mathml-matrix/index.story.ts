import MathmlMatrix from '$stylist/mathml/component/organism/mathml-matrix/index.svelte';
import type { RecipeMathmlMatrix } from '$stylist/mathml/interface/recipe/mathml-matrix';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** Matrix from plain rows: numbers become mn, letters mi, signs mo. */
export default {
	component: MathmlMatrix,
	title: 'MathmlMatrix',
	description: 'Матрица из массива строк в скобках: круглые, квадратные, фигурные, модуль',
	args: {
		display: 'block',
		fence: 'parentheses',
		alttext: 'Rotation matrix',
		rows: [
			['cos', '−sin'],
			['sin', 'cos']
		]
	},
	controls: {
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

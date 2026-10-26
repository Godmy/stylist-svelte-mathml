import MathmlNode from '$stylist/mathml/component/template/mathml-node/index.svelte';
import type { RecipeMathmlNode } from '$stylist/mathml/interface/recipe/mathml-node';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** One node of a MathML tree; index.story.svelte supplies the `<math>` parent. */
export default {
	component: MathmlNode,
	title: 'MathmlNode',
	description: 'Рекурсивный рендер узла дерева MathML: элементы, атрибуты и текст',
	args: {
		node: {
			kind: 'element',
			tag: 'mroot',
			children: [
				{
					kind: 'element',
					tag: 'mrow',
					children: [
						{ kind: 'element', tag: 'mi', children: [{ kind: 'text', value: 'x' }] },
						{ kind: 'element', tag: 'mo', children: [{ kind: 'text', value: '+' }] },
						{ kind: 'element', tag: 'mn', children: [{ kind: 'text', value: '1' }] }
					]
				},
				{ kind: 'element', tag: 'mn', children: [{ kind: 'text', value: '3' }] }
			]
		}
	},
	controls: {
		node: {
			type: 'json',
			label: 'Node',
			description: 'One MathML node with its children.',
			example: { kind: 'element', tag: 'mi', children: [{ kind: 'text', value: 'x' }] }
		}
	},
	presets: {
		Fraction: {
			node: {
				kind: 'element',
				tag: 'mfrac',
				children: [
					{ kind: 'element', tag: 'mi', children: [{ kind: 'text', value: 'a' }] },
					{ kind: 'element', tag: 'mi', children: [{ kind: 'text', value: 'b' }] }
				]
			}
		},
		Text: { node: { kind: 'text', value: 'x' } }
	},
	layout: 'centered'
} satisfies ContractStory<RecipeMathmlNode>;

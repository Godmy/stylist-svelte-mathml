import MathmlAnnotationXml from '$stylist/mathml/component/atom/mathml-annotation-xml/index.svelte';
import type { RecipeMathmlAnnotationXml } from '$stylist/mathml/interface/recipe/mathml-annotation-xml';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** MathML children are not HtmlNode tags, so index.story.svelte draws the formula. */
export default {
	component: MathmlAnnotationXml,
	title: 'MathmlAnnotationXml',
	description: '<annotation-xml> — XML-аннотация внутри semantics; не отображается',
	args: {
		encoding: 'MathML-Presentation'
	},
	controls: {
		encoding: {
			type: 'text'
		},
		displaystyle: {
			type: 'boolean'
		},
		scriptlevel: {
			type: 'number',
			min: -2,
			max: 2,
			step: 1
		},
		mathcolor: {
			type: 'color'
		},
		mathbackground: {
			type: 'color'
		},
		dir: {
			type: 'select',
			options: ['ltr', 'rtl']
		},
		class: {
			type: 'text'
		}
	},
	layout: 'centered'
} satisfies ContractStory<RecipeMathmlAnnotationXml>;

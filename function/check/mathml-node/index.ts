import { MATHML_ELEMENT } from '$stylist/mathml/const/record/mathml-element';
import type { MathmlNode } from '$stylist/mathml/type/alias/mathml-node';

/**
 * Structural check of a MathML tree against MathML Core content models: known tags,
 * text only in token elements, exact arity of fractions/roots/scripts, mtr rows in
 * mtable, mtd cells in mtr, one mprescripts per mmultiscripts with paired scripts,
 * annotations only after the first child of semantics. Whitespace text is ignored.
 */
export function checkMathmlNode(node: MathmlNode): boolean {
	if (node.kind === 'text') return true;
	const spec = MATHML_ELEMENT[node.tag];
	if (!spec) return false;
	const children = (node.children ?? []).filter(
		(child) => child.kind !== 'text' || !/^[\t\n\f\r ]*$/.test(child.value)
	);
	const elements = children.filter((child) => child.kind === 'element');
	const hasText = children.some((child) => child.kind === 'text');
	switch (spec.content) {
		case 'token':
		case 'annotation':
			return elements.length === 0;
		case 'empty':
			return children.length === 0;
		case 'annotation-xml':
			return true;
		case 'fixed':
			if (hasText || elements.length !== spec.arity) return false;
			break;
		case 'table':
			if (hasText || elements.some((child) => child.tag !== 'mtr')) return false;
			break;
		case 'table-row':
			if (hasText || elements.some((child) => child.tag !== 'mtd')) return false;
			break;
		case 'scripts': {
			if (hasText || elements.length === 0) return false;
			const split = elements.findIndex((child) => child.tag === 'mprescripts');
			const separators = elements.filter((child) => child.tag === 'mprescripts').length;
			if (separators > 1 || split === 0) return false;
			const post = split < 0 ? elements.length - 1 : split - 1;
			const pre = split < 0 ? 0 : elements.length - split - 1;
			if (post % 2 !== 0 || pre % 2 !== 0) return false;
			break;
		}
		case 'semantics':
			if (hasText || elements.length === 0) return false;
			if (elements[0]!.tag === 'annotation' || elements[0]!.tag === 'annotation-xml') return false;
			if (
				elements
					.slice(1)
					.some((child) => child.tag !== 'annotation' && child.tag !== 'annotation-xml')
			)
				return false;
			break;
		default:
			if (hasText) return false;
	}
	return elements.every((child) => checkMathmlNode(child));
}

import { MATHML_NAMESPACE } from '$stylist/mathml/const/value/mathml-namespace';
import type { HtmlAttributeValue } from '$stylist/html/type/alias/html-attribute-value';
import type { MathmlNode } from '$stylist/mathml/type/alias/mathml-node';

/**
 * Standalone `<math>` markup of a MathML tree (copy, export, server responses).
 * `true`/`false` become MathML boolean strings; null/undefined/empty attributes are omitted.
 */
export function serializeMathmlMarkup(
	nodes: readonly MathmlNode[],
	attrs: Record<string, HtmlAttributeValue> = {}
): string {
	const escapeText = (value: string) =>
		value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
	const attributes = (record: Record<string, HtmlAttributeValue> = {}) =>
		Object.entries(record)
			.filter(([, value]) => value !== null && value !== undefined && value !== '')
			.map(([name, value]) => ` ${name}="${escapeText(String(value)).replace(/"/g, '&quot;')}"`)
			.join('');
	const markup = (node: MathmlNode): string =>
		node.kind === 'text'
			? escapeText(node.value)
			: `<${node.tag}${attributes(node.attrs)}>${(node.children ?? []).map(markup).join('')}</${node.tag}>`;
	return `<math xmlns="${MATHML_NAMESPACE}"${attributes(attrs)}>${nodes.map(markup).join('')}</math>`;
}

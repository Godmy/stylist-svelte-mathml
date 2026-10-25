import type { MathmlElementNode } from '$stylist/mathml/type/struct/mathml-element-node';

/**
 * Token element for a plain value: numbers → `mn`, letters and words → `mi`,
 * everything else (signs, symbols, punctuation) → `mo`.
 */
export function createMathmlTokenNode(value: string | number): MathmlElementNode {
	const text = String(value).trim();
	const tag = /^[-+]?(\d+([.,]\d+)?|[.,]\d+)$/.test(text)
		? 'mn'
		: /^\p{L}[\p{L}\p{N}]*$/u.test(text)
			? 'mi'
			: 'mo';
	return { kind: 'element', tag, children: [{ kind: 'text', value: text }] };
}

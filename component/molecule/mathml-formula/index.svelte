<script lang="ts">
	import MathmlNode from '$stylist/mathml/component/template/mathml-node/index.svelte';
	import { checkMathmlNode } from '$stylist/mathml/function/check/mathml-node';
	import type { RecipeMathmlFormula } from '$stylist/mathml/interface/recipe/mathml-formula';

	let {
		element = $bindable(null),
		nodes = [],
		children,
		display = 'inline',
		size,
		...rest
	}: RecipeMathmlFormula = $props();

	$effect(() => {
		if (import.meta.env.DEV && !nodes.every((node) => checkMathmlNode(node)))
			console.warn('[MathmlFormula] Tree breaks MathML Core content models', nodes);
	});
</script>

<!-- Size goes through data-size and CSS: MathMLElement.style is missing in jsdom. -->
<math
	bind:this={element}
	{display}
	{...rest}
	class={['mathml-formula', rest.class]}
	data-size={size}
	>{#each nodes as node, index (index)}<MathmlNode {node} />{/each}{@render children?.()}</math
>

<style>
	.mathml-formula {
		font-family: var(--font-math, math);
	}

	.mathml-formula[display='block'] {
		font-size: var(--font-size-6, 1.5rem);
	}

	.mathml-formula[data-size='2-5'] {
		font-size: var(--font-size-2-5, 0.625rem);
	}

	.mathml-formula[data-size='3'] {
		font-size: var(--font-size-3, 0.75rem);
	}

	.mathml-formula[data-size='3-5'] {
		font-size: var(--font-size-3-5, 0.875rem);
	}

	.mathml-formula[data-size='4'] {
		font-size: var(--font-size-4, 1rem);
	}

	.mathml-formula[data-size='4-5'] {
		font-size: var(--font-size-4-5, 1.125rem);
	}

	.mathml-formula[data-size='5'] {
		font-size: var(--font-size-5, 1.25rem);
	}

	.mathml-formula[data-size='6'] {
		font-size: var(--font-size-6, 1.5rem);
	}

	.mathml-formula[data-size='8'] {
		font-size: var(--font-size-8, 2rem);
	}

	.mathml-formula[data-size='10'] {
		font-size: var(--font-size-10, 2.5rem);
	}

	.mathml-formula[data-size='12'] {
		font-size: var(--font-size-12, 3rem);
	}

	.mathml-formula[data-size='16'] {
		font-size: var(--font-size-16, 4rem);
	}

	.mathml-formula[data-size='20'] {
		font-size: var(--font-size-20, 5rem);
	}
</style>

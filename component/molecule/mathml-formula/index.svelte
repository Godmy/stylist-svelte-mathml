<script lang="ts">
	import MathmlNode from '$stylist/mathml/component/template/mathml-node/index.svelte';
	import { checkMathmlNode } from '$stylist/mathml/function/check/mathml-node';
	import type { RecipeMathmlFormula } from '$stylist/mathml/interface/recipe/mathml-formula';

	let {
		element = $bindable(null),
		nodes,
		display = 'inline',
		...rest
	}: RecipeMathmlFormula = $props();

	$effect(() => {
		if (import.meta.env.DEV && !nodes.every((node) => checkMathmlNode(node)))
			console.warn('[MathmlFormula] Tree breaks MathML Core content models', nodes);
	});
</script>

<math bind:this={element} {display} {...rest} class={['mathml-formula', rest.class]}
	>{#each nodes as node, index (index)}<MathmlNode {node} />{/each}</math
>

<style>
	.mathml-formula {
		font-family: var(--font-math, math);
	}
</style>

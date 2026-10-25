<script lang="ts">
	import MathmlFormula from '$stylist/mathml/component/molecule/mathml-formula/index.svelte';
	import { createMathmlMatrixNode } from '$stylist/mathml/function/create/mathml-matrix-node';
	import type { RecipeMathmlMatrix } from '$stylist/mathml/interface/recipe/mathml-matrix';

	let {
		element = $bindable(null),
		rows,
		fence = 'parentheses',
		...rest
	}: RecipeMathmlMatrix = $props();
	const nodes = $derived([createMathmlMatrixNode(rows, fence)]);
</script>

<MathmlFormula bind:element {nodes} {...rest} />

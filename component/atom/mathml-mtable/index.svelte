<script lang="ts">
	import type { RecipeMathmlMtable } from '$stylist/mathml/interface/recipe/mathml-mtable';

	let { element = $bindable(null), children, ...rest }: RecipeMathmlMtable = $props();
</script>

<mtable bind:this={element} {...rest}>{@render children?.()}</mtable>

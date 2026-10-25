<script lang="ts">
	import type { RecipeMathmlMtd } from '$stylist/mathml/interface/recipe/mathml-mtd';

	let { element = $bindable(null), children, ...rest }: RecipeMathmlMtd = $props();
</script>

<mtd bind:this={element} {...rest}>{@render children?.()}</mtd>

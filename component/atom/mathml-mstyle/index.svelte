<script lang="ts">
	import type { RecipeMathmlMstyle } from '$stylist/mathml/interface/recipe/mathml-mstyle';

	let { element = $bindable(null), children, ...rest }: RecipeMathmlMstyle = $props();
</script>

<mstyle bind:this={element} {...rest}>{@render children?.()}</mstyle>

<script lang="ts">
	import type { RecipeMathmlMphantom } from '$stylist/mathml/interface/recipe/mathml-mphantom';

	let { element = $bindable(null), children, ...rest }: RecipeMathmlMphantom = $props();
</script>

<mphantom bind:this={element} {...rest}>{@render children?.()}</mphantom>

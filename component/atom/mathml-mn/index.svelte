<script lang="ts">
	import type { RecipeMathmlMn } from '$stylist/mathml/interface/recipe/mathml-mn';

	let { element = $bindable(null), children, ...rest }: RecipeMathmlMn = $props();
</script>

<mn bind:this={element} {...rest}>{@render children?.()}</mn>

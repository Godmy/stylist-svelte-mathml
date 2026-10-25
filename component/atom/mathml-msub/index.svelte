<script lang="ts">
	import type { RecipeMathmlMsub } from '$stylist/mathml/interface/recipe/mathml-msub';

	let { element = $bindable(null), children, ...rest }: RecipeMathmlMsub = $props();
</script>

<msub bind:this={element} {...rest}>{@render children?.()}</msub>

<script lang="ts">
	import type { RecipeMathmlMsqrt } from '$stylist/mathml/interface/recipe/mathml-msqrt';

	let { element = $bindable(null), children, ...rest }: RecipeMathmlMsqrt = $props();
</script>

<msqrt bind:this={element} {...rest}>{@render children?.()}</msqrt>

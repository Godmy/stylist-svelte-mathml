<script lang="ts">
	import type { RecipeMathmlMsup } from '$stylist/mathml/interface/recipe/mathml-msup';

	let { element = $bindable(null), children, ...rest }: RecipeMathmlMsup = $props();
</script>

<msup bind:this={element} {...rest}>{@render children?.()}</msup>

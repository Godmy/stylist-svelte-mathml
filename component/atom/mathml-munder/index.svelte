<script lang="ts">
	import type { RecipeMathmlMunder } from '$stylist/mathml/interface/recipe/mathml-munder';

	let { element = $bindable(null), children, ...rest }: RecipeMathmlMunder = $props();
</script>

<munder bind:this={element} {...rest}>{@render children?.()}</munder>

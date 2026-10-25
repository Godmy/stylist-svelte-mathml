<script lang="ts">
	import type { RecipeMathmlMerror } from '$stylist/mathml/interface/recipe/mathml-merror';

	let { element = $bindable(null), children, ...rest }: RecipeMathmlMerror = $props();
</script>

<merror bind:this={element} {...rest}>{@render children?.()}</merror>

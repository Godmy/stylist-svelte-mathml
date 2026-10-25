<script lang="ts">
	import type { RecipeMathmlMfrac } from '$stylist/mathml/interface/recipe/mathml-mfrac';

	let { element = $bindable(null), children, ...rest }: RecipeMathmlMfrac = $props();
</script>

<mfrac bind:this={element} {...rest}>{@render children?.()}</mfrac>

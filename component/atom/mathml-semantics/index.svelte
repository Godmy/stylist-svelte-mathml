<script lang="ts">
	import type { RecipeMathmlSemantics } from '$stylist/mathml/interface/recipe/mathml-semantics';

	let { element = $bindable(null), children, ...rest }: RecipeMathmlSemantics = $props();
</script>

<semantics bind:this={element} {...rest}>{@render children?.()}</semantics>

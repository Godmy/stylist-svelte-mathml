<script lang="ts">
	import type { RecipeMathmlMsubsup } from '$stylist/mathml/interface/recipe/mathml-msubsup';

	let { element = $bindable(null), children, ...rest }: RecipeMathmlMsubsup = $props();
</script>

<msubsup bind:this={element} {...rest}>{@render children?.()}</msubsup>

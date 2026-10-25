<script lang="ts">
	import type { RecipeMathmlMi } from '$stylist/mathml/interface/recipe/mathml-mi';

	let { element = $bindable(null), children, ...rest }: RecipeMathmlMi = $props();
</script>

<mi bind:this={element} {...rest}>{@render children?.()}</mi>

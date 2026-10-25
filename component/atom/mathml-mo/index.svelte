<script lang="ts">
	import type { RecipeMathmlMo } from '$stylist/mathml/interface/recipe/mathml-mo';

	let { element = $bindable(null), children, ...rest }: RecipeMathmlMo = $props();
</script>

<mo bind:this={element} {...rest}>{@render children?.()}</mo>

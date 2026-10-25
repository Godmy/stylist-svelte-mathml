<script lang="ts">
	import type { RecipeMathmlMs } from '$stylist/mathml/interface/recipe/mathml-ms';

	let { element = $bindable(null), children, ...rest }: RecipeMathmlMs = $props();
</script>

<ms bind:this={element} {...rest}>{@render children?.()}</ms>

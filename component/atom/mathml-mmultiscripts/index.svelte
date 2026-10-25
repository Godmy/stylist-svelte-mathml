<script lang="ts">
	import type { RecipeMathmlMmultiscripts } from '$stylist/mathml/interface/recipe/mathml-mmultiscripts';

	let { element = $bindable(null), children, ...rest }: RecipeMathmlMmultiscripts = $props();
</script>

<mmultiscripts bind:this={element} {...rest}>{@render children?.()}</mmultiscripts>

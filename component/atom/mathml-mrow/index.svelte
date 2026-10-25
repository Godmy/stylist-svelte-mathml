<script lang="ts">
	import type { RecipeMathmlMrow } from '$stylist/mathml/interface/recipe/mathml-mrow';

	let { element = $bindable(null), children, ...rest }: RecipeMathmlMrow = $props();
</script>

<mrow bind:this={element} {...rest}>{@render children?.()}</mrow>

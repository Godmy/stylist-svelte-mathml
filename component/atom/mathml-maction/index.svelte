<script lang="ts">
	import type { RecipeMathmlMaction } from '$stylist/mathml/interface/recipe/mathml-maction';

	let { element = $bindable(null), children, ...rest }: RecipeMathmlMaction = $props();
</script>

<maction bind:this={element} {...rest}>{@render children?.()}</maction>

<script lang="ts">
	import type { RecipeMathmlMpadded } from '$stylist/mathml/interface/recipe/mathml-mpadded';

	let { element = $bindable(null), children, ...rest }: RecipeMathmlMpadded = $props();
</script>

<mpadded bind:this={element} {...rest}>{@render children?.()}</mpadded>

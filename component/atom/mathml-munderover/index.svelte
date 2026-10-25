<script lang="ts">
	import type { RecipeMathmlMunderover } from '$stylist/mathml/interface/recipe/mathml-munderover';

	let { element = $bindable(null), children, ...rest }: RecipeMathmlMunderover = $props();
</script>

<munderover bind:this={element} {...rest}>{@render children?.()}</munderover>

<script lang="ts">
	import type { RecipeMathmlMover } from '$stylist/mathml/interface/recipe/mathml-mover';

	let { element = $bindable(null), children, ...rest }: RecipeMathmlMover = $props();
</script>

<mover bind:this={element} {...rest}>{@render children?.()}</mover>

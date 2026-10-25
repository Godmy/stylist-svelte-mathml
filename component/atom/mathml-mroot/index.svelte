<script lang="ts">
	import type { RecipeMathmlMroot } from '$stylist/mathml/interface/recipe/mathml-mroot';

	let { element = $bindable(null), children, ...rest }: RecipeMathmlMroot = $props();
</script>

<mroot bind:this={element} {...rest}>{@render children?.()}</mroot>

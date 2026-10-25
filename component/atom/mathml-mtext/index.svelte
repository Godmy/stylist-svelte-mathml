<script lang="ts">
	import type { RecipeMathmlMtext } from '$stylist/mathml/interface/recipe/mathml-mtext';

	let { element = $bindable(null), children, ...rest }: RecipeMathmlMtext = $props();
</script>

<mtext bind:this={element} {...rest}>{@render children?.()}</mtext>

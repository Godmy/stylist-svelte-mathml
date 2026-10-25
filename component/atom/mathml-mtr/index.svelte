<script lang="ts">
	import type { RecipeMathmlMtr } from '$stylist/mathml/interface/recipe/mathml-mtr';

	let { element = $bindable(null), children, ...rest }: RecipeMathmlMtr = $props();
</script>

<mtr bind:this={element} {...rest}>{@render children?.()}</mtr>

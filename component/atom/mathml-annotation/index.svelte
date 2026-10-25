<script lang="ts">
	import type { RecipeMathmlAnnotation } from '$stylist/mathml/interface/recipe/mathml-annotation';

	let { element = $bindable(null), children, ...rest }: RecipeMathmlAnnotation = $props();
</script>

<annotation bind:this={element} {...rest}>{@render children?.()}</annotation>

<script lang="ts">
	import type { RecipeMathmlAnnotationXml } from '$stylist/mathml/interface/recipe/mathml-annotation-xml';

	let { element = $bindable(null), children, ...rest }: RecipeMathmlAnnotationXml = $props();
</script>

<annotation-xml bind:this={element} {...rest}>{@render children?.()}</annotation-xml>

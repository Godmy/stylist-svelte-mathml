<script lang="ts">
	import MathmlAnnotationXml from '$stylist/mathml/component/atom/mathml-annotation-xml/index.svelte';
	import type { RecipeMathmlAnnotationXml } from '$stylist/mathml/interface/recipe/mathml-annotation-xml';

	// Render of index.story.ts: the component needs a <math> parent and MathML siblings.
	let args: RecipeMathmlAnnotationXml = $props();
</script>

<math display="block">
	<semantics><mi>π</mi><MathmlAnnotationXml {...args}><mi>π</mi></MathmlAnnotationXml></semantics>
</math>

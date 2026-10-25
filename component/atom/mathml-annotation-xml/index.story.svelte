<script lang="ts">
	import MathmlFormula from '$stylist/mathml/component/molecule/mathml-formula/index.svelte';
	import MathmlAnnotationXml from '$stylist/mathml/component/atom/mathml-annotation-xml/index.svelte';
	import type { RecipeMathmlAnnotationXml } from '$stylist/mathml/interface/recipe/mathml-annotation-xml';

	// Render of index.story.ts: the component needs a formula root and MathML siblings.
	let args: RecipeMathmlAnnotationXml = $props();
</script>

<MathmlFormula display="block" size="8">
	<semantics><mi>π</mi><MathmlAnnotationXml {...args}><mi>π</mi></MathmlAnnotationXml></semantics>
</MathmlFormula>

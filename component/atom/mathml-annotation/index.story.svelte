<script lang="ts">
	import MathmlFormula from '$stylist/mathml/component/molecule/mathml-formula/index.svelte';
	import MathmlAnnotation from '$stylist/mathml/component/atom/mathml-annotation/index.svelte';
	import type { RecipeMathmlAnnotation } from '$stylist/mathml/interface/recipe/mathml-annotation';

	// Render of index.story.ts: the component needs a formula root and MathML siblings.
	let args: RecipeMathmlAnnotation = $props();
</script>

<MathmlFormula display="block" size="8">
	<semantics
		><msup><mi>x</mi><mn>2</mn></msup><MathmlAnnotation {...args}>x^2</MathmlAnnotation></semantics
	>
</MathmlFormula>

<script lang="ts">
	import MathmlAnnotation from '$stylist/mathml/component/atom/mathml-annotation/index.svelte';
	import type { RecipeMathmlAnnotation } from '$stylist/mathml/interface/recipe/mathml-annotation';

	// Render of index.story.ts: the component needs a <math> parent and MathML siblings.
	let args: RecipeMathmlAnnotation = $props();
</script>

<math display="block">
	<semantics
		><msup><mi>x</mi><mn>2</mn></msup><MathmlAnnotation {...args}>x^2</MathmlAnnotation></semantics
	>
</math>

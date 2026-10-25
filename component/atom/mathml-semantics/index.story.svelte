<script lang="ts">
	import MathmlSemantics from '$stylist/mathml/component/atom/mathml-semantics/index.svelte';
	import type { RecipeMathmlSemantics } from '$stylist/mathml/interface/recipe/mathml-semantics';

	// Render of index.story.ts: the component needs a <math> parent and MathML siblings.
	let args: RecipeMathmlSemantics = $props();
</script>

<math display="block">
	<MathmlSemantics {...args}
		><msup><mi>x</mi><mn>2</mn></msup><annotation encoding="application/x-tex">x^2</annotation
		></MathmlSemantics
	>
</math>

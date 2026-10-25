<script lang="ts">
	import MathmlFormula from '$stylist/mathml/component/molecule/mathml-formula/index.svelte';
	import MathmlSemantics from '$stylist/mathml/component/atom/mathml-semantics/index.svelte';
	import type { RecipeMathmlSemantics } from '$stylist/mathml/interface/recipe/mathml-semantics';

	// Render of index.story.ts: the component needs a formula root and MathML siblings.
	let args: RecipeMathmlSemantics = $props();
</script>

<MathmlFormula display="block" size="8">
	<MathmlSemantics {...args}
		><msup><mi>x</mi><mn>2</mn></msup><annotation encoding="application/x-tex">x^2</annotation
		></MathmlSemantics
	>
</MathmlFormula>

<script lang="ts">
	import MathmlFormula from '$stylist/mathml/component/molecule/mathml-formula/index.svelte';
	import MathmlMprescripts from '$stylist/mathml/component/atom/mathml-mprescripts/index.svelte';
	import type { RecipeMathmlMprescripts } from '$stylist/mathml/interface/recipe/mathml-mprescripts';

	// Render of index.story.ts: the component needs a formula root and MathML siblings.
	let args: RecipeMathmlMprescripts = $props();
</script>

<MathmlFormula display="block" size="8">
	<mmultiscripts
		><mi>C</mi><mrow></mrow><mrow></mrow><MathmlMprescripts {...args} /><mn>14</mn><mn>6</mn
		></mmultiscripts
	>
</MathmlFormula>

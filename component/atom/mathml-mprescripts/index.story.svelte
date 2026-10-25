<script lang="ts">
	import MathmlMprescripts from '$stylist/mathml/component/atom/mathml-mprescripts/index.svelte';
	import type { RecipeMathmlMprescripts } from '$stylist/mathml/interface/recipe/mathml-mprescripts';

	// Render of index.story.ts: the component needs a <math> parent and MathML siblings.
	let args: RecipeMathmlMprescripts = $props();
</script>

<math display="block">
	<mmultiscripts
		><mi>C</mi><mrow></mrow><mrow></mrow><MathmlMprescripts {...args} /><mn>14</mn><mn>6</mn
		></mmultiscripts
	>
</math>

<script lang="ts">
	import MathmlFormula from '$stylist/mathml/component/molecule/mathml-formula/index.svelte';
	import MathmlMunder from '$stylist/mathml/component/atom/mathml-munder/index.svelte';
	import type { RecipeMathmlMunder } from '$stylist/mathml/interface/recipe/mathml-munder';

	// Render of index.story.ts: the component needs a formula root and MathML siblings.
	let args: RecipeMathmlMunder = $props();
</script>

<MathmlFormula display="block" size="8">
	<MathmlMunder {...args}><mo>lim</mo><mrow><mi>x</mi><mo>→</mo><mn>0</mn></mrow></MathmlMunder>
</MathmlFormula>

<script lang="ts">
	import MathmlFormula from '$stylist/mathml/component/molecule/mathml-formula/index.svelte';
	import MathmlMstyle from '$stylist/mathml/component/atom/mathml-mstyle/index.svelte';
	import type { RecipeMathmlMstyle } from '$stylist/mathml/interface/recipe/mathml-mstyle';

	// Render of index.story.ts: the component needs a formula root and MathML siblings.
	let args: RecipeMathmlMstyle = $props();
</script>

<MathmlFormula display="block" size="8">
	<MathmlMstyle {...args}><mfrac><mi>a</mi><mi>b</mi></mfrac><mo>+</mo><mn>1</mn></MathmlMstyle>
</MathmlFormula>

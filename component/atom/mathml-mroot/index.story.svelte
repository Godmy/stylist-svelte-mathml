<script lang="ts">
	import MathmlFormula from '$stylist/mathml/component/molecule/mathml-formula/index.svelte';
	import MathmlMroot from '$stylist/mathml/component/atom/mathml-mroot/index.svelte';
	import type { RecipeMathmlMroot } from '$stylist/mathml/interface/recipe/mathml-mroot';

	// Render of index.story.ts: the component needs a formula root and MathML siblings.
	let args: RecipeMathmlMroot = $props();
</script>

<MathmlFormula display="block" size="8">
	<MathmlMroot {...args}><mi>x</mi><mn>3</mn></MathmlMroot>
</MathmlFormula>

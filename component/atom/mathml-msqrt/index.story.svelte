<script lang="ts">
	import MathmlFormula from '$stylist/mathml/component/molecule/mathml-formula/index.svelte';
	import MathmlMsqrt from '$stylist/mathml/component/atom/mathml-msqrt/index.svelte';
	import type { RecipeMathmlMsqrt } from '$stylist/mathml/interface/recipe/mathml-msqrt';

	// Render of index.story.ts: the component needs a formula root and MathML siblings.
	let args: RecipeMathmlMsqrt = $props();
</script>

<MathmlFormula display="block" size="8">
	<MathmlMsqrt {...args}><mi>x</mi></MathmlMsqrt>
</MathmlFormula>

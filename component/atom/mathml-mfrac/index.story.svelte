<script lang="ts">
	import MathmlFormula from '$stylist/mathml/component/molecule/mathml-formula/index.svelte';
	import MathmlMfrac from '$stylist/mathml/component/atom/mathml-mfrac/index.svelte';
	import type { RecipeMathmlMfrac } from '$stylist/mathml/interface/recipe/mathml-mfrac';

	// Render of index.story.ts: the component needs a formula root and MathML siblings.
	let args: RecipeMathmlMfrac = $props();
</script>

<MathmlFormula display="block" size="8">
	<MathmlMfrac {...args}><mi>a</mi><mi>b</mi></MathmlMfrac>
</MathmlFormula>

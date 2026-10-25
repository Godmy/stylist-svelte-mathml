<script lang="ts">
	import MathmlFormula from '$stylist/mathml/component/molecule/mathml-formula/index.svelte';
	import MathmlMrow from '$stylist/mathml/component/atom/mathml-mrow/index.svelte';
	import type { RecipeMathmlMrow } from '$stylist/mathml/interface/recipe/mathml-mrow';

	// Render of index.story.ts: the component needs a formula root and MathML siblings.
	let args: RecipeMathmlMrow = $props();
</script>

<MathmlFormula display="block" size="8">
	<MathmlMrow {...args}><mi>a</mi><mo>+</mo><mi>b</mi></MathmlMrow>
</MathmlFormula>

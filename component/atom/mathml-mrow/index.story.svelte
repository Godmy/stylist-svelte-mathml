<script lang="ts">
	import MathmlMrow from '$stylist/mathml/component/atom/mathml-mrow/index.svelte';
	import type { RecipeMathmlMrow } from '$stylist/mathml/interface/recipe/mathml-mrow';

	// Render of index.story.ts: the component needs a <math> parent and MathML siblings.
	let args: RecipeMathmlMrow = $props();
</script>

<math display="block">
	<MathmlMrow {...args}><mi>a</mi><mo>+</mo><mi>b</mi></MathmlMrow>
</math>

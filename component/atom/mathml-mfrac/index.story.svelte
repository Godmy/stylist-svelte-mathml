<script lang="ts">
	import MathmlMfrac from '$stylist/mathml/component/atom/mathml-mfrac/index.svelte';
	import type { RecipeMathmlMfrac } from '$stylist/mathml/interface/recipe/mathml-mfrac';

	// Render of index.story.ts: the component needs a <math> parent and MathML siblings.
	let args: RecipeMathmlMfrac = $props();
</script>

<math display="block">
	<MathmlMfrac {...args}><mi>a</mi><mi>b</mi></MathmlMfrac>
</math>

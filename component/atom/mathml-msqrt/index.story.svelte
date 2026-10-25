<script lang="ts">
	import MathmlMsqrt from '$stylist/mathml/component/atom/mathml-msqrt/index.svelte';
	import type { RecipeMathmlMsqrt } from '$stylist/mathml/interface/recipe/mathml-msqrt';

	// Render of index.story.ts: the component needs a <math> parent and MathML siblings.
	let args: RecipeMathmlMsqrt = $props();
</script>

<math display="block">
	<MathmlMsqrt {...args}><mi>x</mi></MathmlMsqrt>
</math>

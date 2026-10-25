<script lang="ts">
	import MathmlMsub from '$stylist/mathml/component/atom/mathml-msub/index.svelte';
	import type { RecipeMathmlMsub } from '$stylist/mathml/interface/recipe/mathml-msub';

	// Render of index.story.ts: the component needs a <math> parent and MathML siblings.
	let args: RecipeMathmlMsub = $props();
</script>

<math display="block">
	<MathmlMsub {...args}><mi>x</mi><mn>1</mn></MathmlMsub>
</math>

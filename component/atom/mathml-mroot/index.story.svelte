<script lang="ts">
	import MathmlMroot from '$stylist/mathml/component/atom/mathml-mroot/index.svelte';
	import type { RecipeMathmlMroot } from '$stylist/mathml/interface/recipe/mathml-mroot';

	// Render of index.story.ts: the component needs a <math> parent and MathML siblings.
	let args: RecipeMathmlMroot = $props();
</script>

<math display="block">
	<MathmlMroot {...args}><mi>x</mi><mn>3</mn></MathmlMroot>
</math>

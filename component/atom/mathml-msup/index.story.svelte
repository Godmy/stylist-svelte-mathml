<script lang="ts">
	import MathmlMsup from '$stylist/mathml/component/atom/mathml-msup/index.svelte';
	import type { RecipeMathmlMsup } from '$stylist/mathml/interface/recipe/mathml-msup';

	// Render of index.story.ts: the component needs a <math> parent and MathML siblings.
	let args: RecipeMathmlMsup = $props();
</script>

<math display="block">
	<MathmlMsup {...args}><mi>x</mi><mn>2</mn></MathmlMsup>
</math>

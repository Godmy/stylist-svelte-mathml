<script lang="ts">
	import MathmlMunder from '$stylist/mathml/component/atom/mathml-munder/index.svelte';
	import type { RecipeMathmlMunder } from '$stylist/mathml/interface/recipe/mathml-munder';

	// Render of index.story.ts: the component needs a <math> parent and MathML siblings.
	let args: RecipeMathmlMunder = $props();
</script>

<math display="block">
	<MathmlMunder {...args}><mo>lim</mo><mrow><mi>x</mi><mo>→</mo><mn>0</mn></mrow></MathmlMunder>
</math>

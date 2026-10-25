<script lang="ts">
	import MathmlMunderover from '$stylist/mathml/component/atom/mathml-munderover/index.svelte';
	import type { RecipeMathmlMunderover } from '$stylist/mathml/interface/recipe/mathml-munderover';

	// Render of index.story.ts: the component needs a <math> parent and MathML siblings.
	let args: RecipeMathmlMunderover = $props();
</script>

<math display="block">
	<MathmlMunderover {...args}
		><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></MathmlMunderover
	>
</math>

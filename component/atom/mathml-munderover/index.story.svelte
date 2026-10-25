<script lang="ts">
	import MathmlFormula from '$stylist/mathml/component/molecule/mathml-formula/index.svelte';
	import MathmlMunderover from '$stylist/mathml/component/atom/mathml-munderover/index.svelte';
	import type { RecipeMathmlMunderover } from '$stylist/mathml/interface/recipe/mathml-munderover';

	// Render of index.story.ts: the component needs a formula root and MathML siblings.
	let args: RecipeMathmlMunderover = $props();
</script>

<MathmlFormula display="block" size="8">
	<MathmlMunderover {...args}
		><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></MathmlMunderover
	>
</MathmlFormula>

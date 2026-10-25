<script lang="ts">
	import MathmlFormula from '$stylist/mathml/component/molecule/mathml-formula/index.svelte';
	import MathmlMsub from '$stylist/mathml/component/atom/mathml-msub/index.svelte';
	import type { RecipeMathmlMsub } from '$stylist/mathml/interface/recipe/mathml-msub';

	// Render of index.story.ts: the component needs a formula root and MathML siblings.
	let args: RecipeMathmlMsub = $props();
</script>

<MathmlFormula display="block" size="8">
	<MathmlMsub {...args}><mi>x</mi><mn>1</mn></MathmlMsub>
</MathmlFormula>

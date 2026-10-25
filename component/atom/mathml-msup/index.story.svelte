<script lang="ts">
	import MathmlFormula from '$stylist/mathml/component/molecule/mathml-formula/index.svelte';
	import MathmlMsup from '$stylist/mathml/component/atom/mathml-msup/index.svelte';
	import type { RecipeMathmlMsup } from '$stylist/mathml/interface/recipe/mathml-msup';

	// Render of index.story.ts: the component needs a formula root and MathML siblings.
	let args: RecipeMathmlMsup = $props();
</script>

<MathmlFormula display="block" size="8">
	<MathmlMsup {...args}><mi>x</mi><mn>2</mn></MathmlMsup>
</MathmlFormula>

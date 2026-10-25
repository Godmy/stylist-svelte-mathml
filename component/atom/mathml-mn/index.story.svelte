<script lang="ts">
	import MathmlFormula from '$stylist/mathml/component/molecule/mathml-formula/index.svelte';
	import MathmlMn from '$stylist/mathml/component/atom/mathml-mn/index.svelte';
	import type { RecipeMathmlMn } from '$stylist/mathml/interface/recipe/mathml-mn';

	// Render of index.story.ts: the component needs a formula root and MathML siblings.
	let args: RecipeMathmlMn = $props();
</script>

<MathmlFormula display="block" size="8">
	<MathmlMn {...args}>3.14</MathmlMn>
</MathmlFormula>

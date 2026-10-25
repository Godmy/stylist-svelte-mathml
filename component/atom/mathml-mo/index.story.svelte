<script lang="ts">
	import MathmlFormula from '$stylist/mathml/component/molecule/mathml-formula/index.svelte';
	import MathmlMo from '$stylist/mathml/component/atom/mathml-mo/index.svelte';
	import type { RecipeMathmlMo } from '$stylist/mathml/interface/recipe/mathml-mo';

	// Render of index.story.ts: the component needs a formula root and MathML siblings.
	let args: RecipeMathmlMo = $props();
</script>

<MathmlFormula display="block" size="8">
	<mi>a</mi><MathmlMo {...args}>+</MathmlMo><mi>b</mi>
</MathmlFormula>

<script lang="ts">
	import MathmlFormula from '$stylist/mathml/component/molecule/mathml-formula/index.svelte';
	import MathmlMspace from '$stylist/mathml/component/atom/mathml-mspace/index.svelte';
	import type { RecipeMathmlMspace } from '$stylist/mathml/interface/recipe/mathml-mspace';

	// Render of index.story.ts: the component needs a formula root and MathML siblings.
	let args: RecipeMathmlMspace = $props();
</script>

<MathmlFormula display="block" size="8">
	<mi>a</mi><MathmlMspace {...args} /><mi>b</mi>
</MathmlFormula>

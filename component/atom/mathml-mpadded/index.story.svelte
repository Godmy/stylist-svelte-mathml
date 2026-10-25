<script lang="ts">
	import MathmlFormula from '$stylist/mathml/component/molecule/mathml-formula/index.svelte';
	import MathmlMpadded from '$stylist/mathml/component/atom/mathml-mpadded/index.svelte';
	import type { RecipeMathmlMpadded } from '$stylist/mathml/interface/recipe/mathml-mpadded';

	// Render of index.story.ts: the component needs a formula root and MathML siblings.
	let args: RecipeMathmlMpadded = $props();
</script>

<MathmlFormula display="block" size="8">
	<mi>a</mi><MathmlMpadded {...args}><mi>x</mi></MathmlMpadded><mi>b</mi>
</MathmlFormula>

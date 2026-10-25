<script lang="ts">
	import MathmlFormula from '$stylist/mathml/component/molecule/mathml-formula/index.svelte';
	import MathmlMover from '$stylist/mathml/component/atom/mathml-mover/index.svelte';
	import type { RecipeMathmlMover } from '$stylist/mathml/interface/recipe/mathml-mover';

	// Render of index.story.ts: the component needs a formula root and MathML siblings.
	let args: RecipeMathmlMover = $props();
</script>

<MathmlFormula display="block" size="8">
	<MathmlMover {...args}><mi>x</mi><mo>^</mo></MathmlMover>
</MathmlFormula>

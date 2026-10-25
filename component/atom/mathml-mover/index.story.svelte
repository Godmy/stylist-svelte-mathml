<script lang="ts">
	import MathmlMover from '$stylist/mathml/component/atom/mathml-mover/index.svelte';
	import type { RecipeMathmlMover } from '$stylist/mathml/interface/recipe/mathml-mover';

	// Render of index.story.ts: the component needs a <math> parent and MathML siblings.
	let args: RecipeMathmlMover = $props();
</script>

<math display="block">
	<MathmlMover {...args}><mi>x</mi><mo>^</mo></MathmlMover>
</math>

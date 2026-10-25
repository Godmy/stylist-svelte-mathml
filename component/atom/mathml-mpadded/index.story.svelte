<script lang="ts">
	import MathmlMpadded from '$stylist/mathml/component/atom/mathml-mpadded/index.svelte';
	import type { RecipeMathmlMpadded } from '$stylist/mathml/interface/recipe/mathml-mpadded';

	// Render of index.story.ts: the component needs a <math> parent and MathML siblings.
	let args: RecipeMathmlMpadded = $props();
</script>

<math display="block">
	<mi>a</mi><MathmlMpadded {...args}><mi>x</mi></MathmlMpadded><mi>b</mi>
</math>

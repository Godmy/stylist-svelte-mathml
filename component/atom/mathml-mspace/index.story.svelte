<script lang="ts">
	import MathmlMspace from '$stylist/mathml/component/atom/mathml-mspace/index.svelte';
	import type { RecipeMathmlMspace } from '$stylist/mathml/interface/recipe/mathml-mspace';

	// Render of index.story.ts: the component needs a <math> parent and MathML siblings.
	let args: RecipeMathmlMspace = $props();
</script>

<math display="block">
	<mi>a</mi><MathmlMspace {...args} /><mi>b</mi>
</math>

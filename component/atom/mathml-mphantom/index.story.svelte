<script lang="ts">
	import MathmlMphantom from '$stylist/mathml/component/atom/mathml-mphantom/index.svelte';
	import type { RecipeMathmlMphantom } from '$stylist/mathml/interface/recipe/mathml-mphantom';

	// Render of index.story.ts: the component needs a <math> parent and MathML siblings.
	let args: RecipeMathmlMphantom = $props();
</script>

<math display="block">
	<mi>a</mi><MathmlMphantom {...args}><mi>b</mi></MathmlMphantom><mi>c</mi>
</math>

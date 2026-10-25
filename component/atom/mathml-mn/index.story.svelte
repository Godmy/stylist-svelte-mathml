<script lang="ts">
	import MathmlMn from '$stylist/mathml/component/atom/mathml-mn/index.svelte';
	import type { RecipeMathmlMn } from '$stylist/mathml/interface/recipe/mathml-mn';

	// Render of index.story.ts: the component needs a <math> parent and MathML siblings.
	let args: RecipeMathmlMn = $props();
</script>

<math display="block">
	<MathmlMn {...args}>3.14</MathmlMn>
</math>

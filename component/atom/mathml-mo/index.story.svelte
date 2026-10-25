<script lang="ts">
	import MathmlMo from '$stylist/mathml/component/atom/mathml-mo/index.svelte';
	import type { RecipeMathmlMo } from '$stylist/mathml/interface/recipe/mathml-mo';

	// Render of index.story.ts: the component needs a <math> parent and MathML siblings.
	let args: RecipeMathmlMo = $props();
</script>

<math display="block">
	<mi>a</mi><MathmlMo {...args}>+</MathmlMo><mi>b</mi>
</math>

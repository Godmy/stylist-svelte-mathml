<script lang="ts">
	import MathmlMs from '$stylist/mathml/component/atom/mathml-ms/index.svelte';
	import type { RecipeMathmlMs } from '$stylist/mathml/interface/recipe/mathml-ms';

	// Render of index.story.ts: the component needs a <math> parent and MathML siblings.
	let args: RecipeMathmlMs = $props();
</script>

<math display="block">
	<MathmlMs {...args}>abc</MathmlMs>
</math>

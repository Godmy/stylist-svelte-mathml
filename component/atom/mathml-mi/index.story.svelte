<script lang="ts">
	import MathmlMi from '$stylist/mathml/component/atom/mathml-mi/index.svelte';
	import type { RecipeMathmlMi } from '$stylist/mathml/interface/recipe/mathml-mi';

	// Render of index.story.ts: the component needs a <math> parent and MathML siblings.
	let args: RecipeMathmlMi = $props();
</script>

<math display="block">
	<MathmlMi {...args}>x</MathmlMi>
</math>

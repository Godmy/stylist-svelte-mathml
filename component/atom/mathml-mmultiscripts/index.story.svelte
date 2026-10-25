<script lang="ts">
	import MathmlMmultiscripts from '$stylist/mathml/component/atom/mathml-mmultiscripts/index.svelte';
	import type { RecipeMathmlMmultiscripts } from '$stylist/mathml/interface/recipe/mathml-mmultiscripts';

	// Render of index.story.ts: the component needs a <math> parent and MathML siblings.
	let args: RecipeMathmlMmultiscripts = $props();
</script>

<math display="block">
	<MathmlMmultiscripts {...args}
		><mi>X</mi><mi>a</mi><mi>b</mi><mprescripts /><mi>c</mi><mi>d</mi></MathmlMmultiscripts
	>
</math>

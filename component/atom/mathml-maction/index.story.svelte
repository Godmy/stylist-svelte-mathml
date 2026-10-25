<script lang="ts">
	import MathmlMaction from '$stylist/mathml/component/atom/mathml-maction/index.svelte';
	import type { RecipeMathmlMaction } from '$stylist/mathml/interface/recipe/mathml-maction';

	// Render of index.story.ts: the component needs a <math> parent and MathML siblings.
	let args: RecipeMathmlMaction = $props();
</script>

<math display="block">
	<MathmlMaction {...args}><mi>a</mi><mi>b</mi></MathmlMaction>
</math>

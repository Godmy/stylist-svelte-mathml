<script lang="ts">
	import MathmlMtr from '$stylist/mathml/component/atom/mathml-mtr/index.svelte';
	import type { RecipeMathmlMtr } from '$stylist/mathml/interface/recipe/mathml-mtr';

	// Render of index.story.ts: the component needs a <math> parent and MathML siblings.
	let args: RecipeMathmlMtr = $props();
</script>

<math display="block">
	<mtable><MathmlMtr {...args}><mtd><mi>a</mi></mtd><mtd><mi>b</mi></mtd></MathmlMtr></mtable>
</math>

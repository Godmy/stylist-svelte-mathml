<script lang="ts">
	import MathmlMtd from '$stylist/mathml/component/atom/mathml-mtd/index.svelte';
	import type { RecipeMathmlMtd } from '$stylist/mathml/interface/recipe/mathml-mtd';

	// Render of index.story.ts: the component needs a <math> parent and MathML siblings.
	let args: RecipeMathmlMtd = $props();
</script>

<math display="block">
	<mtable
		><mtr><MathmlMtd {...args}><mi>a</mi></MathmlMtd><mtd><mi>b</mi></mtd></mtr><mtr
			><mtd><mi>c</mi></mtd><mtd><mi>d</mi></mtd></mtr
		></mtable
	>
</math>

<script lang="ts">
	import MathmlFormula from '$stylist/mathml/component/molecule/mathml-formula/index.svelte';
	import MathmlMtr from '$stylist/mathml/component/atom/mathml-mtr/index.svelte';
	import type { RecipeMathmlMtr } from '$stylist/mathml/interface/recipe/mathml-mtr';

	// Render of index.story.ts: the component needs a formula root and MathML siblings.
	let args: RecipeMathmlMtr = $props();
</script>

<MathmlFormula display="block" size="8">
	<mtable><MathmlMtr {...args}><mtd><mi>a</mi></mtd><mtd><mi>b</mi></mtd></MathmlMtr></mtable>
</MathmlFormula>

<script lang="ts">
	import MathmlFormula from '$stylist/mathml/component/molecule/mathml-formula/index.svelte';
	import MathmlMtd from '$stylist/mathml/component/atom/mathml-mtd/index.svelte';
	import type { RecipeMathmlMtd } from '$stylist/mathml/interface/recipe/mathml-mtd';

	// Render of index.story.ts: the component needs a formula root and MathML siblings.
	let args: RecipeMathmlMtd = $props();
</script>

<MathmlFormula display="block" size="8">
	<mtable
		><mtr><MathmlMtd {...args}><mi>a</mi></MathmlMtd><mtd><mi>b</mi></mtd></mtr><mtr
			><mtd><mi>c</mi></mtd><mtd><mi>d</mi></mtd></mtr
		></mtable
	>
</MathmlFormula>

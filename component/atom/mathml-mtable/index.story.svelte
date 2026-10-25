<script lang="ts">
	import MathmlFormula from '$stylist/mathml/component/molecule/mathml-formula/index.svelte';
	import MathmlMtable from '$stylist/mathml/component/atom/mathml-mtable/index.svelte';
	import type { RecipeMathmlMtable } from '$stylist/mathml/interface/recipe/mathml-mtable';

	// Render of index.story.ts: the component needs a formula root and MathML siblings.
	let args: RecipeMathmlMtable = $props();
</script>

<MathmlFormula display="block" size="8">
	<mo>(</mo><MathmlMtable {...args}
		><mtr><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd></mtr><mtr
			><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtr
		></MathmlMtable
	><mo>)</mo>
</MathmlFormula>

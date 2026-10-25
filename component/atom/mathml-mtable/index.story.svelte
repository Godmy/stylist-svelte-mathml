<script lang="ts">
	import MathmlMtable from '$stylist/mathml/component/atom/mathml-mtable/index.svelte';
	import type { RecipeMathmlMtable } from '$stylist/mathml/interface/recipe/mathml-mtable';

	// Render of index.story.ts: the component needs a <math> parent and MathML siblings.
	let args: RecipeMathmlMtable = $props();
</script>

<math display="block">
	<mo>(</mo><MathmlMtable {...args}
		><mtr><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd></mtr><mtr
			><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtr
		></MathmlMtable
	><mo>)</mo>
</math>

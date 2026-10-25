<script lang="ts">
	import MathmlFormula from '$stylist/mathml/component/molecule/mathml-formula/index.svelte';
	import MathmlMerror from '$stylist/mathml/component/atom/mathml-merror/index.svelte';
	import type { RecipeMathmlMerror } from '$stylist/mathml/interface/recipe/mathml-merror';

	// Render of index.story.ts: the component needs a formula root and MathML siblings.
	let args: RecipeMathmlMerror = $props();
</script>

<MathmlFormula display="block" size="8">
	<MathmlMerror {...args}><mtext>Ошибка: незакрытая скобка</mtext></MathmlMerror>
</MathmlFormula>

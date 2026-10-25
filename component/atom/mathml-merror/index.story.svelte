<script lang="ts">
	import MathmlMerror from '$stylist/mathml/component/atom/mathml-merror/index.svelte';
	import type { RecipeMathmlMerror } from '$stylist/mathml/interface/recipe/mathml-merror';

	// Render of index.story.ts: the component needs a <math> parent and MathML siblings.
	let args: RecipeMathmlMerror = $props();
</script>

<math display="block">
	<MathmlMerror {...args}><mtext>Ошибка: незакрытая скобка</mtext></MathmlMerror>
</math>

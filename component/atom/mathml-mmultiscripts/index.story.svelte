<script lang="ts">
	import MathmlFormula from '$stylist/mathml/component/molecule/mathml-formula/index.svelte';
	import MathmlMmultiscripts from '$stylist/mathml/component/atom/mathml-mmultiscripts/index.svelte';
	import type { RecipeMathmlMmultiscripts } from '$stylist/mathml/interface/recipe/mathml-mmultiscripts';

	// Render of index.story.ts: the component needs a formula root and MathML siblings.
	let args: RecipeMathmlMmultiscripts = $props();
</script>

<MathmlFormula display="block" size="8">
	<MathmlMmultiscripts {...args}
		><mi>X</mi><mi>a</mi><mi>b</mi><mprescripts /><mi>c</mi><mi>d</mi></MathmlMmultiscripts
	>
</MathmlFormula>

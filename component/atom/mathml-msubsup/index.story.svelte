<script lang="ts">
	import MathmlFormula from '$stylist/mathml/component/molecule/mathml-formula/index.svelte';
	import MathmlMsubsup from '$stylist/mathml/component/atom/mathml-msubsup/index.svelte';
	import type { RecipeMathmlMsubsup } from '$stylist/mathml/interface/recipe/mathml-msubsup';

	// Render of index.story.ts: the component needs a formula root and MathML siblings.
	let args: RecipeMathmlMsubsup = $props();
</script>

<MathmlFormula display="block" size="8">
	<MathmlMsubsup {...args}><mo>∫</mo><mn>0</mn><mn>1</mn></MathmlMsubsup>
</MathmlFormula>

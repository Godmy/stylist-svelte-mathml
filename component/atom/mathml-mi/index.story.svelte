<script lang="ts">
	import MathmlFormula from '$stylist/mathml/component/molecule/mathml-formula/index.svelte';
	import MathmlMi from '$stylist/mathml/component/atom/mathml-mi/index.svelte';
	import type { RecipeMathmlMi } from '$stylist/mathml/interface/recipe/mathml-mi';

	// Render of index.story.ts: the component needs a formula root and MathML siblings.
	let args: RecipeMathmlMi = $props();
</script>

<MathmlFormula display="block" size="8">
	<MathmlMi {...args}>x</MathmlMi>
</MathmlFormula>

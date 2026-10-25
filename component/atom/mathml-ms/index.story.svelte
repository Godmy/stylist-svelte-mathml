<script lang="ts">
	import MathmlFormula from '$stylist/mathml/component/molecule/mathml-formula/index.svelte';
	import MathmlMs from '$stylist/mathml/component/atom/mathml-ms/index.svelte';
	import type { RecipeMathmlMs } from '$stylist/mathml/interface/recipe/mathml-ms';

	// Render of index.story.ts: the component needs a formula root and MathML siblings.
	let args: RecipeMathmlMs = $props();
</script>

<MathmlFormula display="block" size="8">
	<MathmlMs {...args}>abc</MathmlMs>
</MathmlFormula>

<script lang="ts">
	import MathmlFormula from '$stylist/mathml/component/molecule/mathml-formula/index.svelte';
	import MathmlMaction from '$stylist/mathml/component/atom/mathml-maction/index.svelte';
	import type { RecipeMathmlMaction } from '$stylist/mathml/interface/recipe/mathml-maction';

	// Render of index.story.ts: the component needs a formula root and MathML siblings.
	let args: RecipeMathmlMaction = $props();
</script>

<MathmlFormula display="block" size="8">
	<MathmlMaction {...args}><mi>a</mi><mi>b</mi></MathmlMaction>
</MathmlFormula>

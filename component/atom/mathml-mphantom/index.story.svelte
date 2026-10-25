<script lang="ts">
	import MathmlFormula from '$stylist/mathml/component/molecule/mathml-formula/index.svelte';
	import MathmlMphantom from '$stylist/mathml/component/atom/mathml-mphantom/index.svelte';
	import type { RecipeMathmlMphantom } from '$stylist/mathml/interface/recipe/mathml-mphantom';

	// Render of index.story.ts: the component needs a formula root and MathML siblings.
	let args: RecipeMathmlMphantom = $props();
</script>

<MathmlFormula display="block" size="8">
	<mi>a</mi><MathmlMphantom {...args}><mi>b</mi></MathmlMphantom><mi>c</mi>
</MathmlFormula>

<script lang="ts">
	import MathmlMstyle from '$stylist/mathml/component/atom/mathml-mstyle/index.svelte';
	import type { RecipeMathmlMstyle } from '$stylist/mathml/interface/recipe/mathml-mstyle';

	// Render of index.story.ts: the component needs a <math> parent and MathML siblings.
	let args: RecipeMathmlMstyle = $props();
</script>

<math display="block">
	<MathmlMstyle {...args}><mfrac><mi>a</mi><mi>b</mi></mfrac><mo>+</mo><mn>1</mn></MathmlMstyle>
</math>

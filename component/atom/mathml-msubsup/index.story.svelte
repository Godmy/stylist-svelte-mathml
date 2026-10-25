<script lang="ts">
	import MathmlMsubsup from '$stylist/mathml/component/atom/mathml-msubsup/index.svelte';
	import type { RecipeMathmlMsubsup } from '$stylist/mathml/interface/recipe/mathml-msubsup';

	// Render of index.story.ts: the component needs a <math> parent and MathML siblings.
	let args: RecipeMathmlMsubsup = $props();
</script>

<math display="block">
	<MathmlMsubsup {...args}><mo>∫</mo><mn>0</mn><mn>1</mn></MathmlMsubsup>
</math>

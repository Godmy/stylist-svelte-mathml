<script lang="ts">
	import MathmlFormula from '$stylist/mathml/component/molecule/mathml-formula/index.svelte';
	import MathmlNode from '$stylist/mathml/component/template/mathml-node/index.svelte';
	import type { RecipeMathmlNode } from '$stylist/mathml/interface/recipe/mathml-node';

	// Render of index.story.ts: a node needs a formula root.
	let args: RecipeMathmlNode = $props();
</script>

<MathmlFormula display="block" size="8"><MathmlNode {...args} /></MathmlFormula>

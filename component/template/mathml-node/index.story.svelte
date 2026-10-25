<script lang="ts">
	import MathmlNode from '$stylist/mathml/component/template/mathml-node/index.svelte';
	import type { RecipeMathmlNode } from '$stylist/mathml/interface/recipe/mathml-node';

	// Render of index.story.ts: a node needs a <math> ancestor.
	let args: RecipeMathmlNode = $props();
</script>

<math display="block"><MathmlNode {...args} /></math>

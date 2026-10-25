<script lang="ts">
	import MathmlMtext from '$stylist/mathml/component/atom/mathml-mtext/index.svelte';
	import type { RecipeMathmlMtext } from '$stylist/mathml/interface/recipe/mathml-mtext';

	// Render of index.story.ts: the component needs a <math> parent and MathML siblings.
	let args: RecipeMathmlMtext = $props();
</script>

<math display="block">
	<mi>x</mi><MathmlMtext {...args}>&nbsp;если&nbsp;</MathmlMtext><mi>y</mi>
</math>

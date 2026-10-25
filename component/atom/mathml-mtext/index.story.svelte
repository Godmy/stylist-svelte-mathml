<script lang="ts">
	import MathmlFormula from '$stylist/mathml/component/molecule/mathml-formula/index.svelte';
	import MathmlMtext from '$stylist/mathml/component/atom/mathml-mtext/index.svelte';
	import type { RecipeMathmlMtext } from '$stylist/mathml/interface/recipe/mathml-mtext';

	// Render of index.story.ts: the component needs a formula root and MathML siblings.
	let args: RecipeMathmlMtext = $props();
</script>

<MathmlFormula display="block" size="8">
	<mi>x</mi><MathmlMtext {...args}>&nbsp;если&nbsp;</MathmlMtext><mi>y</mi>
</MathmlFormula>

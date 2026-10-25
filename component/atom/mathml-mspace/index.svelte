<script lang="ts">
	import type { RecipeMathmlMspace } from '$stylist/mathml/interface/recipe/mathml-mspace';

	let { element = $bindable(null), children: _children, ...rest }: RecipeMathmlMspace = $props();
</script>

<mspace bind:this={element} {...rest}></mspace>

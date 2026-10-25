<script lang="ts">
	import type { RecipeMathmlMprescripts } from '$stylist/mathml/interface/recipe/mathml-mprescripts';

	let {
		element = $bindable(null),
		children: _children,
		...rest
	}: RecipeMathmlMprescripts = $props();
</script>

<mprescripts bind:this={element} {...rest}></mprescripts>

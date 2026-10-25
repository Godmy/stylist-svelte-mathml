<svelte:options namespace="mathml" />

<script lang="ts">
	import MathmlNode from '$stylist/mathml/component/template/mathml-node/index.svelte';
	import { MATHML_NAMESPACE } from '$stylist/mathml/const/value/mathml-namespace';
	import type { RecipeMathmlNode } from '$stylist/mathml/interface/recipe/mathml-node';

	let { node }: RecipeMathmlNode = $props();
</script>

{#if node.kind === 'text'}{node.value}{:else}<svelte:element
		this={node.tag}
		xmlns={MATHML_NAMESPACE}
		data-mathml-node={node.id}
		{...node.attrs}
		>{#each node.children ?? [] as child, index (index)}<MathmlNode
				node={child}
			/>{/each}</svelte:element
	>{/if}

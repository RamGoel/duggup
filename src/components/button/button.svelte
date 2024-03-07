<script lang="ts">
	import type { LinkConfigType } from '../header/header';
	export let linkObject: LinkConfigType;
</script>

<div
	class="flex py-1 border-[1px] border-gray-600 rounded-[7px] border-b-[4px] hover:scale-105 hover:border-b-[1px] cursor-pointer transition-all px-5 items-center justify-center"
>
	{#if linkObject.icon}
		<img
			src={linkObject.icon}
			alt="header-link-logo"
			class="mr-1 hover:text-black"
			width="16"
			height="16"
		/>
	{/if}
	<p class=" text-gray-600 text-[14px] hover:text-black">{linkObject.name}</p>
</div>

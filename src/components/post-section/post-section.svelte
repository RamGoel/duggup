<script lang="ts">
	import PostCard from '../post-card/post-card.svelte';

	export let data: any;
</script>

<section class="my-3 flex items-center justify-start">
	<div class="w-1/5"></div>
	<div class="relative">
		<div class="w-1/4">
			<div class="h-[300px] border-l-[3px] border-[#778FB1] border-dotted"></div>
			<div
				class="w-[20px] absolute top-[45%] -left-2 bg-white h-[20px] border-4 rounded-full border-blue-600"
			/>
		</div>
	</div>
	<div class="flex flex-1 px-8 items-center gap-10 justify-start">
		{#each data.events as item}
			<PostCard post={item} />
		{/each}
	</div>
</section>

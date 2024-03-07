<script lang="ts">
	import PostCard from '../post-card/post-card.svelte';

	export let data: any;
</script>

<section class="mt-1 flex items-center justify-start">
	<div class="w-1/5 text-right px-6">
    <p class="text-[#7A9299] -mt-2 text-[12px]">{data.date}</p>
    </div>
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

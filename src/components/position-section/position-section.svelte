<script lang="ts">
	import { ChevronUp } from 'lucide-svelte';
	export let positionData: any;
	let { position } = positionData;
</script>

<section class="flex mt-1 items-center justify-start">
	<div class="text-right w-1/5 px-[30px]">
		<img
			src={position.logo}
			width="48px"
			height="48px"
			class="rounded-[90px] object-cover my-2 ml-auto"
			alt="user-big-profile"
		/>
		<h3 class="font-bold text-black text-[16px]">
			{position.company}
		</h3>
		<p class="text-[#7A9299] text-[12px]">{position.location}</p>
		<p class="text-[#7A9299] text-[12px]">Joined</p>
		<p class="text-[#7A9299] text-[12px]">{position.joined}</p>
	</div>
	<div class="relative">
		<ChevronUp class="text-[#778FB1] absolute -top-[13px] -left-[10.2px]" color={'#778FB1'} />
		<div class="h-[200px] border-l-[3px] border-[#778FB1] border-dotted"></div>
		<div
			class="w-[30px] absolute top-[45%] -left-3 bg-white h-[30px] border-[10px] rounded-full border-blue-600"
		/>
	</div>
	<div class="px-[30px]">
		<h1 class="text-[20px] font-bold">{position.role}</h1>
		<p class="text-[#7A9299] text-[12px]">
			{position.type}{position.workType ? ` · ${position.workType}` : ''}
		</p>
	</div>
</section>

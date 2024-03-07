<script lang="ts">
	import { ChevronUp } from 'lucide-svelte';
	import PositionCard from '../position-card/position-card.svelte';
	export let positionData: any;
	let { position } = positionData;
</script>

<section class="flex mt-1 items-center justify-start">
	<div class="w-1/5 hidden md:flex items-end px-6 text-right justify-end">
		<PositionCard {position} />
	</div>
	<div class="w-[50px] md:hidden"></div>
	<div class="relative">
		<ChevronUp class="text-[#778FB1] absolute -top-[13px] -left-[10.2px]" color={'#778FB1'} />
		<div class="h-[250px] md:h-[200px] border-l-[3px] border-[#778FB1] border-dotted"></div>
		<div
			class="w-[30px] absolute top-[45%] -left-3 bg-white h-[30px] border-[10px] rounded-full border-blue-600"
		/>
	</div>
	<div class="px-8 w-10/12 md:w-full">
		<div class="visible md:hidden text-left py-2">
			<PositionCard {position} />
		</div>
		<h1 class="text-[20px] font-bold">{position.role}</h1>
		<p class="text-[#7A9299] text-[12px]">
			{position.type}{position.workType ? ` · ${position.workType}` : ''}
		</p>
	</div>
</section>

<script lang="ts">
	import { ExternalLinkIcon } from 'lucide-svelte';
	import DotMenuSvg from '../../lib/assets/icons/dot-menu.svg';
	export let company: { logo: string; name: string; role: string };
	export let className: string;
</script>

<div
	class={`text-right w-full md:w-1/5 flex items-center justify-between py-3 md:py-0 md:block ${className}`}
>
	<img
		src={company.logo}
		width="36px"
		height="36px"
		class="rounded-[90px] object-cover ml-auto"
		alt="user-big-profile"
	/>
	<div class="flex-1">
		<h3 class="font-bold text-black text-[16px]">
			{company.name}
		</h3>
		<p class="text-[#7A9299] text-[12px]">{company.role}</p>
	</div>

	<div class="mt-5 hidden md:flex items-center justify-end">
		<div class="flex items-center justify-start">
			<p class="text-[14px] mr-2 text-[#4D4D4D]">My website</p>
			<ExternalLinkIcon size={16} color={'#4D4D4D'} />
		</div>

		<img src={DotMenuSvg} alt="dot menu" class="mx-3" width="20" height="20" />
	</div>
</div>

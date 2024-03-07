<script lang="ts">
	import Button from '../button/button.svelte';
    import DotMenuSvg from '../../lib/assets/icons/dot-menu.svg'
	import { userData } from '../../data/user';
	import { ExternalLinkIcon } from 'lucide-svelte';
	let currentCompany = userData.company[0];
</script>

<div class="w-full mt-10 flex flex-col md:flex-row">
	<div class="w-1/5">
		<img src={userData.image} width="120" height="120" class="mx-auto" alt="user-big-profile" />
		<h3 class="font-bold w-1/2 mx-auto leading-tight text-center text-[#4B5C6D] text-[24px]">
			{userData.name}
		</h3>
	</div>
	<div class="flex-1">
		<p class="text-[14px] leading-loose">
			{userData.description}
		</p>
		<div class="w-fit mt-4">
			<Button linkObject={{ name: userData.isFollowing ? 'Followed' : 'Follow', icon: '' }} />
		</div>
	</div>
	<div class="text-right w-1/5">
		<img
			src={currentCompany.logo}
			width="36"
			height="36"
			class="rounded-[90px] object-cover ml-auto"
			alt="user-big-profile"
		/>
		<h3 class="font-bold text-black text-[16px]">
			{currentCompany.name}
		</h3>
		<p class="text-[#7A9299] text-[12px]">{currentCompany.role}</p>

		<div class="mt-5 flex items-center justify-end">
			<div class="flex items-center justify-start">
				<p class="text-[14px] mr-2 text-[#4D4D4D]">My website</p> 
                <ExternalLinkIcon size={16} color={'#4D4D4D'} />
			</div>

            <img src={DotMenuSvg} alt="dot menu" class="mx-3" width="20" height="20"/>
		</div>
	</div>
</div>

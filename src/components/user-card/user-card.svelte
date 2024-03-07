<script lang="ts">
	import Button from '../button/button.svelte';
	import DotMenuSvg from '../../lib/assets/icons/dot-menu.svg';
	import { userData } from '../../data/user';
	import { ExternalLinkIcon } from 'lucide-svelte';
	import CompanyCard from '../company-card/company-card.svelte';
	let currentCompany = userData.company[0];
</script>

<div class="w-full my-[40px] flex flex-col md:flex-row">
	<div class="w-full md:w-1/5 text-left">
		<img src={userData.image} width="120" height="120" class="md:mx-auto rounded-full border-4 border-gray-200" alt="user-big-profile" />
		<h3
			class="font-bold my-2 w-full md:w-1/2 md:mx-auto leading-tight md:text-center text-[#4B5C6D] text-[24px]"
		>
			{userData.name}
		</h3>
	</div>
	<div class="flex-1">
		<p class="text-[14px] leading-loose">
			{userData.description}
		</p>
		<CompanyCard website={userData.website} className="visible md:hidden" company={currentCompany} />
		<div class="flex w-full items-center justify-between mt-4">
			<Button linkObject={{ name: userData.isFollowing ? 'Followed' : 'Follow', icon: '' }} />
			<div class="flex items-center justify-end md:hidden">
				<div class="flex items-center justify-start">
					<p class="text-[14px] mr-2 text-[#4D4D4D]">My website</p>
					<ExternalLinkIcon size={16} color={'#4D4D4D'} />
				</div>
				<img src={DotMenuSvg} alt="dot menu" class="mx-3" width="20" height="20" />
			</div>
		</div>
	</div>
	<CompanyCard website={userData.website} className="hidden md:block" company={currentCompany} />
</div>

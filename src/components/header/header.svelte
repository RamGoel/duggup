<script>
	import AppIcon from '../../lib/assets/app_icon.png';
	import TypographyIcon from '../../lib/assets/text_icon.png';
	import { headerLinksConfig } from './header';
	import { userData } from '../../data/user';
	import Link from '../nav-link/link.svelte';
	import Button from '../button/button.svelte';
	import NavUser from '../nav-user/user.svelte'
</script>

<section>
	<div
		class="py-3 border-b-2 border-dotted border-gray-300 flex items-center justify-between"
	>
		<div class=" flex items-center justify-between">
			<img src={AppIcon} alt="app_icon" width="25" class="mr-2" height="25" />
		<img src={TypographyIcon} alt="text_icon" width="70" />
		</div>

		<div class="flex items-center justify-around">
			{#each headerLinksConfig as obj}
				{#if obj.type === 'button'}
					<Button linkObject={obj} />
				{:else}
					<Link linkObject={obj} />
				{/if}
			{/each}
			<NavUser user={userData} />
		</div>
	</div>
</section>

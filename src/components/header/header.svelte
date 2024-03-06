<script>
    import AppIcon from '../../lib/assets/app_icon.png'
    import TypographyIcon from '../../lib/assets/text_icon.png'
	import { headerLinksConfig } from './header';
	import Link from './token/link.svelte';
</script>
<section>
    <div class="w-3/4 mx-auto py-5 border-b-2 border-dotted border-gray-300 flex items-center justify-start">
        <img src={AppIcon} alt="app_icon" width="35" class="mr-2" height="35" />
        <img src={TypographyIcon} alt="text_icon" width="90" />
        {#each headerLinksConfig as obj}
        <Link linkObject={obj} />
        {/each}
    </div>
</section>

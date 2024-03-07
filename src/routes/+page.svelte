<script>
	import Header from '../components/header/header.svelte';
	import PositionSection from '../components/position-section/position-section.svelte';
	import PostSection from '../components/post-section/post-section.svelte';
	import UserCard from '../components/user-card/user-card.svelte';
	import { userData } from '../data/user';
</script>

<svelte:head>
	<title>Home | Duggup</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section >
	<div class="w-10/12 mx-auto">
		<Header />
	</div>
	<div class="w-9/12 mx-auto">
		<UserCard />
	</div>
	<div class="">
		{#each userData.timeline as obj}
			{#if obj.type === 'post'}
				<PostSection data={obj} />
			{:else}
				<PositionSection positionData={obj} />
			{/if}
		{/each}
	</div>
</section>

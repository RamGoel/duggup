<script>
	import Header from '../components/header/header.svelte';
	import UserCard from '../components/user-card/user-card.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="w-3/4 mx-auto">
	<Header />
	<UserCard />
</section>

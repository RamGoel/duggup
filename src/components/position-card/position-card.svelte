<script lang="ts">
	export let position: { logo: string; company_name: string; location: string; joined: string };
</script>

<div class="">
	<img
		src={position.logo}
		width="48px"
		height="48px"
		class="rounded-[90px] mr-auto my-2 md:mr-0 md:ml-auto"
		alt="user-big-profile"
	/>
	<h3 class="font-bold text-black text-[16px]">
		{position.company_name}
	</h3>
	<p class="text-[#7A9299] text-[12px]">{position.location}</p>
	<p class="text-[#7A9299] text-[12px]">Joined</p>
	<p class="text-[#7A9299] text-[12px]">{position.joined}</p>
</div>

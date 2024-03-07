<script lang="ts">
	import type { LinkConfigType } from "../header/header";
    export let linkObject:LinkConfigType;
</script>
<div class="flex  items-center justify-center px-2 mx-4">
   <img src={linkObject.icon} alt="header-link-logo" class="mr-2 hover:text-black" width="16" height="16" />
   <p class=" text-gray-600 text-[14px] hover:text-black">{linkObject.name}</p>
</div>
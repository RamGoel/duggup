<script lang="ts">
	import type { LinkConfigType } from "../header/header";
    export let linkObject:LinkConfigType;
</script>
<div class="flex border-b-[2px] border-b-white hover:border-b-gray-400 transition-all cursor-pointer py-1 items-center justify-center px-2 mx-3">
   <img src={linkObject.icon} alt="header-link-logo" class="mr-2 hover:text-black" width="16" height="16" />
   <p class=" text-gray-600 text-[14px] ">{linkObject.name}</p>
</div>
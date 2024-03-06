<script lang="ts">
	import type { LinkConfigType } from "../header";
    export let linkObject:LinkConfigType;
</script>
<div class="flex items-center justify-center">
   <img src={linkObject.icon} alt="header-link-logo" width="35" height="35" />
   <p>{linkObject.name}</p>
</div>
<script lang="ts">
    import ChevronDown from '../../lib/assets/icons/chevron-down.svg';
    export let user:any;
</script>
<div class="flex items-center justify-center px-2 mx-2">
   <img src={user.image} alt="header-link-logo" class="mr-2 hover:opacity-70 cursor-pointer" width="40" height="40" />
   <p class="hidden md:block text-gray-600 hover:text-black">{user.name}</p>
   <img src={ChevronDown} alt="header-link-logo" width="16" height="16" class="mt-1 mx-2" />
</div>
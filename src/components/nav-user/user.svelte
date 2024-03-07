<script lang="ts">
    import ProfileIcon from '../../lib/assets/profile_icon.png';
    import ChevronDown from '../../lib/assets/icons/chevron-down.svg';
    let username='Krishna Kiran'
</script>
<div class="flex  items-center justify-center px-2 mx-4">
   <img src={ProfileIcon} alt="header-link-logo" class="mr-2 hover:text-black" width="40" height="40" />
   <p class=" text-gray-600 hover:text-black">{username}</p>
   <img src={ChevronDown} alt="header-link-logo" width="16" height="16" class="mt-1 mx-2" />
</div>
<script lang='ts'>
	export let post: Array<{ description: string; image: string }>;
</script>

<div class="rounded-2xl relative w-[344px] h-[246px] border-[1.4px] overflow-hidden">
    <img src={post.image} alt="post thumbnail"/>
	<div class="bg-white p-4 h-[100px] absolute bottom-0">
        <p class="text-sm">{post.description}</p>
    </div>
</div>

<template>
	<div class="card-image">
		<figure class="image is-4by3">
			<img :src="img_url" alt="Placeholder image" />
		</figure>
	</div>
</template>

<script>
export default {
    props: ['img_url']
}
</script>
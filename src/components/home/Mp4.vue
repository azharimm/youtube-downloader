<template>
	<div class="mb-5">
		<h5>MP4 Format</h5>
		<div class="buttons">
			<div v-for="(data, index) in format" :key="index">
				<a
					:href="data.url"
					target="_blank"
					:id="data.id"
					class="button is-success mr-3"
					v-if="data.id == 138"
				>8K ({{(data.size / 1024 / 1024).toFixed(2)}} MB)</a>
				<a
					:href="data.url"
					target="_blank"
					:id="data.id"
					class="button is-success mr-3"
					v-if="data.id == 266"
				>4K ({{(data.size / 1024 / 1024).toFixed(2)}} MB)</a>
				<a
					:href="data.url"
					target="_blank"
					:id="data.id"
					class="button is-success mr-3"
					v-if="data.id == 264"
				>2K ({{(data.size / 1024 / 1024).toFixed(2)}} MB)</a>
				<a
					:href="data.url"
					target="_blank"
					:id="data.id"
					class="button is-success mr-3"
					v-if="data.id == 137"
				>1080p ({{(data.size / 1024 / 1024).toFixed(2)}} MB)</a>
				<a
					:href="data.url"
					target="_blank"
					:id="data.id"
					class="button is-success mr-3"
					v-if="data.id == 22"
				>720p ({{(data.size / 1024 / 1024).toFixed(2)}} MB)</a>
				<a
					:href="data.url"
					target="_blank"
					:id="data.id"
					class="button is-success mr-3"
					v-if="data.id == 135"
				>480p ({{(data.size / 1024 / 1024).toFixed(2)}} MB)</a>
				<a
					:href="data.url"
					target="_blank"
					:id="data.id"
					class="button is-success mr-3"
					v-if="data.id == 18"
				>360p ({{(data.size / 1024 / 1024).toFixed(2)}} MB)</a>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: ["format"],
};
</script>

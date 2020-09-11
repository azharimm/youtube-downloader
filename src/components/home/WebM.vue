<template>
	<div class="mb-5">
		<h5>WebM (Video Only)</h5>
		<div class="buttons">
			<div v-for="(data, index) in format" :key="index">
				<a
					:href="data.url"
					target="_blank"
					:id="data.id"
					class="button mr-3"
					v-if="data.id == 313"
				>4K ({{(data.size / 1024 / 1024).toFixed(2)}} MB)</a>
				<a
					:href="data.url"
					target="_blank"
					:id="data.id"
					class="button mr-3"
					v-if="data.id == 271"
				>2K ({{(data.size / 1024 / 1024).toFixed(2)}} MB)</a>
				<a
					:href="data.url"
					target="_blank"
					:id="data.id"
					class="button mr-3"
					v-if="data.id == 248"
				>1080p ({{(data.size / 1024 / 1024).toFixed(2)}} MB)</a>
				<a
					:href="data.url"
					target="_blank"
					:id="data.id"
					class="button mr-3"
					v-if="data.id == 247"
				>720p ({{(data.size / 1024 / 1024).toFixed(2)}} MB)</a>
				<a
					:href="data.url"
					target="_blank"
					:id="data.id"
					class="button mr-3"
					v-if="data.id == 244"
				>480p ({{(data.size / 1024 / 1024).toFixed(2)}} MB)</a>
				<a
					:href="data.url"
					target="_blank"
					:id="data.id"
					class="button mr-3"
					v-if="data.id == 243"
				>360p ({{(data.size / 1024 / 1024).toFixed(2)}} MB)</a>
				<a
					:href="data.url"
					target="_blank"
					:id="data.id"
					class="button mr-3"
					v-if="data.id == 242"
				>240p ({{(data.size / 1024 / 1024).toFixed(2)}} MB)</a>
				<a
					:href="data.url"
					target="_blank"
					:id="data.id"
					class="button mr-3"
					v-if="data.id == 278"
				>144p ({{(data.size / 1024 / 1024).toFixed(2)}} MB)</a>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: ["format"],
};
</script>
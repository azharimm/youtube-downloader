<template>
	<div class="mb-5">
		<h5>3GP</h5>
		<div class="buttons">
			<div v-for="(data, index) in format" :key="index">
				<a
					:href="data.url"
					target="_blank"
					:id="data.id"
					class="button is-success mr-3"
					v-if="data.id == 36"
				>240p ({{(data.size / 1024 / 1024).toFixed(2)}} MB)</a>
				<a
					:href="data.url"
					target="_blank"
					:id="data.id"
					class="button is-success mr-3"
					v-if="data.id == 17"
				>144p ({{(data.size / 1024 / 1024).toFixed(2)}} MB)</a>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: ['format']
};
</script>
<template>
	<div id="app">
		<Nav />
		<Home />
	</div>
</template>

<script>
import Nav from "./components/Nav.vue";
import Home from "./pages/Home.vue";

export default {
	components: {
		Nav,
		Home
	},
};
</script>

<style>
</style>

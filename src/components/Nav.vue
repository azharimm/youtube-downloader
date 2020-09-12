<template>
	<nav class="navbar" role="navigation" aria-label="main navigation">
		<div class="navbar-brand">
			<router-link tag="a" class="navbar-item" to="/">
				<img src="../assets/img/youtube_icon.png" width="30" height="28" />
				<b>Downloader</b>
			</router-link>
			<a
				role="button"
				class="navbar-burger burger"
				aria-label="menu"
				aria-expanded="false"
				data-target="navbarBasicExample"
				@click.prevent="navBurger"
			>
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
			</a>
		</div>

		<div id="navbarBasicExample" class="navbar-menu" :class="{'is-active': is_active}">
			<div class="navbar-start">
				<router-link tag="a" to="/" class="navbar-item">Home</router-link>
				<router-link tag="a" to="/playlist" class="navbar-item">Playlist</router-link>
			</div>

			<div class="navbar-end">
				<div class="navbar-item">
					<!-- <div class="buttons">
						<a class="button is-primary">
							<strong>Sign up</strong>
						</a>
						<a class="button is-light">Log in</a>
					</div> -->
				</div>
			</div>
		</div>
	</nav>
</template>

<script>
export default {
	data() {
		return {
			is_active: false
		}
	},
	methods: {
		navBurger() {
			this.is_active = !this.is_active;		
		}
	}

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

<template>
	<div class="container">
		<section class="hero is-small is-bold">
			<div class="hero-body">
				<div class="container">
					<div class="columns is-centered">
						<div class="column is-half">
							<LogoBanner title="Youtube Playlist Downloader" />
							<form @submit.prevent="submitUrl" class="mt-5">
								<div class="field">
									<div class="control is-medium">
										<input
											class="input is-medium"
											v-model="youtube_url"
											type="text"
											placeholder="Enter Youtube URL"
										/>
									</div>
								</div>
								<div class="field has-text-centered">
									<div class="select mr-5">
										<select v-model="type">
											<option value="mp4">MP4</option>
											<option value="mp4VidOnly">MP4 (Video Only)</option>
											<option value="webM">WebM (Video Only)</option>
											<option value="audio">Audio</option>
											<option value="3gp">3GP</option>
										</select>
									</div>
									<button class="button is-primary is-rounded">Download</button>
								</div>
							</form>
						</div>
					</div>
					<div class="columnn is-centered">
						<div class="column is-half is-offset-one-quarter">
							<Loader v-if="is_loading" />
							<Card v-if="!is_loading && data.length">
								<CardContent>
									<table class="table is-fullwidth">
										<thead>
											<tr>
												<th>#</th>
												<th>Thumbnail</th>
												<th>Title</th>
												<th>Download</th>
											</tr>
										</thead>
										<tbody>
											<RowTable
												v-for="(item, index) in data"
												:index="index"
												:key="item.id"
												:item="item"
												:type="type"
											/>
										</tbody>
									</table>
								</CardContent>
							</Card>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
import LogoBanner from "../components/LogoBanner";
import Card from "../components/Card";
import CardContent from "../components/CardContent";
import RowTable from "../components/playlist/RowTable";
import Loader from "../components/playlist/Loader";
import { api_cors_anywhere, api_youtube_playlist } from "../env";

import axios from "axios";

export default {
	components: {
		LogoBanner,
		Card,
		CardContent,
		RowTable,
		Loader,
	},
	data() {
		return {
			youtube_url: null,
			data: [],
			is_loading: false,
			type: "mp4",
		};
	},
	methods: {
		submitUrl() {
			if (!this.youtube_url) {
				this.errorUrlAlert();
				return;
			}
			if (!this.checkValidUrl()) {
				this.errorUrlAlert();
				return;
			}
			this.fetchData();
		},
		fetchData() {
			this.is_loading = true;
			axios
				.get(
					`${api_cors_anywhere}${api_youtube_playlist}${encodeURIComponent(
						this.youtube_url
					)}`,
					{
						headers: {
							"X-Requested-With": "XMLHttpRequest",
						},
					}
				)
				.then((response) => {
					if (!response.data.status) {
						this.errorUrlAlert();
						return;
					}
					this.data = response.data.items;
					this.is_loading = false;
				})
				.catch((e) => {
					console.log("Something went wrong: " + e);
					this.is_loading = false;
				});
		},
		errorUrlAlert() {
			this.$swal({
				icon: "error",
				title: "Oops...",
				text: "Invalid Youtube URL!",
				footer:
					"E.g : &nbsp;<a href> https://www.youtube.com/watch?v=qwe123</a>",
			});
		},
		checkValidUrl() {
			return this.youtube_url.includes("www.youtube.com");
		},
	},
};
</script>
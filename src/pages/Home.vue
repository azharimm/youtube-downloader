<template>
	<div class="container">
		<section class="hero is-small is-bold mt-5">
			<div class="hero-body">
				<div class="container">
					<div class="columns is-centered">
						<div class="column is-half">
							<LogoBanner title="Youtube Downloader" />
							<form @submit.prevent="submitUrl" class="mt-5">
								<div class="field">
									<div class="control is-medium">
										<input class="input is-medium" type="text" v-model="youtube_url" placeholder="Enter Youtube URL" required />
									</div>
								</div>
								<div class="field has-text-centered">
									<button type="submit" class="button is-primary is-rounded">Download</button>
								</div>
							</form>
						</div>
					</div>
					<div class="columnn is-centered">
						<div class="column is-half is-offset-one-quarter">
							<Loader v-if="is_loading" />
							<Card v-if="!is_loading && data">
								<CardImage :img_url="data.thumbnails" />
								<CardContent>
									<Media>
										<MediaContent>
											<p
												class="title is-4"
											>{{data.title}}</p>
											<p class="subtitle is-6">
												{{data.description}}
											</p>
										</MediaContent>
									</Media>
									<Content>
										<Mp4 :format="data.format" />
										<Audio :format="data.format" />
										<Mp4VidOnly :format="data.format" />
										<WebM :format="data.format" />
										<ThreeGp :format="data.format" />
									</Content>
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
import CardImage from "../components/CardImage";
import CardContent from "../components/CardContent";
import Media from "../components/Media";
import MediaContent from "../components/MediaContent";
import Content from "../components/Content";
import Mp4 from "../components/home/Mp4";
import Audio from "../components/home/Audio";
import Mp4VidOnly from "../components/home/Mp4VidOnly";
import WebM from "../components/home/WebM";
import ThreeGp from "../components/home/ThreeGp";
import Loader from "../components/home/Loader";

import {api_cors, api_youtube} from '../env';

import axios from 'axios';

export default {
	components: {
		LogoBanner,
		Card,
		CardImage,
		CardContent,
		Media,
		MediaContent,
		Content,
		Mp4,
		Audio,
		Mp4VidOnly,
		WebM,
		ThreeGp,
		Loader
	},
	data() {
		return {
			youtube_url: null,
			data: null,
			is_loading: false
		}
	},
	mounted() {
		console.log('Oh, Hi there!');
	},
	methods: {
		submitUrl() {
			if(!this.youtube_url) {
				this.errorUrlAlert();
				return;
			}
			if(!this.checkValidUrl()) {
				this.errorUrlAlert();
				return;
			}

			this.fetchData();
		},
		fetchData() {
			this.is_loading = true;
			axios.get(`${api_cors}+${api_youtube}+${this.youtube_url}`).then(response => {
				if(!response.data.status) {
					this.errorUrlAlert();
					return;
				}
				this.data = response.data;
				this.is_loading = false;
			}).catch(e => {
				console.log('Something went wrong: ' +e);
			});
		},
		errorUrlAlert() {
			this.$swal({
				icon: "error",
				title: "Oops...",
				text: "Invalid Youtube URL!",
				footer: 'E.g : &nbsp;<a href> https://www.youtube.com/watch?v=qwe123</a>'
			});
		},
		checkValidUrl() {
			return this.youtube_url.includes('https://www.youtube.com');
		}
	},
};
</script>
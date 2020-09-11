<template>
	<div class="container">
		<section class="hero is-small is-bold">
			<div class="hero-body">
				<div class="container">
					<div class="columns is-centered">
						<div class="column is-half">
							<LogoBanner title="Youtube Downloader" />
							<form action="#" class="mt-5">
								<div class="field">
									<div class="control is-medium">
										<input class="input is-medium" type="text" placeholder="Enter Youtube URL" />
									</div>
								</div>
								<div class="field has-text-centered">
									<button class="button is-primary is-rounded">Download</button>
								</div>
							</form>
						</div>
					</div>
					<div class="columnn is-centered">
						<div class="column is-half is-offset-one-quarter">
							<Card>
								<CardImage img_url="https://i.ytimg.com/vi/av7FADk99UQ/default.jpg" />
								<CardContent>
									<Media>
										<MediaContent>
											<p
												class="title is-4"
											>Film Komedi - (Bagian 2) Digoyang Trio Macan - Kolaborasi Trio Macan - Eps 34 Serial Gembira Ria</p>
											<p class="subtitle is-6">Selamat Menyaksikan</p>
										</MediaContent>
									</Media>
									<Content>
										<Mp4 />
										<Audio />
										<Mp4VidOnly />
										<WebM />
										<ThreeGp />
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
	},
};
</script>
<template>
	<div class="container">
		<section class="hero is-small is-bold">
			<div class="hero-body">
				<div class="container">
					<div class="columns is-centered">
						<div class="column is-half">
							<LogoBanner title="Youtube Playlist Downloader" />
							<form action="#" class="mt-5">
								<div class="field">
									<div class="control is-medium">
										<input class="input is-medium" type="text" placeholder="Enter Youtube URL" />
									</div>
								</div>
								<div class="field has-text-centered">
									<div class="select mr-5">
										<select>
											<option>MP4</option>
											<option>MP4 (Video Only)</option>
											<option>WebM (Video Only)</option>
											<option>Audio</option>
											<option>3GP</option>
										</select>
									</div>
									<button class="button is-primary is-rounded">Download</button>
								</div>
							</form>
						</div>
					</div>
					<div class="columnn is-centered">
						<div class="column is-half is-offset-one-quarter">
							<div class="card">
								<div class="card-content">
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
											<tr>
												<td>1</td>
												<td>
													<img src="https://i.ytimg.com/vi/rFWrJ7_xFsU/default.jpg" alt />
												</td>
												<td>RINDU SERINDU RINDUNYA - ZerosiX park (Cover)</td>
												<td>
													<div class="buttons">
														<button class="button">One</button>
														<button class="button">Two</button>
														<button class="button">Three</button>
													</div>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
import LogoBanner from '../components/LogoBanner'
export default {
	components: {
		LogoBanner
	}
};
</script>
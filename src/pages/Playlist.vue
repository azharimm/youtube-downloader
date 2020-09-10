<template>
	<div class="container">
		<section class="hero is-small is-bold">
			<div class="hero-body">
				<div class="container">
					<div class="columns is-centered">
						<div class="column is-half">
							<center>
								<img src="../assets/img/youtube_icon.png" width="150px" />
							</center>
							<center>
								<h1 class="title">Youtube Playlist Downloader</h1>
							</center>
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
export default {};
</script>
<template>
	<div class="row">
		<div class="col-xl-12">
			<div class="placeholder wave">
				<div class="card-image">
					<figure class="image is-4by3"></figure>
				</div>
				<section class="card-content">
					<section class="media">
						<section class="media-content">
							<div class="title"></div>
							<div class="subtitle"></div>
						</section>
					</section>
					<section class="content">
						<div class="title-button"></div>
						<section class="buttons">
							<div class="button"></div>
							<div class="button"></div>
							<div class="button"></div>
							<div class="button"></div>
							<div class="button"></div>
							<div class="button"></div>
							<div class="button"></div>
						</section>
					</section>
				</section>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: "SkeletonLoader",
	props: ["loading"],
};
</script>
<style scoped lang="scss">
.placeholder {
	// margin: 15px;
	// padding: 10px;
	border-radius: 5px;
	&.pulse div {
		animation: pulse 1s infinite ease-in-out;
		-webkit-animation: pulse 1s infinite ease-in-out;
	}
	&.wave div {
		animation: wave 1s infinite linear forwards;
		-webkit-animation: wave 1s infinite linear forwards;
		background: #f6f7f8;
		background: -webkit-linear-gradient(
			left,
			#eeeeee 8%,
			#dddddd 18%,
			#eeeeee 33%
		);
		background: -o-linear-gradient(
			left,
			#eeeeee 8%,
			#dddddd 18%,
			#eeeeee 33%
		);
		background: linear-gradient(
			to right,
			#eeeeee 8%,
			#dddddd 18%,
			#eeeeee 33%
		);
		background-size: 800px 104px;
	}
	div {
		background: #e8e8e8;
	}
	.title {
		margin: 0 0 10px 0;
		height: 20px;
		width: 100%;
	}
	.subtitle {
		margin: 0 0 10px 0;
		height: 40px;
		width: 100%;
	}
    .title-button {
		margin: 0 0 10px 0;
		height: 20px;
		width: 50%;
	}
    .button {
        float: left;
		width: 70px;
		height: 30px;
		margin: 0 20px 10px;
        border-radius: 10%;
    }
}
@keyframes pulse {
	0% {
		background-color: rgba(165, 165, 165, 0.1);
	}
	50% {
		background-color: rgba(165, 165, 165, 0.3);
	}
	100% {
		background-color: rgba(165, 165, 165, 0.1);
	}
}
@-webkit-keyframes pulse {
	0% {
		background-color: rgba(165, 165, 165, 0.1);
	}
	50% {
		background-color: rgba(165, 165, 165, 0.3);
	}
	100% {
		background-color: rgba(165, 165, 165, 0.1);
	}
}
@keyframes wave {
	0% {
		background-position: -468px 0;
	}
	100% {
		background-position: 468px 0;
	}
}
@-webkit-keyframes wave {
	0% {
		background-position: -468px 0;
	}
	100% {
		background-position: 468px 0;
	}
}
</style>
<template>
	<div class="row">
		<div class="col-xl-12">
			<div class="placeholder wave">
				<section class="card">
					<section class="card-content">
						<table class="table is-fullwidth">
							<thead>
								<tr>
									<th><div class="table-content-no"></div></th>
									<th><div class="table-content"></div></th>
									<th><div class="table-content"></div></th>
									<th><div class="table-content"></div></th>
								</tr>
							</thead>
							<tbody>
                                <tr>
                                    <td><div class="table-content-no"></div></td>
                                    <td>
                                        <div class="table-content-img"></div>
                                    </td>
                                    <td>
                                        <div class="table-content-desc"></div>
                                        <div class="table-content-desc"></div>
                                        <div class="table-content-desc"></div>
                                    </td>
                                    <td>
                                        <section class="buttons">
                                            <div class="table-content-button"></div>
                                            <div class="table-content-button"></div>
                                        </section>
                                    </td>
                                </tr>
                                <tr>
                                    <td><div class="table-content-no"></div></td>
                                    <td>
                                        <div class="table-content-img"></div>
                                    </td>
                                    <td>
                                        <div class="table-content-desc"></div>
                                        <div class="table-content-desc"></div>
                                        <div class="table-content-desc"></div>
                                    </td>
                                    <td>
                                        <section class="buttons">
                                            <div class="table-content-button"></div>
                                            <div class="table-content-button"></div>
                                        </section>
                                    </td>
                                </tr>
							</tbody>
						</table>
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
	.table-content {
		width: 100%;
		height: 20px;
		margin: 10px 5px 10px -10px;
		border-radius: 10%;
	}
    .table-content-no {
		width: 25px;
		height: 20px;
		margin: 10px 5px 10px -10px;
		border-radius: 10%;
	}
    .table-content-img {
		width: 85px;
		height: 60px;
		margin: 10px 5px 10px -10px;
		border-radius: 10%;
	}
    .table-content-desc {
		width: 80px;
		height: 15px;
		margin: 10px 5px 10px -10px;
		border-radius: 10%;
	}
    .table-content-button {
		width: 70px;
		height: 30px;
		margin: 10px 5px 20px -10px;
        margin-right: 20px;
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
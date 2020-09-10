import Home from "../pages/Home.vue";
import Playlist from "../pages/Playlist.vue";

const  routes = [
	{
		path: "/",
		component: Home,
	},
	{
		path: "/playlist",
		component: Playlist,
	},
];

export default routes;

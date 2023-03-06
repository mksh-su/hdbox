import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

export default defineConfig({
	base: "/hdbox/",
	plugins: [sveltekit()]
});

export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","css/style.min.css","css/style.min.css.map","favicon.png","img/.DS_Store","img/hero-bg.jpg","img/icons/app-store.svg","img/icons/arrow.svg","img/icons/google-play.svg","img/logo.svg","img/product/.DS_Store","img/product/app-logo.svg","img/product/app-screen.png","img/product/m1.svg","img/product/x1.svg","scss/_base.scss","scss/_product.scss","scss/_typography.scss","scss/_variables.scss","scss/style.scss"]),
	mimeTypes: {".css":"text/css",".map":"application/json",".png":"image/png",".jpg":"image/jpeg",".svg":"image/svg+xml",".scss":"text/x-scss"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.cc6c6c6e.js","imports":["_app/immutable/entry/start.cc6c6c6e.js","_app/immutable/chunks/index.f98f3a93.js","_app/immutable/chunks/singletons.b751b561.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.a9d3c9f4.js","imports":["_app/immutable/entry/app.a9d3c9f4.js","_app/immutable/chunks/index.f98f3a93.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

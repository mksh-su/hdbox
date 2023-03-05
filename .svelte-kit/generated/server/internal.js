
import root from '../root.svelte';
import { set_building } from '__sveltekit/environment';
import { set_assets } from '__sveltekit/paths';
import { set_private_env, set_public_env } from '../../../node_modules/@sveltejs/kit/src/runtime/shared-server.js';

export const options = {
	app_template_contains_nonce: false,
	csp: {"mode":"auto","directives":{"upgrade-insecure-requests":false,"block-all-mixed-content":false},"reportOnly":{"upgrade-insecure-requests":false,"block-all-mixed-content":false}},
	csrf_check_origin: true,
	embedded: false,
	env_public_prefix: 'PUBLIC_',
	hooks: null, // added lazily, via `get_hooks`
	preload_strategy: "modulepreload",
	root,
	service_worker: false,
	templates: {
		app: ({ head, body, assets, nonce, env }) => "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"utf-8\" />\n    <link rel=\"icon\" href=\"" + assets + "/favicon.png\" />\n    <link rel=\"stylesheet\" href=\"" + assets + "/css/style.min.css\" />\n    <meta name=\"viewport\" content=\"width=device-width\" />\n    " + head + "\n  </head>\n  <body data-sveltekit-preload-data=\"hover\">\n    <div style=\"display: none\">" + body + "</div>\n    <section class=\"product-sect\">\n      <div class=\"container\">\n        <div class=\"section-desc\">\n          <h2 class=\"h2\">A small box filled with new experiences.</h2>\n          <p class=\"text\">\n            Mediastar devices use high quality display resolutions to provide users with a luxurious experience.\n          </p>\n        </div>\n        <div class=\"product-row\">\n          <div class=\"product-item\">\n            <div class=\"product-item-img\">\n              <img src=\"" + assets + "/img/product/m1.svg\" alt=\"\" />\n            </div>\n            <div class=\"product-item-name\"></div>\n            <p class=\"product-item-headline\">Say hello to your new streming device</p>\n            <a href=\"\" class=\"product-item-link\">Discover M1</a>\n          </div>\n          <div class=\"product-item\">\n            <div class=\"product-item-img\">\n              <img src=\"" + assets + "/img/product/x1.svg\" alt=\"\" />\n            </div>\n            <p class=\"product-item-headline\">A small box for best experience</p>\n            <a href=\"\" class=\"product-item-link\">Discover X1</a>\n          </div>\n        </div>\n        <div class=\"app-row\">\n          <div class=\"app-col\">\n            <img src=\"" + assets + "/img/product/app-screen.png\" class=\"app-col-img\" alt=\"\" />\n          </div>\n          <div class=\"app-col\">\n            <img src=\"" + assets + "/img/product/app-logo.svg\" alt=\"\" />\n            <p class=\"text\">\n              Using the XBOX app, you can easily renew and manage your subscriptions, and packages, register your\n              device, and check your balance.\n            </p>\n\t\t\t<div class=\"app-link-row\">\n\t\t\t\t<a href=\"\" class=\"app-link\">\n\t\t\t\t\t<img src=\"" + assets + "/img/icons/app-store.svg\" alt=\"\">\n\t\t\t\t</a>\n\t\t\t\t<a href=\"\" class=\"app-link\">\n\t\t\t\t\t<img src=\"" + assets + "/img/icons/google-play.svg\" alt=\"\">\n\t\t\t\t</a>\n\t\t\t</div>\n          </div>\n        </div>\n      </div>\n    </section>\n  </body>\n</html>\n",
		error: ({ status, message }) => "<!DOCTYPE html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<title>" + message + "</title>\n\n\t\t<style>\n\t\t\tbody {\n\t\t\t\tfont-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,\n\t\t\t\t\tUbuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tjustify-content: center;\n\t\t\t\theight: 100vh;\n\t\t\t}\n\n\t\t\t.error {\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tmax-width: 32rem;\n\t\t\t\tmargin: 0 1rem;\n\t\t\t}\n\n\t\t\t.status {\n\t\t\t\tfont-weight: 200;\n\t\t\t\tfont-size: 3rem;\n\t\t\t\tline-height: 1;\n\t\t\t\tposition: relative;\n\t\t\t\ttop: -0.05rem;\n\t\t\t}\n\n\t\t\t.message {\n\t\t\t\tborder-left: 1px solid #ccc;\n\t\t\t\tpadding: 0 0 0 1rem;\n\t\t\t\tmargin: 0 0 0 1rem;\n\t\t\t\tmin-height: 2.5rem;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t}\n\n\t\t\t.message h1 {\n\t\t\t\tfont-weight: 400;\n\t\t\t\tfont-size: 1em;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\t\t</style>\n\t</head>\n\t<body>\n\t\t<div class=\"error\">\n\t\t\t<span class=\"status\">" + status + "</span>\n\t\t\t<div class=\"message\">\n\t\t\t\t<h1>" + message + "</h1>\n\t\t\t</div>\n\t\t</div>\n\t</body>\n</html>\n"
	},
	version_hash: "154l4c6"
};

export function get_hooks() {
	return {};
}

export { set_assets, set_building, set_private_env, set_public_env };

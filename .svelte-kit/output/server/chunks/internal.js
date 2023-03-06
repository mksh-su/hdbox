import { c as create_ssr_component, a as setContext, v as validate_component, m as missing_component } from "./index.js";
let base = "";
let assets = base;
const initial = { base, assets };
function reset() {
  base = initial.base;
  assets = initial.assets;
}
function set_assets(path) {
  assets = initial.assets = path;
}
let public_env = {};
function set_private_env(environment) {
}
function set_public_env(environment) {
  public_env = environment;
}
function afterUpdate() {
}
function set_building() {
}
const Root = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { stores } = $$props;
  let { page } = $$props;
  let { constructors } = $$props;
  let { components = [] } = $$props;
  let { form } = $$props;
  let { data_0 = null } = $$props;
  let { data_1 = null } = $$props;
  {
    setContext("__svelte__", stores);
  }
  afterUpdate(stores.page.notify);
  if ($$props.stores === void 0 && $$bindings.stores && stores !== void 0)
    $$bindings.stores(stores);
  if ($$props.page === void 0 && $$bindings.page && page !== void 0)
    $$bindings.page(page);
  if ($$props.constructors === void 0 && $$bindings.constructors && constructors !== void 0)
    $$bindings.constructors(constructors);
  if ($$props.components === void 0 && $$bindings.components && components !== void 0)
    $$bindings.components(components);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  if ($$props.data_0 === void 0 && $$bindings.data_0 && data_0 !== void 0)
    $$bindings.data_0(data_0);
  if ($$props.data_1 === void 0 && $$bindings.data_1 && data_1 !== void 0)
    $$bindings.data_1(data_1);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      stores.page.set(page);
    }
    $$rendered = `


${constructors[1] ? `${validate_component(constructors[0] || missing_component, "svelte:component").$$render(
      $$result,
      { data: data_0, this: components[0] },
      {
        this: ($$value) => {
          components[0] = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(constructors[1] || missing_component, "svelte:component").$$render(
            $$result,
            { data: data_1, form, this: components[1] },
            {
              this: ($$value) => {
                components[1] = $$value;
                $$settled = false;
              }
            },
            {}
          )}`;
        }
      }
    )}` : `${validate_component(constructors[0] || missing_component, "svelte:component").$$render(
      $$result,
      { data: data_0, form, this: components[0] },
      {
        this: ($$value) => {
          components[0] = $$value;
          $$settled = false;
        }
      },
      {}
    )}`}

${``}`;
  } while (!$$settled);
  return $$rendered;
});
const options = {
  app_template_contains_nonce: false,
  csp: { "mode": "auto", "directives": { "upgrade-insecure-requests": false, "block-all-mixed-content": false }, "reportOnly": { "upgrade-insecure-requests": false, "block-all-mixed-content": false } },
  csrf_check_origin: true,
  embedded: false,
  env_public_prefix: "PUBLIC_",
  hooks: null,
  // added lazily, via `get_hooks`
  preload_strategy: "modulepreload",
  root: Root,
  service_worker: false,
  templates: {
    app: ({ head, body, assets: assets2, nonce, env }) => '<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="utf-8" />\n    <link rel="icon" href="' + assets2 + '/favicon.png" />\n    <link rel="stylesheet" href="' + assets2 + '/css/style.min.css" />\n    <meta name="viewport" content="width=device-width" />\n    ' + head + '\n  </head>\n  <body data-sveltekit-preload-data="hover">\n    <div>' + body + '</div>\n    <!-- <header class="header">\n      <div class="container">\n        <a href="" class="logo"><img src="' + assets2 + '/img/logo.svg" alt="" /></a>\n        <nav class="header-nav">\n          <ul class="header-nav-list">\n            <li class="header-nav-link"><a href="">Product</a></li>\n            <li class="header-nav-link"><a href="">Broadcasting</a></li>\n            <li class="header-nav-link"><a href="">Channels & Packages</a></li>\n            <li class="header-nav-link"><a href="">Reseller</a></li>\n            <li class="header-nav-link"><a href="">About us</a></li>\n            <li class="header-nav-link"><a href="">Contact</a></li>\n          </ul>\n        </nav>\n      </div>\n    </header>\n    <section class="hero-sect">\n      <img src="' + assets2 + '/img/hero-bg.jpg" class="hero-bg" alt="" />\n      <div class="container">\n        <div class="hero-bottom">\n          <p class="hero-headline">unlock the world of higher definition</p>\n          <p class="hero-desc">\n            The new HDBOX satellite receiver will provide you with the best TV watching experience that will transform\n            your living room into a movie theatre.\n            <a href="">Check Our Products</a>\n          </p>\n          <div class="hero-bottom-row">\n            <div class="hero-bottom-col">\n              <span class="hero-bottom-col-name">The new HDBOX satellite</span>\n              <div class="hero-bottom-logo-row">\n                <img src="' + assets2 + '/img/icons/forevertv-white.svg" class="hero-bottom-logo" alt="" />\n                <img src="' + assets2 + '/img/icons/youtube-white.svg" class="hero-bottom-logo" alt="" />\n              </div>\n            </div>\n            <div class="hero-bottom-col">\n              <span class="hero-bottom-col-name">The new HDBOX satellite</span>\n              <div class="hero-bottom-logo-row">\n                <img src="' + assets2 + '/img/icons/full-hd.svg" class="hero-bottom-logo" alt="" />\n                <img src="' + assets2 + '/img/icons/channels-white.png" class="hero-bottom-logo" alt="" />\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n    <section class="product-sect">\n      <div class="container">\n        <div class="section-desc">\n          <h2 class="h2">A small box filled with new experiences.</h2>\n          <p class="text">\n            Mediastar devices use high quality display resolutions to provide users with a luxurious experience.\n          </p>\n        </div>\n        <div class="product-row">\n          <div class="product-item">\n            <div class="product-item-img">\n              <img src="' + assets2 + '/img/product/m1.svg" alt="" />\n            </div>\n            <div class="product-item-name"></div>\n            <p class="product-item-headline">Say hello to your new streming device</p>\n            <a href="" class="product-item-link">Discover M1</a>\n          </div>\n          <div class="product-item">\n            <div class="product-item-img">\n              <img src="' + assets2 + '/img/product/x1.svg" alt="" />\n            </div>\n            <p class="product-item-headline">A small box for best experience</p>\n            <a href="" class="product-item-link">Discover X1</a>\n          </div>\n        </div>\n        <div class="app-row">\n          <div class="app-col">\n            <img src="' + assets2 + '/img/product/app-screen.png" class="app-col-img" alt="" />\n          </div>\n          <div class="app-col">\n            <img src="' + assets2 + '/img/product/app-logo.svg" alt="" />\n            <p class="text">\n              Using the XBOX app, you can easily renew and manage your subscriptions, and packages, register your\n              device, and check your balance.\n            </p>\n            <div class="app-link-row">\n              <a href="" class="app-link">\n                <img src="' + assets2 + '/img/icons/app-store.svg" alt="" />\n              </a>\n              <a href="" class="app-link">\n                <img src="' + assets2 + '/img/icons/google-play.svg" alt="" />\n              </a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n    <section class="feature-sect">\n      <div class="container">\n        <div class="section-desc">\n          <h2 class="h2">Delivering extraordinary experiences in a small package</h2>\n          <p class="text">\n            Mediastar devices use high quality display resolutions to provide users with a luxurious experience.\n          </p>\n        </div>\n        <div class="feature-grid">\n          <div class="feature-item Left">\n            <img src="' + assets2 + '/img/icons/channels-black.svg" alt="" />\n            <p class="text feature-item-text">The best shows, movies, sports and live TV.</p>\n          </div>\n          <div class="feature-item TVLG">\n            <img src="' + assets2 + '/img/other/avatar.jpg" alt="" />\n            <p class="text feature-item-text">Unlock the world of Higher Definition</p>\n          </div>\n          <div class="feature-item H265">\n            <img src="' + assets2 + '/img/icons/full-hd-red.svg" alt="" />\n            <p class="text feature-item-text">High-Efficiency Video Coding support and FHD resolution</p>\n          </div>\n          <div class="feature-item Perks">\n            <div class="feature-item-small">\n              <img src="' + assets2 + '/img/icons/feature-audio.svg" class="feature-item-small-icon" alt="" />\n              <span class="feature-item-small-name">Multi-language audio</span>\n            </div>\n            <div class="feature-item-small">\n              <img src="' + assets2 + '/img/icons/feature-search.svg" class="feature-item-small-icon" alt="" />\n              <span class="feature-item-small-name">Blind search supported</span>\n            </div>\n            <div class="feature-item-small">\n              <img src="' + assets2 + '/img/icons/feature-satellite.svg" class="feature-item-small-icon" alt="" />\n              <span class="feature-item-small-name">Multi satellite search. Network search</span>\n            </div>\n            <div class="feature-item-small">\n              <img src="' + assets2 + '/img/icons/feature-update.svg" class="feature-item-small-icon" alt="" />\n              <span class="feature-item-small-name">Software and addition/ data upgrade through USB</span>\n            </div>\n            <div class="feature-item-small">\n              <img src="' + assets2 + '/img/icons/feature-ratio.svg" class="feature-item-small-icon" alt="" />\n              <span class="feature-item-small-name">\n                Variable aspect ratio (4:3.169) with Pan & scan vector or letter box option\n              </span>\n            </div>\n            <div class="feature-item-small">\n              <img src="' + assets2 + '/img/icons/feature-storing.svg" class="feature-item-small-icon" alt="" />\n              <span class="feature-item-small-name">\n                Storing memory: more than 100 satellite, 4000 transponders and 8000 channels\n              </span>\n            </div>\n          </div>\n          <div class="feature-item VODPVR">\n            <div class="feature-item-inner">\n              <img src="' + assets2 + '/img/icons/vod.svg" alt="" />\n            </div>\n            <div class="feature-item-inner">\n              <img src="' + assets2 + '/img/icons/pvr.svg" alt="" />\n            </div>\n          </div>\n          <div class="feature-item WIFI">\n            <img src="' + assets2 + '/img/icons/wi-fi.svg" alt="" />\n            <p class="text feature-item-text">Internal Wi-Fi Support</p>\n          </div>\n          <div class="feature-item TimeShift">\n            <img src="' + assets2 + '/img/icons/timeshift.svg" alt="" />\n          </div>\n          <div class="feature-item YT">\n            <img src="' + assets2 + '/img/icons/youtube-black.svg" alt="" />\n          </div>\n          <div class="feature-item HDMIUSB">\n            <img src="' + assets2 + '/img/icons/hdmi-black.svg" alt="" />\n            <img src="' + assets2 + '/img/icons/usb.svg" alt="" />\n          </div>\n          <div class="feature-item ForeverTV">\n            <img src="' + assets2 + `/img/icons/forevertv-white-big.svg" alt="" />
          </div>
        </div>
      </div>
    </section>
    <section class="release-sect">
      <div class="container">
        <div class="section-desc">
          <h2 class="h2">New releases are now streaming on Forevertv</h2>
          <p class="text">
            Mediastar devices use high quality display resolutions to provide users with a luxurious experience.
          </p>
        </div>
        <div class="btn-container">
          <a href="" class="btn btn-red-fill">Discover Channels</a>
        </div>
      </div>
    </section>
    <footer class="footer">
      <div class="container">
        <div class="first">
          <div class="content">
            <Logo type="lg-000" />
            <p class="text">
              There's nothing better than watching live TV, movies,
              <br />
              or sports. With over 280 channels and packages to
              <br />
              choose from, the HDBOX has something for
              <br />
              everyone
            </p>
          </div>
          <div class="nav">
            <ul class="links">
              <h5 class="h5">Navigation</h5>
              {#each links as item}
              <CustomBtn text="{item.name}" link="{item.link}" font_size="sm" />
              {/each}
            </ul>
            <ul class="socials">
              <h5 class="h5">Social</h5>
              {#each socials as item}
              <CustomBtn text="{item.name}" link="{item.link}" font_size="sm" />
              {/each}
            </ul>
          </div>
        </div>
        <div class="last">
          <div class="copyright">
            <p>Copyright © 2010-2022 HDBOX. All rights reserved.</p>
          </div>
          <div class="by">
            <p>Branding & Website by :&nbsp;</p>
            <CustomBtn text="whitespace" link="https://whitespace.krd/" font_size="xs" />
          </div>
        </div>
      </div>
    </footer> -->
  </body>
</html>
`,
    error: ({ status, message }) => '<!DOCTYPE html>\n<html lang="en">\n	<head>\n		<meta charset="utf-8" />\n		<title>' + message + `</title>

		<style>
			body {
				font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
					Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
				display: flex;
				align-items: center;
				justify-content: center;
				height: 100vh;
			}

			.error {
				display: flex;
				align-items: center;
				max-width: 32rem;
				margin: 0 1rem;
			}

			.status {
				font-weight: 200;
				font-size: 3rem;
				line-height: 1;
				position: relative;
				top: -0.05rem;
			}

			.message {
				border-left: 1px solid #ccc;
				padding: 0 0 0 1rem;
				margin: 0 0 0 1rem;
				min-height: 2.5rem;
				display: flex;
				align-items: center;
			}

			.message h1 {
				font-weight: 400;
				font-size: 1em;
				margin: 0;
			}
		</style>
	</head>
	<body>
		<div class="error">
			<span class="status">` + status + '</span>\n			<div class="message">\n				<h1>' + message + "</h1>\n			</div>\n		</div>\n	</body>\n</html>\n"
  },
  version_hash: "1kkb83j"
};
function get_hooks() {
  return {};
}
export {
  assets as a,
  base as b,
  set_assets as c,
  set_building as d,
  set_private_env as e,
  get_hooks as g,
  options as o,
  public_env as p,
  reset as r,
  set_public_env as s
};

import { c as create_ssr_component, v as validate_component, d as add_attribute, f as each, e as escape, h as null_to_empty } from "../../chunks/index.js";
import { C as CustomBtn, H as Header, F as Footer } from "../../chunks/Footer.js";
import { register } from "swiper/element/bundle";
import { S as Support, P as Packages } from "../../chunks/Support.js";
const Hero_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: '.hero-bg.svelte-ivzzq0.svelte-ivzzq0{object-fit:cover;object-position:center;position:absolute;min-height:100%;width:100%}.hero-sect.svelte-ivzzq0.svelte-ivzzq0{min-height:860px;height:100vh;position:relative;overflow:hidden;margin:auto}.hero-sect.svelte-ivzzq0 .svelte-ivzzq0{color:white}.hero-sect.svelte-ivzzq0 .container.svelte-ivzzq0{display:flex;flex-direction:column;height:100%}.hero-headline.svelte-ivzzq0.svelte-ivzzq0{font-weight:900;font-style:italic;font-size:32px;color:white;max-width:530px;margin:18px auto;text-transform:uppercase;text-align:center;font-family:"Sequel100Black-86", sans-serif;line-height:1.1}.hero-desc.svelte-ivzzq0.svelte-ivzzq0{color:white;font-size:16px;max-width:420px;margin:18px auto 44px;text-align:center}.hero-bottom.svelte-ivzzq0.svelte-ivzzq0{position:relative;margin-top:auto;padding-bottom:50px}.hero-bottom-row.svelte-ivzzq0.svelte-ivzzq0{display:flex;justify-content:space-between;align-items:flex-end}.hero-bottom-col.svelte-ivzzq0.svelte-ivzzq0{display:flex;flex-direction:column}.hero-bottom-col-name.svelte-ivzzq0.svelte-ivzzq0{font-size:16px}.hero-bottom-col.svelte-ivzzq0.svelte-ivzzq0:last-of-type{justify-content:flex-end}.hero-bottom-col.svelte-ivzzq0:last-of-type .hero-bottom-col-name.svelte-ivzzq0{text-align:right}.hero-bottom-col.svelte-ivzzq0:last-of-type .hero-bottom-logo-row.svelte-ivzzq0{gap:26px}.hero-bottom-logo.svelte-ivzzq0.svelte-ivzzq0{max-height:53px}.hero-bottom-logo-row.svelte-ivzzq0.svelte-ivzzq0{display:flex;align-items:center;gap:48px;margin-top:12px}',
  map: null
};
const Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$4);
  return `<section class="${"hero-sect svelte-ivzzq0"}"><img src="${"./img/hero-bg.jpg"}" class="${"hero-bg svelte-ivzzq0"}" alt="${""}">
  <div class="${"container svelte-ivzzq0"}"><div class="${"hero-bottom svelte-ivzzq0"}"><p class="${"hero-headline svelte-ivzzq0"}">unlock the world of higher definition</p>
      <p class="${"hero-desc svelte-ivzzq0"}">The new HDBOX satellite receiver will provide you with the best TV watching experience that will transform your
        living room into a movie theatre.
        <a href="${""}" class="${"svelte-ivzzq0"}">Check Our Products</a></p>
      <div class="${"hero-bottom-row svelte-ivzzq0"}"><div class="${"hero-bottom-col svelte-ivzzq0"}"><span class="${"hero-bottom-col-name svelte-ivzzq0"}">The new HDBOX satellite</span>
          <div class="${"hero-bottom-logo-row svelte-ivzzq0"}"><img src="${"./img/icons/forevertv-white.svg"}" class="${"hero-bottom-logo svelte-ivzzq0"}" alt="${""}">
            <img src="${"./img/icons/youtube-white.svg"}" class="${"hero-bottom-logo svelte-ivzzq0"}" alt="${""}"></div></div>
        <div class="${"hero-bottom-col svelte-ivzzq0"}"><span class="${"hero-bottom-col-name svelte-ivzzq0"}">The new HDBOX satellite</span>
          <div class="${"hero-bottom-logo-row svelte-ivzzq0"}"><img src="${"./img/icons/full-hd.svg"}" class="${"hero-bottom-logo svelte-ivzzq0"}" alt="${""}">
            <img src="${"./img/icons/channels-white.png"}" class="${"hero-bottom-logo svelte-ivzzq0"}" alt="${""}"></div></div></div></div></div>
</section>`;
});
const Products_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: '.product-sect.svelte-nnefqp.svelte-nnefqp{margin:110px 0 130px}.product-item.svelte-nnefqp.svelte-nnefqp{background:rgba(233, 233, 233, 0.3);border-radius:12px;text-align:center;flex-grow:1;flex-basis:50%;padding:40px}.product-item-headline.svelte-nnefqp.svelte-nnefqp{font-size:24px;font-weight:500;margin:18px auto;max-width:260px}.product-item-img.svelte-nnefqp.svelte-nnefqp{height:320px;display:flex;align-items:center;justify-content:center;margin:0 0 60px}.product-item-img.svelte-nnefqp img.svelte-nnefqp{max-height:100%}.product-row.svelte-nnefqp.svelte-nnefqp{display:flex;gap:16px}.app-row.svelte-nnefqp.svelte-nnefqp{display:flex;align-items:center;border:1px solid #d9d9d9;border-radius:12px;margin-top:16px}.app-col.svelte-nnefqp.svelte-nnefqp{display:flex;flex-direction:column;align-items:flex-start;flex-basis:50%}.app-col.svelte-nnefqp .text.svelte-nnefqp{margin:18px 0;font-weight:500;font-family:"Rational Display", sans-serif}.app-col.svelte-nnefqp.svelte-nnefqp:last-of-type{padding-right:120px}.app-link.svelte-nnefqp.svelte-nnefqp{text-decoration:none}.app-link-row.svelte-nnefqp.svelte-nnefqp{display:flex;gap:16px;margin-top:20px}',
  map: null
};
const Products = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<section class="${"product-sect svelte-nnefqp"}"><div class="${"container"}"><div class="${"section-desc"}"><h2 class="${"h2"}">A small box filled with new experiences.</h2>
      <p class="${"text"}">Mediastar devices use high quality display resolutions to provide users with a luxurious experience.
      </p></div>
    <div class="${"product-row svelte-nnefqp"}"><div class="${"product-item svelte-nnefqp"}"><div class="${"product-item-img svelte-nnefqp"}"><img src="${"./img/product/m1.svg"}" alt="${""}" class="${"svelte-nnefqp"}"></div>
        <div class="${"product-item-name"}"><img src="${"./img/product/m1-sign.svg"}" alt="${""}"></div>
        <p class="${"product-item-headline svelte-nnefqp"}">Say hello to your new streming device</p>
        ${validate_component(CustomBtn, "CustomBtn").$$render(
    $$result,
    {
      text: "Discover M1",
      link: "#",
      font_size: "lg"
    },
    {},
    {}
  )}</div>
      <div class="${"product-item svelte-nnefqp"}"><div class="${"product-item-img svelte-nnefqp"}"><img src="${"./img/product/x1.svg"}" alt="${""}" class="${"svelte-nnefqp"}"></div>
        <div class="${"product-item-name"}"><img src="${"./img/product/x1-sign.svg"}" alt="${""}"></div>
        <p class="${"product-item-headline svelte-nnefqp"}">A small box for best experience</p>
        ${validate_component(CustomBtn, "CustomBtn").$$render(
    $$result,
    {
      text: "Discover X1",
      link: "#",
      font_size: "lg"
    },
    {},
    {}
  )}</div></div>
    <div class="${"app-row svelte-nnefqp"}"><div class="${"app-col svelte-nnefqp"}"><img src="${"./img/product/app-screen.png"}" class="${"app-col-img"}" alt="${""}"></div>
      <div class="${"app-col svelte-nnefqp"}"><img src="${"./img/product/app-logo.svg"}" alt="${""}">
        <p class="${"text svelte-nnefqp"}">Using the XBOX app, you can easily renew and manage your subscriptions, and packages, register your device,
          and check your balance.
        </p>
        <div class="${"app-link-row svelte-nnefqp"}"><a href="${""}" class="${"app-link svelte-nnefqp"}"><img src="${"./img/icons/app-store.svg"}" alt="${""}"></a>
          <a href="${""}" class="${"app-link svelte-nnefqp"}"><img src="${"./img/icons/google-play.svg"}" alt="${""}"></a></div></div></div></div>
</section>`;
});
const Features_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: '.feature-grid.svelte-mhz588.svelte-mhz588{display:grid;gap:16px;grid-template-columns:1fr 2fr 1.4fr;grid-template-rows:1fr 0.5fr 0.5fr 0fr;grid-auto-flow:row;grid-template-areas:"Left TVLG H265" "Perks TVLG WIFI" "Perks VODPVR TimeShift" "YT HDMIUSB ForeverTV"}.feature-grid.svelte-mhz588 .Left.svelte-mhz588{grid-area:Left;display:flex;flex-direction:column;align-items:center;padding:28px 20px}.feature-grid.svelte-mhz588 .Left img.svelte-mhz588{margin:20px auto;padding-right:30px}.feature-grid.svelte-mhz588 .Left .feature-item-text.svelte-mhz588{margin-top:auto}.feature-grid.svelte-mhz588 .WIFI.svelte-mhz588{grid-area:WIFI;display:flex;align-items:center;gap:10px;padding-right:10px}.feature-grid.svelte-mhz588 .WIFI .feature-item-text.svelte-mhz588{font-size:22px}.feature-grid.svelte-mhz588 .TimeShift.svelte-mhz588{grid-area:TimeShift;display:flex}.feature-grid.svelte-mhz588 .TimeShift img.svelte-mhz588{max-width:210px;margin:auto}.feature-grid.svelte-mhz588 .VODPVR.svelte-mhz588{display:grid;grid-template-columns:1fr 1fr;grid-template-rows:1fr;grid-auto-flow:row;grid-template-areas:". .";grid-area:VODPVR;border:0;padding:0;gap:16px}.feature-grid.svelte-mhz588 .VODPVR .feature-item-inner.svelte-mhz588{border:1px solid #dbdbdb;padding:56px 48px;border-radius:12px}.feature-grid.svelte-mhz588 .Perks.svelte-mhz588{grid-area:Perks}.feature-grid.svelte-mhz588 .YT.svelte-mhz588{grid-area:YT;display:flex;justify-content:center;align-items:center}.feature-grid.svelte-mhz588 .HDMIUSB.svelte-mhz588{grid-area:HDMIUSB;display:flex;gap:44px;justify-content:center;padding:55px}.feature-grid.svelte-mhz588 .ForeverTV.svelte-mhz588{grid-area:ForeverTV;background-image:url("/src/Assets/img/other/forever-bg.png");background-size:cover;display:flex;justify-content:center;align-items:center}.feature-grid.svelte-mhz588 .H265.svelte-mhz588{grid-area:H265;display:flex;flex-direction:column;align-items:center}.feature-grid.svelte-mhz588 .H265 img.svelte-mhz588{margin:20px auto}.feature-grid.svelte-mhz588 .H265 .feature-item-text.svelte-mhz588{margin-top:auto}.feature-grid.svelte-mhz588 .TVLG.svelte-mhz588{grid-area:TVLG;display:flex;flex-direction:column;align-items:center;padding:20px 20px 28px 20px}.feature-grid.svelte-mhz588 .TVLG .feature-item-tv.svelte-mhz588{border:4px solid black;box-shadow:10px 10px 25px 5px rgba(0, 0, 0, 0.2);display:flex;width:100%}.feature-grid.svelte-mhz588 .TVLG .feature-item-text.svelte-mhz588{margin-top:auto;font-size:22px}.feature-grid.svelte-mhz588 .TVLG img.svelte-mhz588{width:100%}.feature-item.svelte-mhz588.svelte-mhz588{border:1px solid #dbdbdb;border-radius:12px;padding:28px;text-align:center}.feature-item-text.svelte-mhz588.svelte-mhz588{margin:0;font-family:"Rational Display", sans-serif}.feature-item-small.svelte-mhz588.svelte-mhz588{display:flex;align-items:center;text-align:left;margin:14px 0}.feature-item-small-icon.svelte-mhz588.svelte-mhz588{min-width:18px;margin-right:18px}.feature-item-small-name.svelte-mhz588.svelte-mhz588{text-transform:uppercase;font-size:10px}',
  map: null
};
const Features = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<section class="${"feature-sect"}"><div class="${"container"}"><div class="${"section-desc"}"><h2 class="${"h2"}">Delivering extraordinary experiences in a small package</h2>
      <p class="${"text"}">Mediastar devices use high quality display resolutions to provide users with a luxurious experience.
      </p></div>
    <div class="${"feature-grid svelte-mhz588"}"><div class="${"feature-item Left svelte-mhz588"}"><img src="${"./img/icons/channels-black.svg"}" alt="${""}" class="${"svelte-mhz588"}">
        <p class="${"text feature-item-text svelte-mhz588"}">The best shows, movies, sports and live TV.</p></div>
      <div class="${"feature-item TVLG svelte-mhz588"}"><div class="${"feature-item-tv svelte-mhz588"}"><img src="${"./img/other/avatar.jpg"}" alt="${""}" class="${"svelte-mhz588"}"></div>
        <p class="${"text feature-item-text svelte-mhz588"}">Unlock the world of Higher Definition</p></div>
      <div class="${"feature-item H265 svelte-mhz588"}"><img src="${"./img/icons/full-hd-red.svg"}" alt="${""}" class="${"svelte-mhz588"}">
        <p class="${"text feature-item-text svelte-mhz588"}">High-Efficiency Video Coding support and FHD resolution</p></div>
      <div class="${"feature-item Perks svelte-mhz588"}"><div class="${"feature-item-small svelte-mhz588"}"><img src="${"./img/icons/feature-audio.svg"}" class="${"feature-item-small-icon svelte-mhz588"}" alt="${""}">
          <span class="${"feature-item-small-name svelte-mhz588"}">Multi-language audio</span></div>
        <div class="${"feature-item-small svelte-mhz588"}"><img src="${"./img/icons/feature-search.svg"}" class="${"feature-item-small-icon svelte-mhz588"}" alt="${""}">
          <span class="${"feature-item-small-name svelte-mhz588"}">Blind search supported</span></div>
        <div class="${"feature-item-small svelte-mhz588"}"><img src="${"./img/icons/feature-satellite.svg"}" class="${"feature-item-small-icon svelte-mhz588"}" alt="${""}">
          <span class="${"feature-item-small-name svelte-mhz588"}">Multi satellite search. Network search</span></div>
        <div class="${"feature-item-small svelte-mhz588"}"><img src="${"./img/icons/feature-update.svg"}" class="${"feature-item-small-icon svelte-mhz588"}" alt="${""}">
          <span class="${"feature-item-small-name svelte-mhz588"}">Software and addition/ data upgrade through USB</span></div>
        <div class="${"feature-item-small svelte-mhz588"}"><img src="${"./img/icons/feature-ratio.svg"}" class="${"feature-item-small-icon svelte-mhz588"}" alt="${""}">
          <span class="${"feature-item-small-name svelte-mhz588"}">Variable aspect ratio (4:3.169) with Pan &amp; scan vector or letter box option
          </span></div>
        <div class="${"feature-item-small svelte-mhz588"}"><img src="${"./img/icons/feature-storing.svg"}" class="${"feature-item-small-icon svelte-mhz588"}" alt="${""}">
          <span class="${"feature-item-small-name svelte-mhz588"}">Storing memory: more than 100 satellite, 4000 transponders and 8000 channels
          </span></div></div>
      <div class="${"feature-item VODPVR svelte-mhz588"}"><div class="${"feature-item-inner svelte-mhz588"}"><img src="${"./img/icons/vod.svg"}" alt="${""}" class="${"svelte-mhz588"}"></div>
        <div class="${"feature-item-inner svelte-mhz588"}"><img src="${"./img/icons/pvr.svg"}" alt="${""}" class="${"svelte-mhz588"}"></div></div>
      <div class="${"feature-item WIFI svelte-mhz588"}"><img src="${"./img/icons/wi-fi.svg"}" alt="${""}" class="${"svelte-mhz588"}">
        <p class="${"text feature-item-text svelte-mhz588"}">Internal Wi-Fi Support</p></div>
      <div class="${"feature-item TimeShift svelte-mhz588"}"><img src="${"./img/icons/timeshift.svg"}" alt="${""}" class="${"svelte-mhz588"}"></div>
      <div class="${"feature-item YT svelte-mhz588"}"><img src="${"./img/icons/youtube-black.svg"}" alt="${""}" class="${"svelte-mhz588"}"></div>
      <div class="${"feature-item HDMIUSB svelte-mhz588"}"><img src="${"./img/icons/hdmi-black.svg"}" alt="${""}" class="${"svelte-mhz588"}">
        <img src="${"./img/icons/usb.svg"}" alt="${""}" class="${"svelte-mhz588"}"></div>
      <div class="${"feature-item ForeverTV svelte-mhz588"}"><img src="${"./img/icons/forevertv-white-big.svg"}" alt="${""}" class="${"svelte-mhz588"}"></div></div></div>
</section>`;
});
const Releases_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".release-sect.svelte-lkqt7q.svelte-lkqt7q{margin:120px 0 130px}.release-sect.svelte-lkqt7q swiper-container.svelte-lkqt7q,.release-sect.svelte-lkqt7q swiper-slide.svelte-lkqt7q{-webkit-transition-timing-function:linear !important;-o-transition-timing-function:linear !important;transition-timing-function:linear !important;margin:10px 0 0}.release-sect.svelte-lkqt7q swiper-slide.svelte-lkqt7q{max-width:380px;text-align:center}.release-poster.svelte-lkqt7q.svelte-lkqt7q{max-width:360px;border-radius:12px}.btn-container.svelte-lkqt7q.svelte-lkqt7q{margin-top:30px}",
  map: null
};
const Releases = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  register();
  $$result.css.add(css$1);
  return `<section class="${"release-sect svelte-lkqt7q"}"><div class="${"container"}"><div class="${"section-desc"}"><h2 class="${"h2"}">New releases are now streaming on Forevertv</h2>
      <p class="${"text"}">Mediastar devices use high quality display resolutions to provide users with a luxurious experience.
      </p></div></div>
  <swiper-container ${"loop"}${add_attribute("spacebetween", 20, 0)}${add_attribute("slidesperview", 4, 0)}${add_attribute("loopedslides", 16, 0)}${add_attribute("freemodemomentum", false, 0)}${add_attribute("loopfillgroupwithblank", true, 0)} ${{
    delay: 100,
    disableOnInteraction: false,
    pauseOnMouseEnter: false,
    reverseDirection: true
  } ? "autoplay" : ""}${add_attribute("speed", 12e4, 0)} dir="${"rtl"}" class="${"svelte-lkqt7q"}"><swiper-slide class="${"svelte-lkqt7q"}"><img src="${"./img/poster/aqua.png"}" class="${"release-poster svelte-lkqt7q"}" alt="${""}"></swiper-slide>
    <swiper-slide class="${"svelte-lkqt7q"}"><img src="${"./img/poster/avatar.png"}" class="${"release-poster svelte-lkqt7q"}" alt="${""}"></swiper-slide>
    <swiper-slide class="${"svelte-lkqt7q"}"><img src="${"./img/poster/barbarian.png"}" class="${"release-poster svelte-lkqt7q"}" alt="${""}"></swiper-slide>
    <swiper-slide class="${"svelte-lkqt7q"}"><img src="${"./img/poster/dune.png"}" class="${"release-poster svelte-lkqt7q"}" alt="${""}"></swiper-slide>
    <swiper-slide class="${"svelte-lkqt7q"}"><img src="${"./img/poster/marvel.png"}" class="${"release-poster svelte-lkqt7q"}" alt="${""}"></swiper-slide>
    <swiper-slide class="${"svelte-lkqt7q"}"><img src="${"./img/poster/nope.png"}" class="${"release-poster svelte-lkqt7q"}" alt="${""}"></swiper-slide>
    <swiper-slide class="${"svelte-lkqt7q"}"><img src="${"./img/poster/sw.png"}" class="${"release-poster svelte-lkqt7q"}" alt="${""}"></swiper-slide>
    <swiper-slide class="${"svelte-lkqt7q"}"><img src="${"./img/poster/w.png"}" class="${"release-poster svelte-lkqt7q"}" alt="${""}"></swiper-slide>
    <swiper-slide class="${"svelte-lkqt7q"}"><img src="${"./img/poster/aqua.png"}" class="${"release-poster svelte-lkqt7q"}" alt="${""}"></swiper-slide>
    <swiper-slide class="${"svelte-lkqt7q"}"><img src="${"./img/poster/avatar.png"}" class="${"release-poster svelte-lkqt7q"}" alt="${""}"></swiper-slide>
    <swiper-slide class="${"svelte-lkqt7q"}"><img src="${"./img/poster/barbarian.png"}" class="${"release-poster svelte-lkqt7q"}" alt="${""}"></swiper-slide>
    <swiper-slide class="${"svelte-lkqt7q"}"><img src="${"./img/poster/dune.png"}" class="${"release-poster svelte-lkqt7q"}" alt="${""}"></swiper-slide>
    <swiper-slide class="${"svelte-lkqt7q"}"><img src="${"./img/poster/marvel.png"}" class="${"release-poster svelte-lkqt7q"}" alt="${""}"></swiper-slide>
    <swiper-slide class="${"svelte-lkqt7q"}"><img src="${"./img/poster/nope.png"}" class="${"release-poster svelte-lkqt7q"}" alt="${""}"></swiper-slide>
    <swiper-slide class="${"svelte-lkqt7q"}"><img src="${"./img/poster/sw.png"}" class="${"release-poster svelte-lkqt7q"}" alt="${""}"></swiper-slide>
    <swiper-slide class="${"svelte-lkqt7q"}"><img src="${"./img/poster/w.png"}" class="${"release-poster svelte-lkqt7q"}" alt="${""}"></swiper-slide></swiper-container>
  <swiper-container ${"loop"}${add_attribute("spacebetween", 20, 0)}${add_attribute("slidesperview", 4, 0)}${add_attribute("freemodemomentum", false, 0)}${add_attribute("loopfillgroupwithblank", true, 0)}${add_attribute("loopedslides", 16, 0)} ${{
    delay: 100,
    disableOnInteraction: false,
    pauseOnMouseEnter: false,
    reverseDirection: true
  } ? "autoplay" : ""}${add_attribute("speed", 12e4, 0)} class="${"svelte-lkqt7q"}"><swiper-slide class="${"svelte-lkqt7q"}"><img src="${"./img/poster/aqua.png"}" class="${"release-poster svelte-lkqt7q"}" alt="${""}"></swiper-slide>
    <swiper-slide class="${"svelte-lkqt7q"}"><img src="${"./img/poster/barbarian.png"}" class="${"release-poster svelte-lkqt7q"}" alt="${""}"></swiper-slide>
    <swiper-slide class="${"svelte-lkqt7q"}"><img src="${"./img/poster/avatar.png"}" class="${"release-poster svelte-lkqt7q"}" alt="${""}"></swiper-slide>
    <swiper-slide class="${"svelte-lkqt7q"}"><img src="${"./img/poster/dune.png"}" class="${"release-poster svelte-lkqt7q"}" alt="${""}"></swiper-slide>
    <swiper-slide class="${"svelte-lkqt7q"}"><img src="${"./img/poster/marvel.png"}" class="${"release-poster svelte-lkqt7q"}" alt="${""}"></swiper-slide>
    <swiper-slide class="${"svelte-lkqt7q"}"><img src="${"./img/poster/nope.png"}" class="${"release-poster svelte-lkqt7q"}" alt="${""}"></swiper-slide>
    <swiper-slide class="${"svelte-lkqt7q"}"><img src="${"./img/poster/sw.png"}" class="${"release-poster svelte-lkqt7q"}" alt="${""}"></swiper-slide>
    <swiper-slide class="${"svelte-lkqt7q"}"><img src="${"./img/poster/w.png"}" class="${"release-poster svelte-lkqt7q"}" alt="${""}"></swiper-slide>
    <swiper-slide class="${"svelte-lkqt7q"}"><img src="${"./img/poster/aqua.png"}" class="${"release-poster svelte-lkqt7q"}" alt="${""}"></swiper-slide>
    <swiper-slide class="${"svelte-lkqt7q"}"><img src="${"./img/poster/avatar.png"}" class="${"release-poster svelte-lkqt7q"}" alt="${""}"></swiper-slide>
    <swiper-slide class="${"svelte-lkqt7q"}"><img src="${"./img/poster/barbarian.png"}" class="${"release-poster svelte-lkqt7q"}" alt="${""}"></swiper-slide>
    <swiper-slide class="${"svelte-lkqt7q"}"><img src="${"./img/poster/dune.png"}" class="${"release-poster svelte-lkqt7q"}" alt="${""}"></swiper-slide>
    <swiper-slide class="${"svelte-lkqt7q"}"><img src="${"./img/poster/marvel.png"}" class="${"release-poster svelte-lkqt7q"}" alt="${""}"></swiper-slide>
    <swiper-slide class="${"svelte-lkqt7q"}"><img src="${"./img/poster/nope.png"}" class="${"release-poster svelte-lkqt7q"}" alt="${""}"></swiper-slide>
    <swiper-slide class="${"svelte-lkqt7q"}"><img src="${"./img/poster/sw.png"}" class="${"release-poster svelte-lkqt7q"}" alt="${""}"></swiper-slide>
    <swiper-slide class="${"svelte-lkqt7q"}"><img src="${"./img/poster/w.png"}" class="${"release-poster svelte-lkqt7q"}" alt="${""}"></swiper-slide></swiper-container>
  <div class="${"container"}"><div class="${"btn-container svelte-lkqt7q"}"><a href="${""}" class="${"btn btn-red-fill"}">Discover Channels</a></div></div>
</section>`;
});
const Plans_svelte_svelte_type_style_lang = "";
const css = {
  code: '.svelte-1qxubzv.svelte-1qxubzv{box-sizing:border-box;margin:0;padding:0;text-decoration:none;list-style:none}.section-desc.svelte-1qxubzv.svelte-1qxubzv{text-align:center;margin-bottom:35px}.section-desc.svelte-1qxubzv .h2.svelte-1qxubzv{max-width:800px;margin:0 auto}.section-desc.svelte-1qxubzv .text.svelte-1qxubzv{font-size:17px;color:#707070;max-width:420px;text-align:center;margin:22px auto 0}.plan-wrapper.svelte-1qxubzv.svelte-1qxubzv{display:flex;justify-content:center;gap:25px;border-radius:24px}.plan.svelte-1qxubzv.svelte-1qxubzv{border:1px solid rgba(0, 0, 0, 0.1);display:flex;width:414px;flex-direction:column;align-items:center;padding:14px;padding-top:8xp;border-radius:24px}.plan.svelte-1qxubzv .six.svelte-1qxubzv{background:url("/src/Assets/6.png")}.plan.svelte-1qxubzv .annual.svelte-1qxubzv{background:url("/src/Assets/12.png")}.plan.svelte-1qxubzv header.svelte-1qxubzv{width:100%;height:156px;line-height:156px;text-align:center;color:#fff;border-radius:24px;font-size:32px;font-weight:500}.plan.svelte-1qxubzv header h3.svelte-1qxubzv{font-weight:500}.plan.svelte-1qxubzv h4.svelte-1qxubzv{margin-top:32px;margin-bottom:42px;font-size:24px;font-weight:500}.perks.svelte-1qxubzv li.svelte-1qxubzv{list-style:inside;font-size:18px;font-family:"Rational Display", sans-serif;font-weight:400;color:#323232}.plan.svelte-1qxubzv h3.svelte-1qxubzv{font-size:32px}.plan.svelte-1qxubzv footer.svelte-1qxubzv{width:100%}.plan.svelte-1qxubzv footer a.svelte-1qxubzv{color:#000;font-size:20px;margin-top:46px;border-radius:24px;background-color:#eaeaea;width:100%;text-align:center;height:68px;line-height:68px;transition:0.3s;display:block}.plan.svelte-1qxubzv footer a.svelte-1qxubzv:hover{background-color:#e81d2c;color:white}',
  map: null
};
const Plans = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let plans = [
    {
      duration: "6 Months",
      cost: "20,000 IQD",
      perks: [
        "Over 6000 Live IPTV Channels",
        "4K, HD & SD Channels",
        "Premium HD Sports Channels",
        "TV Guide (EPG)",
        "Free Updates",
        "Available Worldwide",
        "Support All Devices",
        "Movies & Series (VOD)",
        "Fast Delivery",
        "24/7 Customer Support",
        "99.9% Uptime",
        "AntiFreeze Technology"
      ]
    },
    {
      duration: "12 Months",
      cost: "35,000 IQD",
      perks: [
        "Over 6000 Live IPTV Channels",
        "4K, HD & SD Channels",
        "Premium HD Sports Channels",
        "TV Guide (EPG)",
        "Free Updates",
        "Available Worldwide",
        "Support All Devices",
        "Movies & Series (VOD)",
        "Fast Delivery",
        "24/7 Customer Support",
        "99.9% Uptime",
        "AntiFreeze Technology"
      ]
    }
  ];
  $$result.css.add(css);
  return `<section class="${"svelte-1qxubzv"}">
  <div class="${"section-desc svelte-1qxubzv"}"><h2 class="${"h2 svelte-1qxubzv"}">Flexible Plans</h2>
    <p class="${"text svelte-1qxubzv"}">Choose a plan that works best for you</p></div>

  <div class="${"plan-wrapper svelte-1qxubzv"}">${each(plans, (plan, i) => {
    return `<div class="${"plan svelte-1qxubzv"}"><header class="${escape(null_to_empty(i == 0 ? "six" : "annual"), true) + " svelte-1qxubzv"}"><h3 class="${"svelte-1qxubzv"}">${escape(plan.duration)}</h3></header>
        <h4 class="${"svelte-1qxubzv"}">${escape(plan.cost)}</h4>
        <ul class="${"perks svelte-1qxubzv"}">${each(plan.perks, (perk) => {
      return `<li class="${"svelte-1qxubzv"}">${escape(perk)}</li>`;
    })}</ul>
        <footer class="${"plan-btn svelte-1qxubzv"}"><a href="${"/contact-us"}" class="${"svelte-1qxubzv"}">Contact Us</a></footer>
      </div>`;
  })}</div>
</section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
${validate_component(Hero, "Hero").$$render($$result, {}, {}, {})}
${validate_component(Products, "Products").$$render($$result, {}, {}, {})}
${validate_component(Features, "Features").$$render($$result, {}, {}, {})}
${validate_component(Releases, "Releases").$$render($$result, {}, {}, {})}
${validate_component(Plans, "Plans").$$render($$result, {}, {}, {})}
${validate_component(Support, "Support").$$render($$result, {}, {}, {})}
${validate_component(Packages, "Packages").$$render($$result, {}, {}, {})}
${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};

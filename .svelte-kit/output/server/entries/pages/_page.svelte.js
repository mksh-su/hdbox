import { c as create_ssr_component, v as validate_component, d as add_attribute, f as each, e as escape, h as null_to_empty } from "../../chunks/index.js";
import { C as CustomBtn, H as Header, F as Footer } from "../../chunks/Footer.js";
import { F as Features } from "../../chunks/Features.js";
import { register } from "swiper/element/bundle";
import { P as Packages } from "../../chunks/Packages.js";
import { S as Support } from "../../chunks/Support.js";
const Hero_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: '.hero-bg.svelte-tnbare.svelte-tnbare{object-fit:cover;object-position:center;position:absolute;min-height:100%;width:100%}.hero-sect.svelte-tnbare.svelte-tnbare{min-height:860px;height:100vh;position:relative;overflow:hidden;margin:auto}.hero-sect.svelte-tnbare .svelte-tnbare{color:white}.hero-sect.svelte-tnbare a.svelte-tnbare{transition:0.3s}.hero-sect.svelte-tnbare a.svelte-tnbare:hover{color:#e81d2c}.hero-sect.svelte-tnbare .container.svelte-tnbare{display:flex;flex-direction:column;height:100%}.hero-headline.svelte-tnbare.svelte-tnbare{font-weight:900;font-style:italic;font-size:32px;color:white;max-width:530px;margin:18px auto;text-transform:uppercase;text-align:center;font-family:"Sequel100Black-86", sans-serif;line-height:1.1}.hero-desc.svelte-tnbare.svelte-tnbare{color:white;font-size:16px;max-width:420px;margin:18px auto 44px;text-align:center}.hero-bottom.svelte-tnbare.svelte-tnbare{position:relative;margin-top:auto;padding-bottom:50px}.hero-bottom-row.svelte-tnbare.svelte-tnbare{display:flex;justify-content:space-between;align-items:flex-end}.hero-bottom-col.svelte-tnbare.svelte-tnbare{display:flex;flex-direction:column}.hero-bottom-col-name.svelte-tnbare.svelte-tnbare{font-size:16px}.hero-bottom-col.svelte-tnbare.svelte-tnbare:last-of-type{justify-content:flex-end}.hero-bottom-col.svelte-tnbare:last-of-type .hero-bottom-col-name.svelte-tnbare{text-align:right}.hero-bottom-col.svelte-tnbare:last-of-type .hero-bottom-logo-row.svelte-tnbare{gap:26px}.hero-bottom-logo.svelte-tnbare.svelte-tnbare{max-height:53px}.hero-bottom-logo-row.svelte-tnbare.svelte-tnbare{display:flex;align-items:center;gap:48px;margin-top:12px}',
  map: null
};
const Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<section class="${"hero-sect svelte-tnbare"}"><img src="${"./img/hero-bg.jpg"}" class="${"hero-bg svelte-tnbare"}" alt="${""}">
  <div class="${"container svelte-tnbare"}"><div class="${"hero-bottom svelte-tnbare"}"><p class="${"hero-headline svelte-tnbare"}">unlock the world of higher definition</p>
      <p class="${"hero-desc svelte-tnbare"}">The new HDBOX satellite receiver will provide you with the best TV watching experience that will transform your
        living room into a movie theatre.
        <a href="${""}" class="${"svelte-tnbare"}">Check Our Products</a></p>
      <div class="${"hero-bottom-row svelte-tnbare"}"><div class="${"hero-bottom-col svelte-tnbare"}"><span class="${"hero-bottom-col-name svelte-tnbare"}">The new HDBOX satellite</span>
          <div class="${"hero-bottom-logo-row svelte-tnbare"}"><img src="${"./img/icons/forevertv-white.svg"}" class="${"hero-bottom-logo svelte-tnbare"}" alt="${""}">
            <img src="${"./img/icons/youtube-white.svg"}" class="${"hero-bottom-logo svelte-tnbare"}" alt="${""}"></div></div>
        <div class="${"hero-bottom-col svelte-tnbare"}"><span class="${"hero-bottom-col-name svelte-tnbare"}">The new HDBOX satellite</span>
          <div class="${"hero-bottom-logo-row svelte-tnbare"}"><img src="${"./img/icons/full-hd.svg"}" class="${"hero-bottom-logo svelte-tnbare"}" alt="${""}">
            <img src="${"./img/icons/channels-white.png"}" class="${"hero-bottom-logo svelte-tnbare"}" alt="${""}"></div></div></div></div></div>
</section>`;
});
const Products_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: '.product-sect.svelte-1vz4egt.svelte-1vz4egt{margin:110px 0 130px}.product-item.svelte-1vz4egt.svelte-1vz4egt{background:rgba(233, 233, 233, 0.3);border-radius:12px;text-align:center;flex-grow:1;flex-basis:50%;padding:40px}.product-item-headline.svelte-1vz4egt.svelte-1vz4egt{font-size:24px;font-weight:500;margin:18px auto;max-width:260px}.product-item-img.svelte-1vz4egt.svelte-1vz4egt{height:320px;display:flex;align-items:center;justify-content:center;margin:0 0 60px}.product-item-img.svelte-1vz4egt img.svelte-1vz4egt{max-height:100%}.product-row.svelte-1vz4egt.svelte-1vz4egt{display:flex;gap:16px}.app-row.svelte-1vz4egt.svelte-1vz4egt{display:flex;align-items:center;border:1px solid #d9d9d9;border-radius:12px;margin-top:16px}.app-col.svelte-1vz4egt.svelte-1vz4egt{display:flex;flex-direction:column;align-items:flex-start;flex-basis:50%}.app-col.svelte-1vz4egt .text.svelte-1vz4egt{margin:18px 0;font-weight:500;font-family:"Rational Display", sans-serif}.app-col.svelte-1vz4egt.svelte-1vz4egt:last-of-type{padding-right:120px}.app-link.svelte-1vz4egt.svelte-1vz4egt{text-decoration:none;transition:0.3s}.app-link.svelte-1vz4egt.svelte-1vz4egt:hover{opacity:0.8}.app-link-row.svelte-1vz4egt.svelte-1vz4egt{display:flex;gap:16px;margin-top:20px}',
  map: null
};
const Products = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<section class="${"product-sect svelte-1vz4egt"}"><div class="${"container"}"><div class="${"section-desc"}"><h2 class="${"h2"}">A small box filled with new experiences.</h2>
      <p class="${"text"}">Mediastar devices use high quality display resolutions to provide users with a luxurious experience.
      </p></div>
    <div class="${"product-row svelte-1vz4egt"}"><div class="${"product-item svelte-1vz4egt"}"><div class="${"product-item-img svelte-1vz4egt"}"><img src="${"./img/product/m1.svg"}" alt="${""}" class="${"svelte-1vz4egt"}"></div>
        <div class="${"product-item-name"}"><img src="${"./img/product/m1-sign.svg"}" alt="${""}"></div>
        <p class="${"product-item-headline svelte-1vz4egt"}">Say hello to your new streming device</p>
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
      <div class="${"product-item svelte-1vz4egt"}"><div class="${"product-item-img svelte-1vz4egt"}"><img src="${"./img/product/x1.svg"}" alt="${""}" class="${"svelte-1vz4egt"}"></div>
        <div class="${"product-item-name"}"><img src="${"./img/product/x1-sign.svg"}" alt="${""}"></div>
        <p class="${"product-item-headline svelte-1vz4egt"}">A small box for best experience</p>
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
    <div class="${"app-row svelte-1vz4egt"}"><div class="${"app-col svelte-1vz4egt"}"><img src="${"./img/product/app-screen.png"}" class="${"app-col-img"}" alt="${""}"></div>
      <div class="${"app-col svelte-1vz4egt"}"><img src="${"./img/product/app-logo.svg"}" alt="${""}">
        <p class="${"text svelte-1vz4egt"}">Using the XBOX app, you can easily renew and manage your subscriptions, and packages, register your device,
          and check your balance.
        </p>
        <div class="${"app-link-row svelte-1vz4egt"}"><a href="${""}" class="${"app-link svelte-1vz4egt"}"><img src="${"./img/icons/app-store.svg"}" alt="${""}"></a>
          <a href="${""}" class="${"app-link svelte-1vz4egt"}"><img src="${"./img/icons/google-play.svg"}" alt="${""}"></a></div></div></div></div>
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

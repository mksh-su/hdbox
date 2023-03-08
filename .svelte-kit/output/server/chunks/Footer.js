import { c as create_ssr_component, e as escape, v as validate_component, h as null_to_empty, d as add_attribute, f as each } from "./index.js";
const Logo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { type = "lg-bck" } = $$props;
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  return `<div class="${"wrapper"}">${type == "lg-black" ? `<img src="${"./img/logo-black.svg"}" alt="${""}">` : `${type == "lg-white" ? `<img src="${"./img/logo.svg"}" alt="${""}">` : ``}`}</div>`;
});
const Header_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: '.logo.svelte-u4qiif.svelte-u4qiif{max-height:24px}.header.svelte-u4qiif.svelte-u4qiif{position:absolute;width:100%;z-index:999;top:40px}.header.svelte-u4qiif .container.svelte-u4qiif{display:flex;align-items:center}.header-nav.svelte-u4qiif.svelte-u4qiif{margin-left:auto;margin-right:24px;padding-right:24px;border-right:1px solid rgba(255, 255, 255, 0.14)}.header-nav-list.svelte-u4qiif.svelte-u4qiif{display:flex;padding:0;margin:0;list-style:none;display:flex}.header-nav-link.svelte-u4qiif.svelte-u4qiif{margin-left:34px}.header-nav-link.svelte-u4qiif a.svelte-u4qiif{color:white;text-decoration:none;font-size:14px}.header.static.svelte-u4qiif.svelte-u4qiif{position:static;padding:14px 0;margin-bottom:24px;border-bottom:1px solid #DCDCD2}.select.svelte-u4qiif.svelte-u4qiif{position:relative;padding:12px 34px 12px 16px;border:1px solid rgba(255, 255, 255, 0.14);border-radius:6px;min-width:108px}.select.svelte-u4qiif .select-btn.svelte-u4qiif{box-sizing:border-box;border-radius:3px;width:100%;cursor:pointer;position:relative;user-select:none;color:white;font-size:13px;font-family:"Rational Display", sans-serif;font-weight:300}.select.svelte-u4qiif .select-btn.svelte-u4qiif:after{content:"";position:absolute;top:40%;right:-15px;width:6px;height:6px;transform:translateY(-50%) rotate(45deg);border-right:1px solid white;border-bottom:1px solid white;transition:0.3s}.select.svelte-u4qiif .select-dropdown.svelte-u4qiif{position:absolute;top:100%;min-width:110px;right:0;border-radius:0 0 3px 3px;overflow:hidden;border-top:1px solid #eee;z-index:1;background:#fff;transform:scale(1, 0);transform-origin:top center;visibility:hidden;transition:0.3s;box-shadow:0px 0px 16px rgba(0, 0, 0, 0.08);border-radius:8px}.select.svelte-u4qiif .select-dropdown .select-option.svelte-u4qiif{padding:10px;box-sizing:border-box;cursor:pointer;color:white;position:relative}.select.svelte-u4qiif .select-dropdown .select-option.svelte-u4qiif:hover{background:#f8f8f8}',
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { position = "" } = $$props;
  if ($$props.position === void 0 && $$bindings.position && position !== void 0)
    $$bindings.position(position);
  $$result.css.add(css$2);
  return `<header class="${"header " + escape(position, true) + " svelte-u4qiif"}"><div class="${"container svelte-u4qiif"}"><a href="${"./"}" class="${"logo svelte-u4qiif"}">${position == "static" ? `${validate_component(Logo, "Logo").$$render($$result, { type: "lg-black" }, {}, {})}` : `${validate_component(Logo, "Logo").$$render($$result, { type: "lg-white" }, {}, {})}`}
      </a>
    <nav class="${"header-nav svelte-u4qiif"}"><ul class="${"header-nav-list svelte-u4qiif"}"><li class="${"header-nav-link svelte-u4qiif"}"><a href="${""}" class="${"svelte-u4qiif"}">Product</a></li>
        <li class="${"header-nav-link svelte-u4qiif"}"><a href="${""}" class="${"svelte-u4qiif"}">Broadcasting</a></li>
        <li class="${"header-nav-link svelte-u4qiif"}"><a href="${""}" class="${"svelte-u4qiif"}">Channels &amp; Packages</a></li>
        <li class="${"header-nav-link svelte-u4qiif"}"><a href="${""}" class="${"svelte-u4qiif"}">Reseller</a></li>
        <li class="${"header-nav-link svelte-u4qiif"}"><a href="${""}" class="${"svelte-u4qiif"}">About us</a></li>
        <li class="${"header-nav-link svelte-u4qiif"}"><a href="${""}" class="${"svelte-u4qiif"}">Contact</a></li></ul></nav>
    <div class="${"header-select"}"><div class="${"select svelte-u4qiif"}"><div class="${"select-btn svelte-u4qiif"}" data-type="${"English"}">English</div>
        <div class="${"select-dropdown svelte-u4qiif"}"><div class="${"select-option svelte-u4qiif"}" data-type="${"English"}">English</div>
          <div class="${"select-option svelte-u4qiif"}" data-type="${"Kurdish"}">Kurdish</div></div></div></div></div>
</header>`;
});
const TRArrow = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg width="${"13"}" height="${"14"}" viewBox="${"0 0 13 14"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M9.87141 3.24089L2.8291 10.2832"}" stroke="${"black"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path><path d="${"M4.20154 3.2533L9.87014 3.2411L9.8584 8.91016"}" stroke="${"black"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg>`;
});
const CustomBtn_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".btn-link.svelte-piwbva a.svelte-piwbva{text-decoration:underline;margin-inline-end:4px;color:#000;transition:0.3s}.btn-link.svelte-piwbva a.svelte-piwbva:hover{color:#e81d2c}.btn-link.svelte-piwbva .lg.svelte-piwbva{font-size:18px}.btn-link.svelte-piwbva .sm.svelte-piwbva{font-size:16px}.btn-link.svelte-piwbva .xs.svelte-piwbva{font-size:14px;margin-inline-end:8px}",
  map: null
};
const CustomBtn = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { text = "" } = $$props;
  let { link = "" } = $$props;
  let { font_size = "lg" } = $$props;
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.link === void 0 && $$bindings.link && link !== void 0)
    $$bindings.link(link);
  if ($$props.font_size === void 0 && $$bindings.font_size && font_size !== void 0)
    $$bindings.font_size(font_size);
  $$result.css.add(css$1);
  return `<div class="${"btn-link svelte-piwbva"}"><a class="${escape(null_to_empty(font_size), true) + " svelte-piwbva"}"${add_attribute("href", link, 0)}>${escape(text)}</a>
  ${validate_component(TRArrow, "TrArrow").$$render($$result, {}, {}, {})}
</div>`;
});
const Footer_svelte_svelte_type_style_lang = "";
const css = {
  code: '.footer.svelte-s0wh8n.svelte-s0wh8n{padding:60px 0 40px}.footer.svelte-s0wh8n .first.svelte-s0wh8n{display:flex;justify-content:space-between;margin-bottom:20px}.footer.svelte-s0wh8n .first .text.svelte-s0wh8n{font-family:"Rational Display", sans-serif}.footer.svelte-s0wh8n .nav.svelte-s0wh8n{display:flex;gap:40px;margin-bottom:10px;margin-left:auto;margin-right:auto}.footer.svelte-s0wh8n .nav .h5.svelte-s0wh8n{font-size:18px;font-weight:500;margin:0 0 10px;font-family:"Rational Display", sans-serif}.footer.svelte-s0wh8n .links.svelte-s0wh8n,.footer.svelte-s0wh8n .socials.svelte-s0wh8n{display:flex;flex-direction:column;gap:8px}.copyright.svelte-s0wh8n p.svelte-s0wh8n{margin:0;font-size:14px}.last.svelte-s0wh8n.svelte-s0wh8n{border:1px solid rgba(0, 0, 0, 0.1);font-size:14px;padding:16px;display:flex;justify-content:space-between;border-radius:6px}.last.svelte-s0wh8n p.svelte-s0wh8n{margin:0;font-size:14px;font-family:"Rational Display", sans-serif}.last.svelte-s0wh8n .by.svelte-s0wh8n{display:flex}',
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let links = [
    { name: "Product", link: "/#" },
    { name: "Broadcast", link: "/#2" },
    { name: "Channels & Packages", link: "/#3" },
    { name: "Reseller", link: "/#4" },
    { name: "How to use", link: "/#5" },
    { name: "About us", link: "/#6" },
    { name: "Contact", link: "/#7" }
  ];
  let socials = [
    { name: "Instagram", link: "/#" },
    { name: "Facebook", link: "/#2" },
    { name: "Telegram", link: "/#3" },
    { name: "YouTube", link: "/#4" }
  ];
  $$result.css.add(css);
  return `<footer class="${"footer svelte-s0wh8n"}"><div class="${"container"}"><div class="${"first svelte-s0wh8n"}"><div class="${"content"}">${validate_component(Logo, "Logo").$$render($$result, { type: "lg-black" }, {}, {})}
        
        <p class="${"text svelte-s0wh8n"}">There&#39;s nothing better than watching live TV, movies,
          <br>
          or sports. With over 280 channels and packages to
          <br>
          choose from, the HDBOX has something for
          <br>
          everyone
        </p></div>
      <div class="${"nav svelte-s0wh8n"}"><div class="${"links svelte-s0wh8n"}"><h5 class="${"h5 svelte-s0wh8n"}">Navigation</h5>
          ${each(links, (item) => {
    return `${validate_component(CustomBtn, "CustomBtn").$$render(
      $$result,
      {
        text: item.name,
        link: item.link,
        font_size: "sm"
      },
      {},
      {}
    )}`;
  })}</div>
        <div class="${"socials svelte-s0wh8n"}"><h5 class="${"h5 svelte-s0wh8n"}">Social</h5>
          ${each(socials, (item) => {
    return `${validate_component(CustomBtn, "CustomBtn").$$render(
      $$result,
      {
        text: item.name,
        link: item.link,
        font_size: "sm"
      },
      {},
      {}
    )}`;
  })}</div></div></div>
    <div class="${"last svelte-s0wh8n"}"><div class="${"copyright svelte-s0wh8n"}"><p class="${"svelte-s0wh8n"}">Copyright © 2010-2022 HDBOX. All rights reserved.</p></div>
      <div class="${"by svelte-s0wh8n"}"><p class="${"svelte-s0wh8n"}">Branding &amp; Website by : </p>
        ${validate_component(CustomBtn, "CustomBtn").$$render(
    $$result,
    {
      text: "whitespace",
      link: "https://whitespace.krd/",
      font_size: "xs"
    },
    {},
    {}
  )}</div></div></div>
</footer>`;
});
export {
  CustomBtn as C,
  Footer as F,
  Header as H
};

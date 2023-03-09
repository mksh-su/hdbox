import { c as create_ssr_component, e as escape, v as validate_component, h as null_to_empty, d as add_attribute, f as each } from "./index.js";
const Logo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { type = "lg-bck" } = $$props;
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  return `<div class="${"wrapper"}">${type == "lg-black" ? `<img src="${"./img/logo-black.svg"}" alt="${""}">` : `${type == "lg-white" ? `<img src="${"./img/logo.svg"}" alt="${""}">` : ``}`}</div>`;
});
const Header_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: '.logo.svelte-1k2r0c6.svelte-1k2r0c6{max-height:24px}.header.svelte-1k2r0c6.svelte-1k2r0c6{position:absolute;width:100%;z-index:999;top:40px}.header.svelte-1k2r0c6 .container.svelte-1k2r0c6{display:flex;align-items:center}.header-nav.svelte-1k2r0c6.svelte-1k2r0c6{margin-left:auto;margin-right:24px;padding-right:24px;border-right:1px solid rgba(255, 255, 255, 0.14)}.header-nav-list.svelte-1k2r0c6.svelte-1k2r0c6{display:flex;padding:0;margin:0;list-style:none;display:flex}.header-nav-link.svelte-1k2r0c6.svelte-1k2r0c6{margin-left:34px}.header-nav-link.svelte-1k2r0c6 a.svelte-1k2r0c6{color:white;text-decoration:none;font-size:14px;font-family:"Rational Display", sans-serif}.header.static.svelte-1k2r0c6.svelte-1k2r0c6{position:static;padding:14px 0;margin-bottom:24px;border-bottom:1px solid #dcdcd2}.header.static.svelte-1k2r0c6 a.svelte-1k2r0c6{color:#0f0f0f}.header.static.svelte-1k2r0c6 .header-nav.svelte-1k2r0c6{border-right:1px solid #dbdbdb}.header.static.svelte-1k2r0c6 .select.svelte-1k2r0c6{border:1px solid #dbdbdb}.header.static.svelte-1k2r0c6 .select-btn.svelte-1k2r0c6{color:#0f0f0f}.header.static.svelte-1k2r0c6 .select-btn.svelte-1k2r0c6:after{border-right:1px solid #DBDBDB;border-bottom:1px solid #DBDBDB}.select.svelte-1k2r0c6.svelte-1k2r0c6{position:relative;padding:12px 34px 12px 16px;border:1px solid rgba(255, 255, 255, 0.14);border-radius:6px;min-width:108px}.select.svelte-1k2r0c6 .select-btn.svelte-1k2r0c6{box-sizing:border-box;border-radius:3px;width:100%;cursor:pointer;position:relative;user-select:none;color:white;font-size:13px;font-family:"Rational Display", sans-serif;font-weight:300}.select.svelte-1k2r0c6 .select-btn.svelte-1k2r0c6:after{content:"";position:absolute;top:40%;right:-15px;width:6px;height:6px;transform:translateY(-50%) rotate(45deg);border-right:1px solid white;border-bottom:1px solid white;transition:0.3s}.select.svelte-1k2r0c6 .select-dropdown.svelte-1k2r0c6{position:absolute;top:100%;min-width:110px;right:0;border-radius:0 0 3px 3px;overflow:hidden;border-top:1px solid #eee;z-index:1;background:#fff;transform:scale(1, 0);transform-origin:top center;visibility:hidden;transition:0.3s;box-shadow:0px 0px 16px rgba(0, 0, 0, 0.08);border-radius:8px}.select.svelte-1k2r0c6 .select-dropdown .select-option.svelte-1k2r0c6{padding:10px;box-sizing:border-box;cursor:pointer;color:white;position:relative}.select.svelte-1k2r0c6 .select-dropdown .select-option.svelte-1k2r0c6:hover{background:#f8f8f8}',
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { position = "" } = $$props;
  if ($$props.position === void 0 && $$bindings.position && position !== void 0)
    $$bindings.position(position);
  $$result.css.add(css$2);
  return `<header class="${"header " + escape(position, true) + " svelte-1k2r0c6"}"><div class="${"container svelte-1k2r0c6"}"><a href="${"./"}" class="${"logo svelte-1k2r0c6"}">${position == "static" ? `${validate_component(Logo, "Logo").$$render($$result, { type: "lg-black" }, {}, {})}` : `${validate_component(Logo, "Logo").$$render($$result, { type: "lg-white" }, {}, {})}`}
      </a>
    <nav class="${"header-nav svelte-1k2r0c6"}"><ul class="${"header-nav-list svelte-1k2r0c6"}"><li class="${"header-nav-link svelte-1k2r0c6"}"><a href="${""}" class="${"svelte-1k2r0c6"}">Product</a></li>
        <li class="${"header-nav-link svelte-1k2r0c6"}"><a href="${""}" class="${"svelte-1k2r0c6"}">Broadcasting</a></li>
        <li class="${"header-nav-link svelte-1k2r0c6"}"><a href="${""}" class="${"svelte-1k2r0c6"}">Channels &amp; Packages</a></li>
        <li class="${"header-nav-link svelte-1k2r0c6"}"><a href="${""}" class="${"svelte-1k2r0c6"}">Reseller</a></li>
        <li class="${"header-nav-link svelte-1k2r0c6"}"><a href="${""}" class="${"svelte-1k2r0c6"}">About us</a></li>
        <li class="${"header-nav-link svelte-1k2r0c6"}"><a href="${""}" class="${"svelte-1k2r0c6"}">Contact</a></li></ul></nav>
    <div class="${"header-select"}"><div class="${"select svelte-1k2r0c6"}"><div class="${"select-btn svelte-1k2r0c6"}" data-type="${"English"}">English</div>
        <div class="${"select-dropdown svelte-1k2r0c6"}"><div class="${"select-option svelte-1k2r0c6"}" data-type="${"English"}">English</div>
          <div class="${"select-option svelte-1k2r0c6"}" data-type="${"Kurdish"}">Kurdish</div></div></div></div></div>
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
  code: '.footer.svelte-gqvenz.svelte-gqvenz{padding:60px 0 40px;border-top:1px solid #DBDBDB}.footer.svelte-gqvenz .first.svelte-gqvenz{display:flex;justify-content:space-between;margin-bottom:20px}.footer.svelte-gqvenz .first .text.svelte-gqvenz{font-family:"Rational Display", sans-serif}.footer.svelte-gqvenz .nav.svelte-gqvenz{display:flex;gap:40px;margin-bottom:10px;margin-left:auto;margin-right:auto}.footer.svelte-gqvenz .nav .h5.svelte-gqvenz{font-size:18px;font-weight:500;margin:0 0 10px;font-family:"Rational Display", sans-serif}.footer.svelte-gqvenz .links.svelte-gqvenz,.footer.svelte-gqvenz .socials.svelte-gqvenz{display:flex;flex-direction:column;gap:8px}.copyright.svelte-gqvenz p.svelte-gqvenz{margin:0;font-size:14px}.last.svelte-gqvenz.svelte-gqvenz{border:1px solid rgba(0, 0, 0, 0.1);font-size:14px;padding:16px;display:flex;justify-content:space-between;border-radius:6px}.last.svelte-gqvenz p.svelte-gqvenz{margin:0;font-size:14px;font-family:"Rational Display", sans-serif}.last.svelte-gqvenz .by.svelte-gqvenz{display:flex}',
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
  return `<footer class="${"footer svelte-gqvenz"}"><div class="${"container"}"><div class="${"first svelte-gqvenz"}"><div class="${"content"}">${validate_component(Logo, "Logo").$$render($$result, { type: "lg-black" }, {}, {})}
        
        <p class="${"text svelte-gqvenz"}">There&#39;s nothing better than watching live TV, movies,
          <br>
          or sports. With over 280 channels and packages to
          <br>
          choose from, the HDBOX has something for
          <br>
          everyone
        </p></div>
      <div class="${"nav svelte-gqvenz"}"><div class="${"links svelte-gqvenz"}"><h5 class="${"h5 svelte-gqvenz"}">Navigation</h5>
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
        <div class="${"socials svelte-gqvenz"}"><h5 class="${"h5 svelte-gqvenz"}">Social</h5>
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
    <div class="${"last svelte-gqvenz"}"><div class="${"copyright svelte-gqvenz"}"><p class="${"svelte-gqvenz"}">Copyright © 2010-2022 HDBOX. All rights reserved.</p></div>
      <div class="${"by svelte-gqvenz"}"><p class="${"svelte-gqvenz"}">Branding &amp; Website by : </p>
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

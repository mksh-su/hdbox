import { c as create_ssr_component, e as escape, v as validate_component, h as null_to_empty, d as add_attribute, f as each } from "./index.js";
const Logo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { type = "lg-bck" } = $$props;
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  return `<div class="${"wrapper"}">${type == "lg-black" ? `<img src="${"./img/logo-black.svg"}" alt="${""}">` : `${type == "lg-white" ? `<img src="${"./img/logo.svg"}" alt="${""}">` : ``}`}</div>`;
});
const Header_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: '.logo.svelte-1xv9u0u.svelte-1xv9u0u{max-height:24px}.header.svelte-1xv9u0u.svelte-1xv9u0u{position:absolute;width:100%;z-index:999;top:40px}.header.svelte-1xv9u0u .container.svelte-1xv9u0u{display:flex;align-items:center}.header-nav.svelte-1xv9u0u.svelte-1xv9u0u{margin-left:auto;margin-right:24px;padding-right:24px;border-right:1px solid rgba(255, 255, 255, 0.14)}.header-nav-list.svelte-1xv9u0u.svelte-1xv9u0u{display:flex;padding:0;margin:0;list-style:none;display:flex}.header-nav-link.svelte-1xv9u0u.svelte-1xv9u0u{margin-left:34px}.header-nav-link.svelte-1xv9u0u a.svelte-1xv9u0u{color:white;text-decoration:none;font-size:14px;font-family:"Rational Display", sans-serif;transition:0.3s}.header-nav-link.svelte-1xv9u0u a.svelte-1xv9u0u:hover{color:#e6e6e6}.header.static.svelte-1xv9u0u.svelte-1xv9u0u{position:static;padding:14px 0;margin-bottom:24px;border-bottom:1px solid #dcdcd2}.header.static.svelte-1xv9u0u a.svelte-1xv9u0u{color:#0f0f0f}.header.static.svelte-1xv9u0u a.svelte-1xv9u0u:hover{color:#5c5c5c}.header.static.svelte-1xv9u0u .header-nav.svelte-1xv9u0u{border-right:1px solid #dbdbdb}.header.static.svelte-1xv9u0u .select.svelte-1xv9u0u{border:1px solid #dbdbdb}.header.static.svelte-1xv9u0u .select-btn.svelte-1xv9u0u{color:#0f0f0f}.header.static.svelte-1xv9u0u .select-btn.svelte-1xv9u0u:after{border-right:1px solid #dbdbdb;border-bottom:1px solid #dbdbdb}.select.svelte-1xv9u0u.svelte-1xv9u0u{position:relative;padding:12px 34px 12px 16px;border:1px solid rgba(255, 255, 255, 0.14);border-radius:6px;min-width:108px;cursor:pointer}.select.svelte-1xv9u0u .select-btn.svelte-1xv9u0u{box-sizing:border-box;border-radius:3px;width:100%;position:relative;user-select:none;color:white;font-size:13px;font-family:"Rational Display", sans-serif;font-weight:300}.select.svelte-1xv9u0u .select-btn.svelte-1xv9u0u:after{content:"";position:absolute;top:40%;right:-15px;width:6px;height:6px;transform:translateY(-50%) rotate(45deg);border-right:1px solid white;border-bottom:1px solid white;transition:0.3s}.select.svelte-1xv9u0u .select-dropdown.svelte-1xv9u0u{position:absolute;top:100%;min-width:110px;right:0;border-radius:0 0 3px 3px;overflow:hidden;border-top:1px solid #eee;z-index:1;background:#fff;transform:scale(1, 0);transform-origin:top center;visibility:hidden;transition:0.3s;box-shadow:0px 0px 16px rgba(0, 0, 0, 0.08);border-radius:8px}.select.svelte-1xv9u0u .select-dropdown .select-option.svelte-1xv9u0u{padding:10px;box-sizing:border-box;cursor:pointer;color:white;position:relative}.select.svelte-1xv9u0u .select-dropdown .select-option.svelte-1xv9u0u:hover{background:#f8f8f8}',
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { position = "" } = $$props;
  if ($$props.position === void 0 && $$bindings.position && position !== void 0)
    $$bindings.position(position);
  $$result.css.add(css$2);
  return `<header class="${"header " + escape(position, true) + " svelte-1xv9u0u"}"><div class="${"container svelte-1xv9u0u"}"><a href="${"./"}" class="${"logo svelte-1xv9u0u"}">${position == "static" ? `${validate_component(Logo, "Logo").$$render($$result, { type: "lg-black" }, {}, {})}` : `${validate_component(Logo, "Logo").$$render($$result, { type: "lg-white" }, {}, {})}`}
      </a>
    <nav class="${"header-nav svelte-1xv9u0u"}"><ul class="${"header-nav-list svelte-1xv9u0u"}"><li class="${"header-nav-link svelte-1xv9u0u"}"><a href="${""}" class="${"svelte-1xv9u0u"}">Product</a></li>
        <li class="${"header-nav-link svelte-1xv9u0u"}"><a href="${""}" class="${"svelte-1xv9u0u"}">Broadcasting</a></li>
        <li class="${"header-nav-link svelte-1xv9u0u"}"><a href="${""}" class="${"svelte-1xv9u0u"}">Channels &amp; Packages</a></li>
        <li class="${"header-nav-link svelte-1xv9u0u"}"><a href="${""}" class="${"svelte-1xv9u0u"}">Reseller</a></li>
        <li class="${"header-nav-link svelte-1xv9u0u"}"><a href="${""}" class="${"svelte-1xv9u0u"}">About us</a></li>
        <li class="${"header-nav-link svelte-1xv9u0u"}"><a href="${""}" class="${"svelte-1xv9u0u"}">Contact</a></li></ul></nav>
    <div class="${"header-select"}"><div class="${"select svelte-1xv9u0u"}"><div class="${"select-btn svelte-1xv9u0u"}" data-type="${"English"}">English</div>
        <div class="${"select-dropdown svelte-1xv9u0u"}"><div class="${"select-option svelte-1xv9u0u"}" data-type="${"English"}">English</div>
          <div class="${"select-option svelte-1xv9u0u"}" data-type="${"Kurdish"}">Kurdish</div></div></div></div></div>
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
  code: '.footer.svelte-1po1fpu.svelte-1po1fpu{padding:60px 0 40px;margin-top:80px;border-top:1px solid #DBDBDB}.footer.svelte-1po1fpu .first.svelte-1po1fpu{display:flex;justify-content:space-between;margin-bottom:20px}.footer.svelte-1po1fpu .first .text.svelte-1po1fpu{font-family:"Rational Display", sans-serif}.footer.svelte-1po1fpu .nav.svelte-1po1fpu{display:flex;gap:40px;margin-bottom:10px;margin-left:auto;margin-right:auto}.footer.svelte-1po1fpu .nav .h5.svelte-1po1fpu{font-size:18px;font-weight:500;margin:0 0 10px;font-family:"Rational Display", sans-serif}.footer.svelte-1po1fpu .links.svelte-1po1fpu,.footer.svelte-1po1fpu .socials.svelte-1po1fpu{display:flex;flex-direction:column;gap:8px}.copyright.svelte-1po1fpu p.svelte-1po1fpu{margin:0;font-size:14px}.last.svelte-1po1fpu.svelte-1po1fpu{border:1px solid rgba(0, 0, 0, 0.1);font-size:14px;padding:16px;display:flex;justify-content:space-between;border-radius:6px}.last.svelte-1po1fpu p.svelte-1po1fpu{margin:0;font-size:14px;font-family:"Rational Display", sans-serif}.last.svelte-1po1fpu .by.svelte-1po1fpu{display:flex}',
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
  return `<footer class="${"footer svelte-1po1fpu"}"><div class="${"container"}"><div class="${"first svelte-1po1fpu"}"><div class="${"content"}">${validate_component(Logo, "Logo").$$render($$result, { type: "lg-black" }, {}, {})}
        
        <p class="${"text svelte-1po1fpu"}">There&#39;s nothing better than watching live TV, movies,
          <br>
          or sports. With over 280 channels and packages to
          <br>
          choose from, the HDBOX has something for
          <br>
          everyone
        </p></div>
      <div class="${"nav svelte-1po1fpu"}"><div class="${"links svelte-1po1fpu"}"><h5 class="${"h5 svelte-1po1fpu"}">Navigation</h5>
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
        <div class="${"socials svelte-1po1fpu"}"><h5 class="${"h5 svelte-1po1fpu"}">Social</h5>
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
    <div class="${"last svelte-1po1fpu"}"><div class="${"copyright svelte-1po1fpu"}"><p class="${"svelte-1po1fpu"}">Copyright © 2010-2022 HDBOX. All rights reserved.</p></div>
      <div class="${"by svelte-1po1fpu"}"><p class="${"svelte-1po1fpu"}">Branding &amp; Website by : </p>
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

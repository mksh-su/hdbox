import { c as create_ssr_component, f as each, d as add_attribute, e as escape, v as validate_component } from "../../../chunks/index.js";
import { H as Header, F as Footer } from "../../../chunks/Footer.js";
const HelpIntro_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: '.intro-sect.svelte-e18g8k.svelte-e18g8k{margin-bottom:50px;display:flex;align-items:center;border:1px solid rgba(0, 0, 0, 0.1);border-radius:12px;padding:13px 120px 13px 98px}.intro-sect.svelte-e18g8k .content h6.svelte-e18g8k{font-size:16px;color:#707070;font-family:"TT Commons", sans-serif;margin-bottom:0}.intro-sect.svelte-e18g8k .content p.svelte-e18g8k{font-size:18px;margin:0;padding-top:12px;font-weight:500;font-family:"Rational Display", sans-serif}.intro-sect.svelte-e18g8k .content .intro-link.svelte-e18g8k{color:#0066cc;font-size:18px;font-weight:500;font-family:"Rational Display", sans-serif;transition:0.3s}.intro-sect.svelte-e18g8k .content .intro-link.svelte-e18g8k:hover{color:#e81d2c}.intro-sect.svelte-e18g8k .form-search.svelte-e18g8k{margin-top:32px;position:relative;max-width:280px}.intro-sect.svelte-e18g8k .form-search-input.svelte-e18g8k{padding:10px 18px;border:1px solid #DBDBDB;border-radius:12px;width:100%}.intro-sect.svelte-e18g8k .form-search-btn.svelte-e18g8k{font-size:0;padding:0;width:14px;height:14px;display:inline-block;position:absolute;right:16px;top:50%;transform:translateY(-50%);background-color:transparent;background-image:url(../../img/help/search.svg);background-size:contain;background-repeat:no-repeat;background-position:center;border:0}.intro-sect.svelte-e18g8k .h6.svelte-e18g8k{margin-top:0;font-weight:400}.intro-sect.svelte-e18g8k .img.svelte-e18g8k{margin-left:auto}.intro-sect.svelte-e18g8k .img img.svelte-e18g8k{min-height:300px;max-width:unset}.intro-sect.svelte-e18g8k .text.svelte-e18g8k{max-width:340px}',
  map: null
};
const HelpIntro = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="${"container"}"><section class="${"intro-sect wrapper svelte-e18g8k"}"><div class="${"content"}"><h6 class="${"h6 svelte-e18g8k"}">Help Center</h6>
      <p class="${"text svelte-e18g8k"}">If you need help with anything HDBOX related, refer to the videos below. Still can’t find what you’re looking
        for?
      </p>
      <a href="${"/"}" class="${"intro-link svelte-e18g8k"}">Contact Us</a>
      <form action="${""}" class="${"form-search svelte-e18g8k"}"><input type="${"text"}" placeholder="${"Search"}" class="${"form-search-input svelte-e18g8k"}">
        <input type="${"submit"}" class="${"form-search-btn svelte-e18g8k"}" value="${"Search"}"></form></div>
    <div class="${"img svelte-e18g8k"}"><img src="${"./img/help/help-intro.svg"}" alt="${""}" class="${"svelte-e18g8k"}"></div></section>
</div>`;
});
const Help_svelte_svelte_type_style_lang = "";
const css = {
  code: '.help-sect.svelte-1gw3vkk.svelte-1gw3vkk{margin-bottom:100px}.help-sect.svelte-1gw3vkk .h3.svelte-1gw3vkk{font-weight:500;font-size:24px}.help-grid.svelte-1gw3vkk.svelte-1gw3vkk{display:grid;grid-template-columns:repeat(4, 1fr);gap:16px;margin-bottom:130px}.help-item.svelte-1gw3vkk.svelte-1gw3vkk{display:flex;flex-direction:column}.help-item-img.svelte-1gw3vkk.svelte-1gw3vkk{border-radius:12px 12px 0px 0px;position:relative;overflow:hidden;min-height:160px}.help-item-img.svelte-1gw3vkk img.svelte-1gw3vkk{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);min-height:100%}.help-item-name.svelte-1gw3vkk.svelte-1gw3vkk{font-size:16px;font-family:"Rational Display", sans-serif;font-weight:500;margin:0;padding-bottom:30px;position:relative;text-decoration:none;color:#484848}.help-item-bottom.svelte-1gw3vkk.svelte-1gw3vkk{border:1px solid #dbdbdb;border-radius:0 0 12px 12px;padding:24px 22px 22px;flex-grow:1;display:flex;flex-direction:column;align-items:baseline}.help-item-link.svelte-1gw3vkk.svelte-1gw3vkk{margin-top:auto;font-weight:400;color:#1B1717;text-decoration:none;position:relative;padding-right:12px;font-size:12px}.help-item-link.svelte-1gw3vkk.svelte-1gw3vkk:after{content:"";position:absolute;display:inline-block;right:0;top:50%;transform:translateY(-50%);height:7px;width:4px;background-image:url(../../img/help/arrow-right.svg);background-repeat:no-repeat;background-size:contain;background-position:center}',
  map: null
};
const Help = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let help = [
    {
      name: "Remote Control Unit (RU). The remote controller with full function.",
      img: "./img/help/img-1.png",
      link: "",
      linkName: "Open"
    },
    {
      name: "Smart Share for Windows: Installation, Setup, and Use - PC Software",
      img: "./img/help/img-2.png",
      link: "",
      linkName: "Play"
    },
    {
      name: "Ultra HD 4K TV Upscaling - UHD TV Video",
      img: "./img/help/img-3.png",
      link: "",
      linkName: "Play"
    },
    {
      name: "Best Picture Settings for your LG 4K or 4K OLED - TV",
      img: "./img/help/img-4.png",
      link: "",
      linkName: "Play"
    },
    {
      name: "Connecting LG TV to Google Assistant & Amazon Alexa - LG SmartThinQ",
      img: "./img/help/img-5.png",
      link: "",
      linkName: "Play"
    },
    {
      name: "How To Access and Troubleshoot Disney+ On An LG Smart TV- WebOS 6.",
      img: "./img/help/img-6.png",
      link: "",
      linkName: "Play"
    }
  ];
  $$result.css.add(css);
  return `<section class="${"help-sect svelte-1gw3vkk"}"><div class="${"container"}"><h3 class="${"h3 svelte-1gw3vkk"}">Help Center</h3>
    <div class="${"help-grid svelte-1gw3vkk"}">${each(help, (item) => {
    return `<div class="${"help-item svelte-1gw3vkk"}"><div class="${"help-item-img svelte-1gw3vkk"}"><img${add_attribute("src", item.img, 0)} alt="${""}" class="${"svelte-1gw3vkk"}"></div>
          <div class="${"help-item-bottom svelte-1gw3vkk"}"><a href="${"item.link"}" class="${"help-item-name svelte-1gw3vkk"}">${escape(item.name)}</a>
            <a class="${"help-item-link svelte-1gw3vkk"}"${add_attribute("href", item.link, 0)}>${escape(item.linkName)}</a></div>
        </div>`;
  })}</div></div>
</section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Header, "Header").$$render($$result, { position: "static" }, {}, {})}
${validate_component(HelpIntro, "Intro").$$render($$result, {}, {}, {})}
${validate_component(Help, "Help").$$render($$result, {}, {}, {})}
${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};

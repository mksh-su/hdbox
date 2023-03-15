import { c as create_ssr_component, v as validate_component, f as each, d as add_attribute, e as escape } from "../../../chunks/index.js";
import { H as Header, F as Footer } from "../../../chunks/Footer.js";
import { S as Search } from "../../../chunks/Search.js";
const HelpIntro_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: '.intro-sect.svelte-g0bpbn.svelte-g0bpbn{margin-bottom:50px;display:flex;align-items:center;border:1px solid rgba(0, 0, 0, 0.1);border-radius:12px;padding:13px 120px 13px 98px}.intro-sect.svelte-g0bpbn .content h6.svelte-g0bpbn{font-size:16px;color:#707070;font-family:"TT Commons", sans-serif;margin-bottom:0}.intro-sect.svelte-g0bpbn .content p.svelte-g0bpbn{font-size:18px;margin:0;padding-top:12px;font-weight:500;font-family:"Rational Display", sans-serif}.intro-sect.svelte-g0bpbn .content .intro-link.svelte-g0bpbn{color:#0066cc;font-size:18px;font-weight:500;font-family:"Rational Display", sans-serif;transition:0.3s;margin-bottom:32px;display:inline-block}.intro-sect.svelte-g0bpbn .content .intro-link.svelte-g0bpbn:hover{color:#e81d2c}.intro-sect.svelte-g0bpbn .h6.svelte-g0bpbn{margin-top:0;font-weight:400}.intro-sect.svelte-g0bpbn .img.svelte-g0bpbn{margin-left:auto}.intro-sect.svelte-g0bpbn .img img.svelte-g0bpbn{min-height:300px;max-width:unset}.intro-sect.svelte-g0bpbn .text.svelte-g0bpbn{max-width:340px}',
  map: null
};
const HelpIntro = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="${"container"}"><section class="${"intro-sect wrapper svelte-g0bpbn"}"><div class="${"content"}"><h6 class="${"h6 svelte-g0bpbn"}">Help Center</h6>
      <p class="${"text svelte-g0bpbn"}">If you need help with anything HDBOX related, refer to the videos below. Still can’t find what you’re looking
        for?
      </p>
      <a href="${"/"}" class="${"intro-link svelte-g0bpbn"}">Contact Us</a>
      ${validate_component(Search, "Search").$$render($$result, {}, {}, {})}</div>
    <div class="${"img svelte-g0bpbn"}"><img src="${"./img/help/help-intro.svg"}" alt="${""}" class="${"svelte-g0bpbn"}"></div></section>
</div>`;
});
const Help_svelte_svelte_type_style_lang = "";
const css = {
  code: '.help-sect.svelte-n58mh1.svelte-n58mh1{margin-bottom:100px}.help-sect.svelte-n58mh1 .h3.svelte-n58mh1{font-weight:500;font-size:24px}.help-grid.svelte-n58mh1.svelte-n58mh1{display:grid;grid-template-columns:repeat(4, 1fr);gap:16px;margin-bottom:130px}.help-item.svelte-n58mh1.svelte-n58mh1{display:flex;flex-direction:column}.help-item-img.svelte-n58mh1.svelte-n58mh1{border-radius:12px 12px 0px 0px;position:relative;overflow:hidden;min-height:160px}.help-item-img.svelte-n58mh1 img.svelte-n58mh1{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);min-height:100%}.help-item-name.svelte-n58mh1.svelte-n58mh1{font-size:16px;font-family:"Rational Display", sans-serif;font-weight:500;margin:0;padding-bottom:30px;position:relative;text-decoration:none;color:#484848}.help-item-bottom.svelte-n58mh1.svelte-n58mh1{border:1px solid #dbdbdb;border-radius:0 0 12px 12px;padding:24px 22px 22px;flex-grow:1;display:flex;flex-direction:column;align-items:baseline}.help-item-link.svelte-n58mh1.svelte-n58mh1{margin-top:auto;font-weight:400;color:#1B1717;text-decoration:none;position:relative;padding-right:12px;font-size:12px}.help-item-link.svelte-n58mh1.svelte-n58mh1:after{content:"";position:absolute;display:inline-block;right:0;top:50%;transform:translateY(-50%);height:7px;width:4px;background-image:url(/img/help/arrow-right.svg);background-repeat:no-repeat;background-size:contain;background-position:center}',
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
  return `<section class="${"help-sect svelte-n58mh1"}"><div class="${"container"}"><h3 class="${"h3 svelte-n58mh1"}">Help Center</h3>
    <div class="${"help-grid svelte-n58mh1"}">${each(help, (item) => {
    return `<div class="${"help-item svelte-n58mh1"}"><div class="${"help-item-img svelte-n58mh1"}"><img${add_attribute("src", item.img, 0)} alt="${""}" class="${"svelte-n58mh1"}"></div>
          <div class="${"help-item-bottom svelte-n58mh1"}"><a href="${"item.link"}" class="${"help-item-name svelte-n58mh1"}">${escape(item.name)}</a>
            <a class="${"help-item-link svelte-n58mh1"}"${add_attribute("href", item.link, 0)}>${escape(item.linkName)}</a></div>
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

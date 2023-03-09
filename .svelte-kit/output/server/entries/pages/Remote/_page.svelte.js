import { c as create_ssr_component, v as validate_component } from "../../../chunks/index.js";
import { H as Header, F as Footer } from "../../../chunks/Footer.js";
const Breadcrumbs_svelte_svelte_type_style_lang = "";
const css = {
  code: '.intro-sect.svelte-o61mp3.svelte-o61mp3{margin-bottom:50px;display:flex;align-items:center;border:1px solid rgba(0, 0, 0, 0.1);border-radius:12px;padding:13px 120px 13px 98px}.intro-sect.svelte-o61mp3 .content h6.svelte-o61mp3{font-size:16px;color:#707070;font-family:"TT Commons", sans-serif;margin-bottom:0}.intro-sect.svelte-o61mp3 .content p.svelte-o61mp3{font-size:18px;margin:0;padding-top:12px;padding-bottom:31px;font-weight:500;font-family:"Rational Display", sans-serif}.intro-sect.svelte-o61mp3 .h6.svelte-o61mp3{margin-top:0;font-weight:400}.intro-sect.svelte-o61mp3 .img.svelte-o61mp3{margin-left:auto}.intro-sect.svelte-o61mp3 .img img.svelte-o61mp3{min-height:300px;max-width:unset}.intro-sect.svelte-o61mp3 .text.svelte-o61mp3{max-width:340px}',
  map: null
};
const Breadcrumbs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"container"}"><section class="${"intro-sect wrapper svelte-o61mp3"}"><div class="${"content"}"><h6 class="${"h6 svelte-o61mp3"}">Reseller</h6>
      <p class="${"text svelte-o61mp3"}">There&#39;s nothing better than watching live TV, movies, or sports. With over 280 channels and packages to choose
        from, the HDBOX has something for everyone.
      </p></div>
    <div class="${"img svelte-o61mp3"}"><img src="${"./img/reseller/reseller-intro.svg"}" alt="${""}" class="${"svelte-o61mp3"}"></div></section>
</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Header, "Header").$$render($$result, { position: "static" }, {}, {})}
${validate_component(Breadcrumbs, "Breadcrumbs").$$render($$result, {}, {}, {})}

${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};

import { c as create_ssr_component, v as validate_component } from "../../../chunks/index.js";
import { C as CustomBtn, H as Header, F as Footer } from "../../../chunks/Footer.js";
import { B as Breadcrumbs } from "../../../chunks/Breadcrumbs.js";
import { P as Packages } from "../../../chunks/Packages.js";
import { F as Features } from "../../../chunks/Features.js";
const ProductDescription_svelte_svelte_type_style_lang = "";
const css = {
  code: '.desc-row.svelte-up7s5a.svelte-up7s5a{display:flex;align-items:center;margin:100px 0}.desc-row.svelte-up7s5a .desc-item-img.svelte-up7s5a{width:400px;margin-right:180px;display:flex}.desc-row.svelte-up7s5a .desc-item-img img.svelte-up7s5a{width:100%}.desc-row.svelte-up7s5a .desc-item-name img.svelte-up7s5a{width:220px}.desc-row-grey.svelte-up7s5a.svelte-up7s5a{background:rgba(233, 233, 233, 0.33);border-radius:12px;padding:90px 85px 100px}.desc-row-grey.svelte-up7s5a .text.svelte-up7s5a{font-size:32px;font-family:"Rational Display", sans-serif;text-transform:uppercase;margin:58px 0 0}.desc-row-border.svelte-up7s5a.svelte-up7s5a{border:1px solid #dbdbdb;border-radius:12px}.desc-row-border.svelte-up7s5a .h2.svelte-up7s5a{font-size:32px;max-width:400px}.desc-row-border.svelte-up7s5a .desc-col.svelte-up7s5a:first-of-type{margin:25px 0}.desc-row-border.svelte-up7s5a .desc-item-img.svelte-up7s5a{margin-right:125px;width:470px}.desc-row-big.svelte-up7s5a .h2.svelte-up7s5a{font-size:48px}.desc-row-big.svelte-up7s5a .desc-item-img.svelte-up7s5a{margin-right:110px;width:480px}.desc-row-big.svelte-up7s5a .text.svelte-up7s5a{font-family:"Rational Display", sans-serif;font-size:18px;font-weight:500;max-width:460px}.desc-row-reverse.svelte-up7s5a.svelte-up7s5a{flex-direction:row-reverse}.desc-row-reverse.svelte-up7s5a .desc-item-img.svelte-up7s5a{margin-left:110px;margin-right:0}.desc-column.svelte-up7s5a.svelte-up7s5a{display:flex;flex-direction:column;margin:100px 0;text-align:center;align-items:center}.desc-column.svelte-up7s5a .h2.svelte-up7s5a{font-size:48px;max-width:600px}.desc-tv-img.svelte-up7s5a.svelte-up7s5a{border:4px solid black;box-shadow:10px 10px 25px 10px rgba(0, 0, 0, 0.2);max-width:800px;display:flex}',
  map: null
};
const ProductDescription = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<section class="${"desc-sect"}"><div class="${"container"}"><div class="${"desc-row desc-row-grey svelte-up7s5a"}"><div class="${"desc-col"}"><div class="${"desc-item-img svelte-up7s5a"}"><img src="${"./img/product/x1.svg"}" alt="${""}" class="${"svelte-up7s5a"}"></div></div>
      <div class="${"desc-col"}"><div class="${"desc-item-name"}"><img src="${"./img/product/x1-sign.svg"}" alt="${""}" class="${"svelte-up7s5a"}"></div>
        <p class="${"text svelte-up7s5a"}">A small box for best experience</p></div></div>
    <div class="${"desc-row desc-row-border svelte-up7s5a"}"><div class="${"desc-col svelte-up7s5a"}"><div class="${"desc-item-img svelte-up7s5a"}"><img src="${"./img/product/remote.png"}" alt="${""}" class="${"svelte-up7s5a"}"></div></div>
      <div class="${"desc-col svelte-up7s5a"}"><h2 class="${"h2 svelte-up7s5a"}">Easy control with HDBOX Remote control</h2>
        ${validate_component(CustomBtn, "CustomBtn").$$render(
    $$result,
    {
      text: "How to use",
      link: "",
      font_size: "sm"
    },
    {},
    {}
  )}</div></div>
    <div class="${"desc-row desc-row-big svelte-up7s5a"}"><div class="${"desc-col"}"><div class="${"desc-item-img svelte-up7s5a"}"><img src="${"./img/product/tv.png"}" alt="${""}" class="${"svelte-up7s5a"}"></div></div>
      <div class="${"desc-col"}"><h2 class="${"h2 svelte-up7s5a"}">A small box filled with new experiences.</h2>
        <p class="${"text svelte-up7s5a"}">There&#39;s nothing better than watching live TV, movies, or sports. With over 280 channels and packages to choose
          from, the HDBOX has something for everyone.
        </p></div></div>
    <div class="${"desc-column svelte-up7s5a"}"><h2 class="${"h2 svelte-up7s5a"}">A small box filled with new experiences.</h2>
      <div class="${"desc-tv-img svelte-up7s5a"}"><img src="${"./img/product/avatar-big.jpg"}" alt="${""}"></div></div>
    <div class="${"desc-row desc-row-big desc-row-reverse svelte-up7s5a"}"><div class="${"desc-col"}"><div class="${"desc-item-img svelte-up7s5a"}"><img src="${"./img/product/rock.png"}" alt="${""}" class="${"svelte-up7s5a"}"></div></div>
      <div class="${"desc-col"}"><h2 class="${"h2 svelte-up7s5a"}">A small box filled with new experiences.</h2>
        <p class="${"text svelte-up7s5a"}">There&#39;s nothing better than watching live TV, movies, or sports. With over 280 channels and packages to choose
          from, the HDBOX has something for everyone.
        </p></div></div></div>
</section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Header, "Header").$$render($$result, { position: "static" }, {}, {})}
${validate_component(Breadcrumbs, "Breadcrumbs").$$render($$result, { link: "productInfo" }, {}, {})}
${validate_component(ProductDescription, "ProductFeatures").$$render($$result, {}, {}, {})}
${validate_component(Features, "Features").$$render($$result, {}, {}, {})}
${validate_component(Packages, "Packages").$$render($$result, {}, {}, {})}
${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};

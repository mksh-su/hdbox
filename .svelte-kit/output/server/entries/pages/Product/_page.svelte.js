import { c as create_ssr_component, v as validate_component } from "../../../chunks/index2.js";
import { H as Header, F as Footer } from "../../../chunks/Footer.js";
import { C as CommonIntro } from "../../../chunks/CommonIntro.js";
import { S as Search } from "../../../chunks/Search.js";
const Shop_svelte_svelte_type_style_lang = "";
const css = {
  code: '.big1.svelte-16gpmic.svelte-16gpmic{grid-area:big1}.big2.svelte-16gpmic.svelte-16gpmic{grid-area:big2}.reg1.svelte-16gpmic.svelte-16gpmic{grid-area:reg1}.reg2.svelte-16gpmic.svelte-16gpmic{grid-area:reg2}.reg3.svelte-16gpmic.svelte-16gpmic{grid-area:reg3}.reg4.svelte-16gpmic.svelte-16gpmic{grid-area:reg4}.reg5.svelte-16gpmic.svelte-16gpmic{grid-area:reg5}.reg6.svelte-16gpmic.svelte-16gpmic{grid-area:reg6}.reg7.svelte-16gpmic.svelte-16gpmic{grid-area:reg7}.reg8.svelte-16gpmic.svelte-16gpmic{grid-area:reg8}.shop-choice.svelte-16gpmic.svelte-16gpmic{padding:13px 15px 13px 23px;margin-bottom:16px;border:1px solid #dbdbdb;border-radius:12px}.shop-choice-all.svelte-16gpmic.svelte-16gpmic{margin:0;font-size:14px;font-weight:500;font-family:"Rational Display", sans-serif}.shop-grid.svelte-16gpmic.svelte-16gpmic{display:grid;gap:16px;grid-auto-flow:row;grid-template-columns:1fr 1fr 1fr 1fr;grid-template-rows:1fr 1fr 1fr;grid-template-areas:"big1 big1 reg1 reg2" "big2 big2 reg3 reg4" "reg5 reg6 reg7 reg8"}.shop-grid-item.svelte-16gpmic.svelte-16gpmic{display:flex;flex-direction:column;align-items:center;padding:34px 34px 22px;border:1px solid #dbdbdb;border-radius:12px}.shop-grid-item-img.svelte-16gpmic.svelte-16gpmic{height:205px;display:flex;align-items:center;justify-content:center}.shop-grid-item-img.svelte-16gpmic img.svelte-16gpmic{max-width:205px;max-height:100%;transition:0.3s}.shop-grid-item-img.svelte-16gpmic:hover img.svelte-16gpmic{transform:scale(1.05)}.shop-grid-item-name.svelte-16gpmic.svelte-16gpmic{margin:24px 0 26px;font-size:20px;font-weight:500;text-transform:uppercase;font-family:"Rational Display", sans-serif}.shop-grid-item-link.svelte-16gpmic.svelte-16gpmic{color:#e81d2c;transition:0.3s}.shop-grid-item-link.svelte-16gpmic.svelte-16gpmic:hover{color:#bf1320}',
  map: null
};
const Shop = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<section class="${"shop-sect"}"><div class="${"container"}"><div class="${"shop-choice svelte-16gpmic"}"><p class="${"shop-choice-all svelte-16gpmic"}">120 Products available</p>
      ${validate_component(Search, "Search").$$render($$result, {}, {}, {})}</div>
    <div class="${"shop-grid svelte-16gpmic"}"><div class="${"shop-grid-item big1 svelte-16gpmic"}"><a href="${""}" class="${"shop-grid-item-img svelte-16gpmic"}"><img src="${"./img/product/x1.svg"}" alt="${""}" class="${"svelte-16gpmic"}"></a>
        <p class="${"shop-grid-item-name svelte-16gpmic"}">HDBOX X1</p>
        <a href="${""}" class="${"shop-grid-item-link svelte-16gpmic"}">Discover more</a></div>
      <div class="${"shop-grid-item reg1 svelte-16gpmic"}"><a href="${""}" class="${"shop-grid-item-img svelte-16gpmic"}"><img src="${"./img/product/m1.svg"}" alt="${""}" class="${"svelte-16gpmic"}"></a>
        <p class="${"shop-grid-item-name svelte-16gpmic"}">HDBOX M1</p>
        <a href="${""}" class="${"shop-grid-item-link svelte-16gpmic"}">Discover more</a></div>
      <div class="${"shop-grid-item reg2 svelte-16gpmic"}"><a href="${""}" class="${"shop-grid-item-img svelte-16gpmic"}"><img src="${"./img/product/m2.svg"}" alt="${""}" class="${"svelte-16gpmic"}"></a>
        <p class="${"shop-grid-item-name svelte-16gpmic"}">HDBOX M2</p>
        <a href="${""}" class="${"shop-grid-item-link svelte-16gpmic"}">Discover more</a></div>
      <div class="${"shop-grid-item big2 svelte-16gpmic"}"><a href="${""}" class="${"shop-grid-item-img svelte-16gpmic"}"><img src="${"./img/product/x2.svg"}" alt="${""}" class="${"svelte-16gpmic"}"></a>
        <p class="${"shop-grid-item-name svelte-16gpmic"}">HDBOX X2</p>
        <a href="${""}" class="${"shop-grid-item-link svelte-16gpmic"}">Discover more</a></div>
      <div class="${"shop-grid-item reg3 svelte-16gpmic"}"><a href="${""}" class="${"shop-grid-item-img svelte-16gpmic"}"><img src="${"./img/product/m3.svg"}" alt="${""}" class="${"svelte-16gpmic"}"></a>
        <p class="${"shop-grid-item-name svelte-16gpmic"}">HDBOX M3</p>
        <a href="${""}" class="${"shop-grid-item-link svelte-16gpmic"}">Discover more</a></div>
      <div class="${"shop-grid-item reg4 svelte-16gpmic"}"><a href="${""}" class="${"shop-grid-item-img svelte-16gpmic"}"><img src="${"./img/product/x3.svg"}" alt="${""}" class="${"svelte-16gpmic"}"></a>
        <p class="${"shop-grid-item-name svelte-16gpmic"}">HDBOX X3</p>
        <a href="${""}" class="${"shop-grid-item-link svelte-16gpmic"}">Discover more</a></div>
      <div class="${"shop-grid-item reg5 svelte-16gpmic"}"><a href="${""}" class="${"shop-grid-item-img svelte-16gpmic"}"><img src="${"./img/product/m3.svg"}" alt="${""}" class="${"svelte-16gpmic"}"></a>
        <p class="${"shop-grid-item-name svelte-16gpmic"}">HDBOX M3</p>
        <a href="${""}" class="${"shop-grid-item-link svelte-16gpmic"}">Discover more</a></div>
      <div class="${"shop-grid-item reg6 svelte-16gpmic"}"><a href="${""}" class="${"shop-grid-item-img svelte-16gpmic"}"><img src="${"./img/product/x3.svg"}" alt="${""}" class="${"svelte-16gpmic"}"></a>
        <p class="${"shop-grid-item-name svelte-16gpmic"}">HDBOX X3</p>
        <a href="${""}" class="${"shop-grid-item-link svelte-16gpmic"}">Discover more</a></div>
      <div class="${"shop-grid-item reg7 svelte-16gpmic"}"><a href="${""}" class="${"shop-grid-item-img svelte-16gpmic"}"><img src="${"./img/product/m3.svg"}" alt="${""}" class="${"svelte-16gpmic"}"></a>
        <p class="${"shop-grid-item-name svelte-16gpmic"}">HDBOX M3</p>
        <a href="${""}" class="${"shop-grid-item-link svelte-16gpmic"}">Discover more</a></div>
      <div class="${"shop-grid-item reg8 svelte-16gpmic"}"><a href="${""}" class="${"shop-grid-item-img svelte-16gpmic"}"><img src="${"./img/product/x3.svg"}" alt="${""}" class="${"svelte-16gpmic"}"></a>
        <p class="${"shop-grid-item-name svelte-16gpmic"}">HDBOX X3</p>
        <a href="${""}" class="${"shop-grid-item-link svelte-16gpmic"}">Discover more</a></div></div></div>
</section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Header, "Header").$$render($$result, { position: "static" }, {}, {})}
${validate_component(CommonIntro, "Intro").$$render(
    $$result,
    {
      heading: "Product",
      desc: "There's nothing better than watching live TV, movies, or sports. With over 280 channels and packages to choose from, the HDBOX has something for everyone."
    },
    {},
    {}
  )}
${validate_component(Shop, "Shop").$$render($$result, {}, {}, {})}
${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};

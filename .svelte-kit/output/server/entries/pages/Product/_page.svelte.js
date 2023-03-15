import { c as create_ssr_component, v as validate_component } from "../../../chunks/index.js";
import { H as Header, F as Footer } from "../../../chunks/Footer.js";
import { C as CommonIntro } from "../../../chunks/CommonIntro.js";
import { S as Search } from "../../../chunks/Search.js";
const Shop_svelte_svelte_type_style_lang = "";
const css = {
  code: '.big1.svelte-e4puit.svelte-e4puit{grid-area:big1}.big2.svelte-e4puit.svelte-e4puit{grid-area:big2}.reg1.svelte-e4puit.svelte-e4puit{grid-area:reg1}.reg2.svelte-e4puit.svelte-e4puit{grid-area:reg2}.reg3.svelte-e4puit.svelte-e4puit{grid-area:reg3}.reg4.svelte-e4puit.svelte-e4puit{grid-area:reg4}.reg5.svelte-e4puit.svelte-e4puit{grid-area:reg5}.reg6.svelte-e4puit.svelte-e4puit{grid-area:reg6}.reg7.svelte-e4puit.svelte-e4puit{grid-area:reg7}.reg8.svelte-e4puit.svelte-e4puit{grid-area:reg8}.shop-choice.svelte-e4puit.svelte-e4puit{padding:13px 15px 13px 23px;margin-bottom:16px;border:1px solid #dbdbdb;border-radius:12px;display:flex;align-items:center}.shop-choice-all.svelte-e4puit.svelte-e4puit{margin:0;font-size:14px;font-weight:500;font-family:"Rational Display", sans-serif;margin-right:auto}.shop-grid.svelte-e4puit.svelte-e4puit{display:grid;gap:16px;grid-auto-flow:row;grid-template-columns:1fr 1fr 1fr 1fr;grid-template-rows:1fr 1fr 1fr;grid-template-areas:"big1 big1 reg1 reg2" "big2 big2 reg3 reg4" "reg5 reg6 reg7 reg8"}.shop-grid-item.svelte-e4puit.svelte-e4puit{display:flex;flex-direction:column;align-items:center;padding:34px 34px 22px;border:1px solid #dbdbdb;border-radius:12px}.shop-grid-item-img.svelte-e4puit.svelte-e4puit{height:205px;display:flex;align-items:center;justify-content:center}.shop-grid-item-img.svelte-e4puit img.svelte-e4puit{max-width:205px;max-height:100%;transition:0.3s}.shop-grid-item-img.svelte-e4puit:hover img.svelte-e4puit{transform:scale(1.05)}.shop-grid-item-name.svelte-e4puit.svelte-e4puit{margin:24px 0 26px;font-size:20px;font-weight:500;text-transform:uppercase;font-family:"Rational Display", sans-serif}.shop-grid-item-link.svelte-e4puit.svelte-e4puit{color:#e81d2c;transition:0.3s}.shop-grid-item-link.svelte-e4puit.svelte-e4puit:hover{color:#bf1320}.select.svelte-e4puit.svelte-e4puit{position:relative;border:1px solid #dbdbdb;border-radius:12px;min-width:108px;cursor:pointer;margin-left:12px}.select.svelte-e4puit .select-btn.svelte-e4puit{box-sizing:border-box;border-radius:3px;width:100%;position:relative;user-select:none;color:#0f0f0f;font-size:13px;font-family:"Rational Display", sans-serif;font-weight:300;padding:10px 34px 10px 16px}.select.svelte-e4puit .select-btn.svelte-e4puit:after{content:"";position:absolute;top:40%;right:15px;width:6px;height:6px;transform:translateY(-50%) rotate(45deg);border-right:1px solid #dbdbdb;border-bottom:1px solid #dbdbdb;transition:0.3s}.select.svelte-e4puit .select-dropdown.svelte-e4puit{position:absolute;top:100%;min-width:110px;right:0;border-radius:0 0 3px 3px;overflow:hidden;border-top:1px solid #eee;z-index:1;background:#fff;transform:scale(1, 0);transform-origin:top center;visibility:hidden;transition:0.3s;box-shadow:0px 0px 16px rgba(0, 0, 0, 0.08);border-radius:8px}.select.svelte-e4puit .select-dropdown .select-option.svelte-e4puit{padding:10px;box-sizing:border-box;cursor:pointer;color:white;position:relative}.select.svelte-e4puit .select-dropdown .select-option.svelte-e4puit:hover{background:#f8f8f8}.filter.svelte-e4puit.svelte-e4puit{position:relative;border:1px solid #dbdbdb;border-radius:12px;cursor:pointer;margin-right:12px}.filter-btn.svelte-e4puit.svelte-e4puit{color:#0f0f0f;font-size:13px;font-family:"Rational Display", sans-serif;font-weight:300;padding:10px 16px;text-align:center;border-radius:12px;transition:0.3s}.filter.svelte-e4puit .open{background-color:#e2e2e2}',
  map: null
};
const Shop = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<section class="${"shop-sect"}"><div class="${"container"}"><div class="${"shop-choice svelte-e4puit"}"><p class="${"shop-choice-all svelte-e4puit"}">120 Products available</p>
      <div class="${"filter svelte-e4puit"}"><div class="${"filter-btn svelte-e4puit"}">Filter</div></div>
      ${validate_component(Search, "Search").$$render($$result, {}, {}, {})}
      <div class="${"select svelte-e4puit"}"><div class="${"select-btn svelte-e4puit"}" data-type="${"sort"}">Sort By</div>
        <div class="${"select-dropdown svelte-e4puit"}"><div class="${"select-option svelte-e4puit"}" data-type="${"new"}">Newest</div>
          <div class="${"select-option svelte-e4puit"}" data-type="${"cheap"}">Cheapest</div></div></div></div>
    <div class="${"shop-grid svelte-e4puit"}"><div class="${"shop-grid-item big1 svelte-e4puit"}"><a href="${""}" class="${"shop-grid-item-img svelte-e4puit"}"><img src="${"./img/product/x1.svg"}" alt="${""}" class="${"svelte-e4puit"}"></a>
        <p class="${"shop-grid-item-name svelte-e4puit"}">HDBOX X1</p>
        <a href="${""}" class="${"shop-grid-item-link svelte-e4puit"}">Discover more</a></div>
      <div class="${"shop-grid-item reg1 svelte-e4puit"}"><a href="${""}" class="${"shop-grid-item-img svelte-e4puit"}"><img src="${"./img/product/m1.svg"}" alt="${""}" class="${"svelte-e4puit"}"></a>
        <p class="${"shop-grid-item-name svelte-e4puit"}">HDBOX M1</p>
        <a href="${""}" class="${"shop-grid-item-link svelte-e4puit"}">Discover more</a></div>
      <div class="${"shop-grid-item reg2 svelte-e4puit"}"><a href="${""}" class="${"shop-grid-item-img svelte-e4puit"}"><img src="${"./img/product/m2.svg"}" alt="${""}" class="${"svelte-e4puit"}"></a>
        <p class="${"shop-grid-item-name svelte-e4puit"}">HDBOX M2</p>
        <a href="${""}" class="${"shop-grid-item-link svelte-e4puit"}">Discover more</a></div>
      <div class="${"shop-grid-item big2 svelte-e4puit"}"><a href="${""}" class="${"shop-grid-item-img svelte-e4puit"}"><img src="${"./img/product/x2.svg"}" alt="${""}" class="${"svelte-e4puit"}"></a>
        <p class="${"shop-grid-item-name svelte-e4puit"}">HDBOX X2</p>
        <a href="${""}" class="${"shop-grid-item-link svelte-e4puit"}">Discover more</a></div>
      <div class="${"shop-grid-item reg3 svelte-e4puit"}"><a href="${""}" class="${"shop-grid-item-img svelte-e4puit"}"><img src="${"./img/product/m3.svg"}" alt="${""}" class="${"svelte-e4puit"}"></a>
        <p class="${"shop-grid-item-name svelte-e4puit"}">HDBOX M3</p>
        <a href="${""}" class="${"shop-grid-item-link svelte-e4puit"}">Discover more</a></div>
      <div class="${"shop-grid-item reg4 svelte-e4puit"}"><a href="${""}" class="${"shop-grid-item-img svelte-e4puit"}"><img src="${"./img/product/x3.svg"}" alt="${""}" class="${"svelte-e4puit"}"></a>
        <p class="${"shop-grid-item-name svelte-e4puit"}">HDBOX X3</p>
        <a href="${""}" class="${"shop-grid-item-link svelte-e4puit"}">Discover more</a></div>
      <div class="${"shop-grid-item reg5 svelte-e4puit"}"><a href="${""}" class="${"shop-grid-item-img svelte-e4puit"}"><img src="${"./img/product/m3.svg"}" alt="${""}" class="${"svelte-e4puit"}"></a>
        <p class="${"shop-grid-item-name svelte-e4puit"}">HDBOX M3</p>
        <a href="${""}" class="${"shop-grid-item-link svelte-e4puit"}">Discover more</a></div>
      <div class="${"shop-grid-item reg6 svelte-e4puit"}"><a href="${""}" class="${"shop-grid-item-img svelte-e4puit"}"><img src="${"./img/product/x3.svg"}" alt="${""}" class="${"svelte-e4puit"}"></a>
        <p class="${"shop-grid-item-name svelte-e4puit"}">HDBOX X3</p>
        <a href="${""}" class="${"shop-grid-item-link svelte-e4puit"}">Discover more</a></div>
      <div class="${"shop-grid-item reg7 svelte-e4puit"}"><a href="${""}" class="${"shop-grid-item-img svelte-e4puit"}"><img src="${"./img/product/m3.svg"}" alt="${""}" class="${"svelte-e4puit"}"></a>
        <p class="${"shop-grid-item-name svelte-e4puit"}">HDBOX M3</p>
        <a href="${""}" class="${"shop-grid-item-link svelte-e4puit"}">Discover more</a></div>
      <div class="${"shop-grid-item reg8 svelte-e4puit"}"><a href="${""}" class="${"shop-grid-item-img svelte-e4puit"}"><img src="${"./img/product/x3.svg"}" alt="${""}" class="${"svelte-e4puit"}"></a>
        <p class="${"shop-grid-item-name svelte-e4puit"}">HDBOX X3</p>
        <a href="${""}" class="${"shop-grid-item-link svelte-e4puit"}">Discover more</a></div></div></div>
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

import { c as create_ssr_component } from "./index.js";
const Breadcrumbs_svelte_svelte_type_style_lang = "";
const css = {
  code: '.breadcrumbs-row.svelte-g6dyh7.svelte-g6dyh7{font-family:"Rational Display", sans-serif;font-size:14px;font-weight:300;padding:14px 0;border-bottom:1px solid #dcdcd2}.breadcrumbs.svelte-g6dyh7 a.breadcrumbs-item.svelte-g6dyh7{color:#a6a6a6;text-decoration:none}.breadcrumbs.svelte-g6dyh7 span.breadcrumbs-item.svelte-g6dyh7{color:#484848;font-weight:400}',
  map: null
};
const Breadcrumbs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { link = "link" } = $$props;
  if ($$props.link === void 0 && $$bindings.link && link !== void 0)
    $$bindings.link(link);
  $$result.css.add(css);
  return `<div class="${"breadcrumbs svelte-g6dyh7"}"><div class="${"container"}"><div class="${"breadcrumbs-row svelte-g6dyh7"}"><a href="${""}" class="${"breadcrumbs-item svelte-g6dyh7"}">HOME</a>
      /
      ${link == "howTo" ? `<a href="${""}" class="${"breadcrumbs-item svelte-g6dyh7"}">How to use</a>
        /
        <span class="${"breadcrumbs-item svelte-g6dyh7"}">Remote Control Unit (RU)</span>` : `${link == "productInfo" ? `<a href="${""}" class="${"breadcrumbs-item svelte-g6dyh7"}">Product</a>
        /
        <span class="${"breadcrumbs-item svelte-g6dyh7"}">HDBOX X1</span>` : ``}`}</div></div>
</div>`;
});
export {
  Breadcrumbs as B
};

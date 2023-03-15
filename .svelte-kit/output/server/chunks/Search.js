import { c as create_ssr_component } from "./index.js";
const Search_svelte_svelte_type_style_lang = "";
const css = {
  code: ".form-search.svelte-td0fbp{position:relative;width:280px}.form-search-input.svelte-td0fbp{padding:10px 18px;border:1px solid #dbdbdb;border-radius:12px;width:100%}.form-search-btn.svelte-td0fbp{font-size:0;padding:0;width:14px;height:14px;display:inline-block;position:absolute;right:16px;top:50%;transform:translateY(-50%);background-color:transparent;background-image:url(/img/help/search.svg);background-size:contain;background-repeat:no-repeat;background-position:center;border:0}",
  map: null
};
const Search = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<form action="${""}" class="${"form-search svelte-td0fbp"}"><input type="${"text"}" placeholder="${"Search"}" class="${"form-search-input svelte-td0fbp"}">
  <input type="${"submit"}" class="${"form-search-btn svelte-td0fbp"}" value="${"Search"}">
</form>`;
});
export {
  Search as S
};

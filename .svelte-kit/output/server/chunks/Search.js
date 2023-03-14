import { c as create_ssr_component } from "./index2.js";
const Search_svelte_svelte_type_style_lang = "";
const css = {
  code: ".form-search.svelte-sbltuy{margin-top:32px;position:relative;max-width:280px}.form-search-input.svelte-sbltuy{padding:10px 18px;border:1px solid #dbdbdb;border-radius:12px;width:100%}.form-search-btn.svelte-sbltuy{font-size:0;padding:0;width:14px;height:14px;display:inline-block;position:absolute;right:16px;top:50%;transform:translateY(-50%);background-color:transparent;background-image:url(/img/help/search.svg);background-size:contain;background-repeat:no-repeat;background-position:center;border:0}",
  map: null
};
const Search = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<form action="${""}" class="${"form-search svelte-sbltuy"}"><input type="${"text"}" placeholder="${"Search"}" class="${"form-search-input svelte-sbltuy"}">
  <input type="${"submit"}" class="${"form-search-btn svelte-sbltuy"}" value="${"Search"}">
</form>`;
});
export {
  Search as S
};

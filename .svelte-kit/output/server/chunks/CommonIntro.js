import { c as create_ssr_component, e as escape } from "./index2.js";
import "./Footer.js";
const CommonIntro_svelte_svelte_type_style_lang = "";
const css = {
  code: '.intro-sect.svelte-1ckj7h9.svelte-1ckj7h9{margin-bottom:16px;display:flex;align-items:center;border:1px solid rgba(0, 0, 0, 0.1);border-radius:12px;padding:13px 120px 13px 98px}.intro-sect.svelte-1ckj7h9 .content h6.svelte-1ckj7h9{font-size:16px;color:#707070;font-family:"TT Commons", sans-serif;margin-bottom:0}.intro-sect.svelte-1ckj7h9 .content p.svelte-1ckj7h9{font-size:18px;margin:0;padding-top:12px;padding-bottom:31px;font-weight:500;font-family:"Rational Display", sans-serif}.intro-sect.svelte-1ckj7h9 .h6.svelte-1ckj7h9{margin-top:0;font-weight:400}.intro-sect.svelte-1ckj7h9 .img.svelte-1ckj7h9{margin-left:auto}.intro-sect.svelte-1ckj7h9 .img img.svelte-1ckj7h9{min-height:300px;max-width:unset}.intro-sect.svelte-1ckj7h9 .text.svelte-1ckj7h9{max-width:340px}',
  map: null
};
const CommonIntro = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { heading = "" } = $$props;
  let { desc = "" } = $$props;
  if ($$props.heading === void 0 && $$bindings.heading && heading !== void 0)
    $$bindings.heading(heading);
  if ($$props.desc === void 0 && $$bindings.desc && desc !== void 0)
    $$bindings.desc(desc);
  $$result.css.add(css);
  return `<div class="${"container"}"><section class="${"intro-sect wrapper svelte-1ckj7h9"}"><div class="${"content"}"><h6 class="${"h6 svelte-1ckj7h9"}">${escape(heading)}</h6>
      <p class="${"text svelte-1ckj7h9"}">${escape(desc)}</p></div>
    <div class="${"img svelte-1ckj7h9"}"><img src="${"./img/reseller/reseller-intro.svg"}" alt="${""}" class="${"svelte-1ckj7h9"}"></div></section>
</div>`;
});
export {
  CommonIntro as C
};

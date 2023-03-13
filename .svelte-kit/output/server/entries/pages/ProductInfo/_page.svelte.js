import { c as create_ssr_component, v as validate_component } from "../../../chunks/index.js";
import { H as Header, F as Footer } from "../../../chunks/Footer.js";
import { B as Breadcrumbs } from "../../../chunks/Breadcrumbs.js";
import { P as Packages } from "../../../chunks/Packages.js";
import { F as Features } from "../../../chunks/Features.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Header, "Header").$$render($$result, { position: "static" }, {}, {})}
${validate_component(Breadcrumbs, "Breadcrumbs").$$render($$result, { link: "productInfo" }, {}, {})}
${validate_component(Features, "Features").$$render($$result, {}, {}, {})}
${validate_component(Packages, "Packages").$$render($$result, {}, {}, {})}
${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};

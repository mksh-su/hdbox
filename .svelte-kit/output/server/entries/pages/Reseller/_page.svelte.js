import { c as create_ssr_component, f as each, d as add_attribute, e as escape, v as validate_component } from "../../../chunks/index.js";
import { H as Header, F as Footer } from "../../../chunks/Footer.js";
import { C as CommonIntro } from "../../../chunks/CommonIntro.js";
const Resellers_svelte_svelte_type_style_lang = "";
const css = {
  code: '.reseller-sect.svelte-ht1xfd.svelte-ht1xfd{margin-top:30px;margin-bottom:100px}.reseller-sect.svelte-ht1xfd .h3.svelte-ht1xfd{font-weight:500;font-size:24px}.reseller-grid.svelte-ht1xfd.svelte-ht1xfd{display:grid;grid-template-columns:repeat(4, 1fr);gap:16px;margin-bottom:130px}.reseller-item.svelte-ht1xfd.svelte-ht1xfd{display:flex;flex-direction:column}.reseller-item-img.svelte-ht1xfd.svelte-ht1xfd{border-radius:12px 12px 0px 0px;position:relative;overflow:hidden;min-height:200px}.reseller-item-img.svelte-ht1xfd img.svelte-ht1xfd{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}.reseller-item-name.svelte-ht1xfd.svelte-ht1xfd{font-size:18px;font-family:"Rational Display", sans-serif;font-weight:500;text-transform:uppercase;margin:0;padding-bottom:10px;position:relative}.reseller-item-name.svelte-ht1xfd.svelte-ht1xfd:after{content:"";width:58px;height:1px;background-color:#dbdbdb;display:inline-block;position:absolute;bottom:0;left:0}.reseller-item-info.svelte-ht1xfd.svelte-ht1xfd{margin-top:25px;display:flex;flex-direction:column;gap:14px}.reseller-item-info.svelte-ht1xfd a.svelte-ht1xfd{color:#0f0f0f}.reseller-item-info-inner.svelte-ht1xfd.svelte-ht1xfd{display:flex;flex-direction:column}.reseller-item-bottom.svelte-ht1xfd.svelte-ht1xfd{border:1px solid #dbdbdb;border-radius:0 0 12px 12px;padding:18px 24px 30px;flex-grow:1}.reseller-item-person.svelte-ht1xfd.svelte-ht1xfd,.reseller-item-location.svelte-ht1xfd.svelte-ht1xfd,.reseller-item-phone.svelte-ht1xfd.svelte-ht1xfd{position:relative;padding-left:30px}.reseller-item-person.svelte-ht1xfd.svelte-ht1xfd:before,.reseller-item-location.svelte-ht1xfd.svelte-ht1xfd:before,.reseller-item-phone.svelte-ht1xfd.svelte-ht1xfd:before{content:"";position:absolute;width:16px;height:16px;display:inline-block;background-size:contain;background-position:center;background-repeat:no-repeat;left:0;top:0}.reseller-item-person.svelte-ht1xfd.svelte-ht1xfd:before{background-image:url(/img/reseller/user.svg)}.reseller-item-location.svelte-ht1xfd.svelte-ht1xfd:before{background-image:url(/img/reseller/location.svg)}.reseller-item-phone.svelte-ht1xfd.svelte-ht1xfd:before{background-image:url(/img/reseller/phone.svg)}.reseller-item-phone.svelte-ht1xfd a.svelte-ht1xfd{text-decoration:none}',
  map: null
};
const Resellers = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let resellers = [
    {
      name: "Erbil",
      img: "./img/reseller/erbil.jpg",
      person: "Hiersh Nahoer",
      location: "Erbil, Nishtiman Bazar, New Farhad"
    },
    {
      name: "Sulaimani",
      img: "./img/reseller/sulaimani.jpg",
      person: "Diyari Muhammad",
      location: "Sulaimani, Flkay Dastaraka"
    },
    {
      name: "Duhok",
      img: "./img/reseller/duhok.jpg",
      person: "Bandi Talib",
      location: "Duhok, Qoj Center, Sport Max Shop"
    },
    {
      name: "Kalar",
      img: "./img/reseller/kalar.jpg",
      person: "Muhammad Yaseen",
      location: "Kalar, Bazaar, Hamoodi Shop"
    },
    {
      name: "Choman",
      img: "./img/reseller/choman.jpg",
      person: "Hiersh Nahoer",
      location: "Erbil, Nishtiman Bazar, New Farhad"
    }
  ];
  $$result.css.add(css);
  return `<section class="${"reseller-sect svelte-ht1xfd"}"><div class="${"container"}"><h3 class="${"h3 svelte-ht1xfd"}">HDBOX Reseller</h3>
    <div class="${"reseller-grid svelte-ht1xfd"}">${each(resellers, (item) => {
    return `<div class="${"reseller-item svelte-ht1xfd"}"><div class="${"reseller-item-img svelte-ht1xfd"}"><img${add_attribute("src", item.img, 0)} alt="${""}" class="${"svelte-ht1xfd"}"></div>
          <div class="${"reseller-item-bottom svelte-ht1xfd"}"><p class="${"reseller-item-name svelte-ht1xfd"}">${escape(item.name)} reseller</p>
            <div class="${"reseller-item-info svelte-ht1xfd"}"><div class="${"reseller-item-person svelte-ht1xfd"}">${escape(item.person)}</div>
              <div class="${"reseller-item-location svelte-ht1xfd"}"><a href="${"/"}" class="${"svelte-ht1xfd"}">${escape(item.location)}</a></div>
              <div class="${"reseller-item-phone svelte-ht1xfd"}"><div class="${"reseller-item-info-inner svelte-ht1xfd"}"><a href="${"tel:07704496003"}" class="${"svelte-ht1xfd"}">07704496003</a>
                  <a href="${"tel:07704496003"}" class="${"svelte-ht1xfd"}">07704496003</a>
                </div></div>
            </div></div>
        </div>`;
  })}</div></div>
</section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Header, "Header").$$render($$result, { position: "static" }, {}, {})}
${validate_component(CommonIntro, "Intro").$$render(
    $$result,
    {
      heading: "Resellers",
      desc: "There's nothing better than watching live TV, movies, or sports. With over 280 channels and packages to choose from, the HDBOX has something for everyone."
    },
    {},
    {}
  )}
${validate_component(Resellers, "Resellers").$$render($$result, {}, {}, {})}
${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};

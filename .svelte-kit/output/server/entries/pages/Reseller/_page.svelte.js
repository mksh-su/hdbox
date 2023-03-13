import { c as create_ssr_component, f as each, d as add_attribute, e as escape, v as validate_component } from "../../../chunks/index.js";
import { H as Header, F as Footer } from "../../../chunks/Footer.js";
const ResellersIntro_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: '.intro-sect.svelte-o61mp3.svelte-o61mp3{margin-bottom:50px;display:flex;align-items:center;border:1px solid rgba(0, 0, 0, 0.1);border-radius:12px;padding:13px 120px 13px 98px}.intro-sect.svelte-o61mp3 .content h6.svelte-o61mp3{font-size:16px;color:#707070;font-family:"TT Commons", sans-serif;margin-bottom:0}.intro-sect.svelte-o61mp3 .content p.svelte-o61mp3{font-size:18px;margin:0;padding-top:12px;padding-bottom:31px;font-weight:500;font-family:"Rational Display", sans-serif}.intro-sect.svelte-o61mp3 .h6.svelte-o61mp3{margin-top:0;font-weight:400}.intro-sect.svelte-o61mp3 .img.svelte-o61mp3{margin-left:auto}.intro-sect.svelte-o61mp3 .img img.svelte-o61mp3{min-height:300px;max-width:unset}.intro-sect.svelte-o61mp3 .text.svelte-o61mp3{max-width:340px}',
  map: null
};
const ResellersIntro = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="${"container"}"><section class="${"intro-sect wrapper svelte-o61mp3"}"><div class="${"content"}"><h6 class="${"h6 svelte-o61mp3"}">Reseller</h6>
      <p class="${"text svelte-o61mp3"}">There&#39;s nothing better than watching live TV, movies, or sports. With over 280 channels and packages to choose
        from, the HDBOX has something for everyone.
      </p></div>
    <div class="${"img svelte-o61mp3"}"><img src="${"./img/reseller/reseller-intro.svg"}" alt="${""}" class="${"svelte-o61mp3"}"></div></section>
</div>`;
});
const Resellers_svelte_svelte_type_style_lang = "";
const css = {
  code: '.reseller-sect.svelte-c0utwp.svelte-c0utwp{margin-bottom:100px}.reseller-sect.svelte-c0utwp .h3.svelte-c0utwp{font-weight:500;font-size:24px}.reseller-grid.svelte-c0utwp.svelte-c0utwp{display:grid;grid-template-columns:repeat(4, 1fr);gap:16px;margin-bottom:130px}.reseller-item.svelte-c0utwp.svelte-c0utwp{display:flex;flex-direction:column}.reseller-item-img.svelte-c0utwp.svelte-c0utwp{border-radius:12px 12px 0px 0px;position:relative;overflow:hidden;min-height:200px}.reseller-item-img.svelte-c0utwp img.svelte-c0utwp{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}.reseller-item-name.svelte-c0utwp.svelte-c0utwp{font-size:18px;font-family:"Rational Display", sans-serif;font-weight:500;text-transform:uppercase;margin:0;padding-bottom:10px;position:relative}.reseller-item-name.svelte-c0utwp.svelte-c0utwp:after{content:"";width:58px;height:1px;background-color:#dbdbdb;display:inline-block;position:absolute;bottom:0;left:0}.reseller-item-info.svelte-c0utwp.svelte-c0utwp{margin-top:25px;display:flex;flex-direction:column;gap:14px}.reseller-item-info.svelte-c0utwp a.svelte-c0utwp{color:#0f0f0f}.reseller-item-info-inner.svelte-c0utwp.svelte-c0utwp{display:flex;flex-direction:column}.reseller-item-bottom.svelte-c0utwp.svelte-c0utwp{border:1px solid #dbdbdb;border-radius:0 0 12px 12px;padding:18px 24px 30px;flex-grow:1}.reseller-item-person.svelte-c0utwp.svelte-c0utwp,.reseller-item-location.svelte-c0utwp.svelte-c0utwp,.reseller-item-phone.svelte-c0utwp.svelte-c0utwp{position:relative;padding-left:30px}.reseller-item-person.svelte-c0utwp.svelte-c0utwp:before,.reseller-item-location.svelte-c0utwp.svelte-c0utwp:before,.reseller-item-phone.svelte-c0utwp.svelte-c0utwp:before{content:"";position:absolute;width:16px;height:16px;display:inline-block;background-size:contain;background-position:center;background-repeat:no-repeat;left:0;top:0}.reseller-item-person.svelte-c0utwp.svelte-c0utwp:before{background-image:url(/img/reseller/user.svg)}.reseller-item-location.svelte-c0utwp.svelte-c0utwp:before{background-image:url(/img/reseller/location.svg)}.reseller-item-phone.svelte-c0utwp.svelte-c0utwp:before{background-image:url(/img/reseller/phone.svg)}.reseller-item-phone.svelte-c0utwp a.svelte-c0utwp{text-decoration:none}',
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
  return `<section class="${"reseller-sect svelte-c0utwp"}"><div class="${"container"}"><h3 class="${"h3 svelte-c0utwp"}">HDBOX Reseller</h3>
    <div class="${"reseller-grid svelte-c0utwp"}">${each(resellers, (item) => {
    return `<div class="${"reseller-item svelte-c0utwp"}"><div class="${"reseller-item-img svelte-c0utwp"}"><img${add_attribute("src", item.img, 0)} alt="${""}" class="${"svelte-c0utwp"}"></div>
          <div class="${"reseller-item-bottom svelte-c0utwp"}"><p class="${"reseller-item-name svelte-c0utwp"}">${escape(item.name)} reseller</p>
            <div class="${"reseller-item-info svelte-c0utwp"}"><div class="${"reseller-item-person svelte-c0utwp"}">${escape(item.person)}</div>
              <div class="${"reseller-item-location svelte-c0utwp"}"><a href="${"/"}" class="${"svelte-c0utwp"}">${escape(item.location)}</a></div>
              <div class="${"reseller-item-phone svelte-c0utwp"}"><div class="${"reseller-item-info-inner svelte-c0utwp"}"><a href="${"tel:07704496003"}" class="${"svelte-c0utwp"}">07704496003</a>
                  <a href="${"tel:07704496003"}" class="${"svelte-c0utwp"}">07704496003</a>
                </div></div>
            </div></div>
        </div>`;
  })}</div></div>
</section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Header, "Header").$$render($$result, { position: "static" }, {}, {})}
${validate_component(ResellersIntro, "Intro").$$render($$result, {}, {}, {})}
${validate_component(Resellers, "Resellers").$$render($$result, {}, {}, {})}
${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};

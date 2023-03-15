import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index.js";
import { C as CustomBtn, H as Header, F as Footer } from "../../../../chunks/Footer.js";
import { B as Breadcrumbs } from "../../../../chunks/Breadcrumbs.js";
import { P as Packages } from "../../../../chunks/Packages.js";
import { F as Features } from "../../../../chunks/Features.js";
const ProductDescription_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: '.desc-row.svelte-up7s5a.svelte-up7s5a{display:flex;align-items:center;margin:100px 0}.desc-row.svelte-up7s5a .desc-item-img.svelte-up7s5a{width:400px;margin-right:180px;display:flex}.desc-row.svelte-up7s5a .desc-item-img img.svelte-up7s5a{width:100%}.desc-row.svelte-up7s5a .desc-item-name img.svelte-up7s5a{width:220px}.desc-row-grey.svelte-up7s5a.svelte-up7s5a{background:rgba(233, 233, 233, 0.33);border-radius:12px;padding:90px 85px 100px}.desc-row-grey.svelte-up7s5a .text.svelte-up7s5a{font-size:32px;font-family:"Rational Display", sans-serif;text-transform:uppercase;margin:58px 0 0}.desc-row-border.svelte-up7s5a.svelte-up7s5a{border:1px solid #dbdbdb;border-radius:12px}.desc-row-border.svelte-up7s5a .h2.svelte-up7s5a{font-size:32px;max-width:400px}.desc-row-border.svelte-up7s5a .desc-col.svelte-up7s5a:first-of-type{margin:25px 0}.desc-row-border.svelte-up7s5a .desc-item-img.svelte-up7s5a{margin-right:125px;width:470px}.desc-row-big.svelte-up7s5a .h2.svelte-up7s5a{font-size:48px}.desc-row-big.svelte-up7s5a .desc-item-img.svelte-up7s5a{margin-right:110px;width:480px}.desc-row-big.svelte-up7s5a .text.svelte-up7s5a{font-family:"Rational Display", sans-serif;font-size:18px;font-weight:500;max-width:460px}.desc-row-reverse.svelte-up7s5a.svelte-up7s5a{flex-direction:row-reverse}.desc-row-reverse.svelte-up7s5a .desc-item-img.svelte-up7s5a{margin-left:110px;margin-right:0}.desc-column.svelte-up7s5a.svelte-up7s5a{display:flex;flex-direction:column;margin:100px 0;text-align:center;align-items:center}.desc-column.svelte-up7s5a .h2.svelte-up7s5a{font-size:48px;max-width:600px}.desc-tv-img.svelte-up7s5a.svelte-up7s5a{border:4px solid black;box-shadow:10px 10px 25px 10px rgba(0, 0, 0, 0.2);max-width:800px;display:flex}',
  map: null
};
const ProductDescription = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<section class="${"desc-sect"}"><div class="${"container"}"><div class="${"desc-row desc-row-grey svelte-up7s5a"}"><div class="${"desc-col"}"><div class="${"desc-item-img svelte-up7s5a"}"><img src="${"/img/product/x1.svg"}" alt="${""}" class="${"svelte-up7s5a"}"></div></div>
      <div class="${"desc-col"}"><div class="${"desc-item-name"}"><img src="${"/img/product/x1-sign.svg"}" alt="${""}" class="${"svelte-up7s5a"}"></div>
        <p class="${"text svelte-up7s5a"}">A small box for best experience</p></div></div>
    <div class="${"desc-row desc-row-border svelte-up7s5a"}"><div class="${"desc-col svelte-up7s5a"}"><div class="${"desc-item-img svelte-up7s5a"}"><img src="${"/img/product/remote.png"}" alt="${""}" class="${"svelte-up7s5a"}"></div></div>
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
    <div class="${"desc-row desc-row-big svelte-up7s5a"}"><div class="${"desc-col"}"><div class="${"desc-item-img svelte-up7s5a"}"><img src="${"/img/product/tv.png"}" alt="${""}" class="${"svelte-up7s5a"}"></div></div>
      <div class="${"desc-col"}"><h2 class="${"h2 svelte-up7s5a"}">A small box filled with new experiences.</h2>
        <p class="${"text svelte-up7s5a"}">There&#39;s nothing better than watching live TV, movies, or sports. With over 280 channels and packages to choose
          from, the HDBOX has something for everyone.
        </p></div></div>
    <div class="${"desc-column svelte-up7s5a"}"><h2 class="${"h2 svelte-up7s5a"}">A small box filled with new experiences.</h2>
      <div class="${"desc-tv-img svelte-up7s5a"}"><img src="${"/img/product/avatar-big.jpg"}" alt="${""}"></div></div>
    <div class="${"desc-row desc-row-big desc-row-reverse svelte-up7s5a"}"><div class="${"desc-col"}"><div class="${"desc-item-img svelte-up7s5a"}"><img src="${"/img/product/rock.png"}" alt="${""}" class="${"svelte-up7s5a"}"></div></div>
      <div class="${"desc-col"}"><h2 class="${"h2 svelte-up7s5a"}">A small box filled with new experiences.</h2>
        <p class="${"text svelte-up7s5a"}">There&#39;s nothing better than watching live TV, movies, or sports. With over 280 channels and packages to choose
          from, the HDBOX has something for everyone.
        </p></div></div></div>
</section>`;
});
const LightboxThumbnail_svelte_svelte_type_style_lang = "";
const LightboxHeader_svelte_svelte_type_style_lang = "";
const LightboxBody_svelte_svelte_type_style_lang = "";
const LightboxFooter_svelte_svelte_type_style_lang = "";
const ModalCover_svelte_svelte_type_style_lang = "";
const Modal_svelte_svelte_type_style_lang = "";
const PreviousImageButton_svelte_svelte_type_style_lang = "";
const NextImageButton_svelte_svelte_type_style_lang = "";
const GalleryThumbnail_svelte_svelte_type_style_lang = "";
const ProductInfo_svelte_svelte_type_style_lang = "";
const css = {
  code: '.product-info-gallery-main.svelte-1emk9j.svelte-1emk9j{position:relative;height:400px;overflow:hidden;border-radius:8px;display:flex;align-items:center;justify-content:center}.product-info-gallery-main.svelte-1emk9j img.svelte-1emk9j{max-height:90%;max-width:90%}.product-info-gallery-main-item.svelte-1emk9j.svelte-1emk9j{width:100%}.product-info-gallery-choice.svelte-1emk9j.svelte-1emk9j{display:grid;grid-template-columns:repeat(5, 1fr);gap:16px;margin-top:10px}.product-info-gallery-choice-item.svelte-1emk9j.svelte-1emk9j{border-radius:6px;max-width:82px;height:82px;position:relative;overflow:hidden;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:0.3s;opacity:0.65}.product-info-gallery-choice-item.svelte-1emk9j img.svelte-1emk9j{height:100%;padding:10px}.product-info-gallery-choice-item.chosen.svelte-1emk9j.svelte-1emk9j{border:1px solid #6a6a6a;opacity:1}.info-sect.svelte-1emk9j.svelte-1emk9j{margin:50px 0 100px}.info-sect.svelte-1emk9j .b-tab.svelte-1emk9j{display:none}.info-sect.svelte-1emk9j .b-tab.active.svelte-1emk9j{display:block}.info-sect.svelte-1emk9j .b-nav.svelte-1emk9j{display:flex}.info-sect.svelte-1emk9j .b-nav-tab.svelte-1emk9j{padding:20px;flex-grow:1;text-align:center;color:#0f0f0f;font-size:14px;font-family:"Rational Display", sans-serif;text-decoration:none;border:1px solid #dbdbdb;border-bottom:0;transition:0.3s}.info-sect.svelte-1emk9j .b-nav-tab.svelte-1emk9j:first-of-type{border-radius:12px 0 0 0}.info-sect.svelte-1emk9j .b-nav-tab.svelte-1emk9j:last-of-type{border-radius:0 12px 0 0}.info-sect.svelte-1emk9j .b-nav-tab.active.svelte-1emk9j{font-weight:500;background:#dcdcd2;border-color:#dcdcd2}.info-row.svelte-1emk9j.svelte-1emk9j{display:flex;justify-content:space-between}.info-tab.svelte-1emk9j.svelte-1emk9j{padding:35px 48px;border:1px solid #dbdbdb;border-radius:0 0 12px 12px;width:480px}.info-tab-product.svelte-1emk9j.svelte-1emk9j{font-size:20px;font-weight:500;color:#000000;font-family:"Rational Display", sans-serif;margin:0}.info-tab-share.svelte-1emk9j.svelte-1emk9j{margin:10px 0 25px}.info-tab-share.svelte-1emk9j a.svelte-1emk9j{color:#107cf8;font-size:10px;font-family:"Rational Display", sans-serif}.info-tab-desc.svelte-1emk9j.svelte-1emk9j{padding:0 0 80px 17px;font-family:"Rational Display", sans-serif;font-size:13px}.info-tab-desc.svelte-1emk9j li.svelte-1emk9j{margin:10px 0}.info-tab-available.svelte-1emk9j.svelte-1emk9j{margin-top:24px}.info-tab-available.svelte-1emk9j span.svelte-1emk9j{font-size:11px;font-weight:300;font-family:"Rational Display", sans-serif;margin-bottom:10px;display:inline-block}.info-tab-available.svelte-1emk9j div.svelte-1emk9j{display:flex;gap:10px}.info-tab-soft.svelte-1emk9j.svelte-1emk9j{padding-left:18px;padding-right:18px}.info-tab-soft-version.svelte-1emk9j.svelte-1emk9j{display:flex;justify-content:space-between;align-items:center}.info-tab-soft-version-icon.svelte-1emk9j.svelte-1emk9j{vertical-align:middle;display:inline-block;margin-left:14px}.info-tab-soft-version.svelte-1emk9j p.svelte-1emk9j{margin:0;font-size:16px;font-family:"Rational Display", sans-serif}.info-tab-soft-date.svelte-1emk9j.svelte-1emk9j{display:flex;justify-content:space-between;align-items:flex-end;margin:20px 0 16px;font-family:"Rational Display", sans-serif}.info-tab-soft-date.svelte-1emk9j p.svelte-1emk9j{margin:0}.info-tab-soft-date.svelte-1emk9j a.svelte-1emk9j{color:#107cf8;text-decoration:none;font-size:14px}.info-tab-soft-links.svelte-1emk9j.svelte-1emk9j{margin:30px 0;display:flex;gap:10px}.info-tab-soft-download.svelte-1emk9j.svelte-1emk9j,.info-tab-soft-help.svelte-1emk9j.svelte-1emk9j{font-size:14px;font-weight:300;font-family:"Rational Display", sans-serif;transition:0.3s;border-radius:10px;text-decoration:none;padding:10px 20px;flex-grow:1}.info-tab-soft-download.svelte-1emk9j.svelte-1emk9j{color:white;background-color:#ce1212;text-align:center}.info-tab-soft-download.svelte-1emk9j.svelte-1emk9j:hover{background-color:#9f0e0e}.info-tab-soft-help.svelte-1emk9j.svelte-1emk9j{color:#ce1212;border:1px solid #ce1212;display:flex;align-items:center}.info-tab-soft-help.svelte-1emk9j.svelte-1emk9j:after{content:"";display:inline-block;width:9px;height:12px;background-size:contain;background-repeat:no-repeat;background-position:center;background-image:url(/img/product/triangle-right.svg);margin-left:auto}.info-tab-soft-help.svelte-1emk9j.svelte-1emk9j:hover{color:#9f0e0e;border-color:#9f0e0e}.info-tab-soft-info.svelte-1emk9j.svelte-1emk9j{border:1px solid #cfcfcf;border-radius:12px;padding:20px}.info-tab-soft-chars.svelte-1emk9j.svelte-1emk9j{margin:30px 0}.info-tab-soft-chars.svelte-1emk9j p.svelte-1emk9j{margin:10px 0}.info-tab-soft-chars.svelte-1emk9j p span.svelte-1emk9j{color:#ce1212}.info-tab-soft-change-heading.svelte-1emk9j.svelte-1emk9j{font-size:14px}.info-tab-soft-change.svelte-1emk9j ul.svelte-1emk9j{background:#f3f3f3;border:1px solid #e3e3e3;border-radius:12px;padding:20px 20px 20px 40px}',
  map: null
};
const ProductInfo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<section class="${"info-sect svelte-1emk9j"}"><div class="${"container"}"><div class="${"info-row svelte-1emk9j"}"><div class="${"info-col"}"><div class="${"product-info-gallery"}"><div class="${"product-info-gallery-main svelte-1emk9j"}"><img src="${"/img/product/x1.svg"}" class="${"product-info-gallery-main-item svelte-1emk9j"}"></div>
          <div class="${"product-info-gallery-choice svelte-1emk9j"}"><div class="${"product-info-gallery-choice-item chosen svelte-1emk9j"}"><img src="${"/img/product/x1.svg"}" class="${"product-info-gallery-choice-image svelte-1emk9j"}" alt="${""}"></div>
            <div class="${"product-info-gallery-choice-item svelte-1emk9j"}"><img src="${"/img/product/x2.svg"}" class="${"product-info-gallery-choice-image svelte-1emk9j"}" alt="${""}"></div>
            <div class="${"product-info-gallery-choice-item svelte-1emk9j"}"><img src="${"/img/product/x3.svg"}" class="${"product-info-gallery-choice-image svelte-1emk9j"}" alt="${""}"></div>
            <div class="${"product-info-gallery-choice-item svelte-1emk9j"}"><img src="${"/img/product/m1.svg"}" class="${"product-info-gallery-choice-image svelte-1emk9j"}" alt="${""}"></div>
            <div class="${"product-info-gallery-choice-item svelte-1emk9j"}"><img src="${"/img/product/m2.svg"}" class="${"product-info-gallery-choice-image svelte-1emk9j"}" alt="${""}"></div></div></div>
        </div>
      <div class="${"info-col"}"><nav class="${"b-nav svelte-1emk9j"}"><a href="${"#product"}" data-tab="${"product"}" class="${"b-nav-tab active svelte-1emk9j"}">Product</a>
          <a href="${"#soft"}" data-tab="${"soft"}" class="${"b-nav-tab svelte-1emk9j"}">Software</a></nav>
        <div id="${"product"}" class="${"b-tab active svelte-1emk9j"}"><div class="${"info-tab svelte-1emk9j"}"><p class="${"info-tab-product svelte-1emk9j"}">HDBOX X1</p>
            <p class="${"info-tab-share svelte-1emk9j"}"><a href="${""}" class="${"svelte-1emk9j"}">Share the product with your friends</a></p>
            <ul class="${"info-tab-desc svelte-1emk9j"}"><li class="${"svelte-1emk9j"}">The new Mediastar zenon brings the best of TV in a powerful experience that will</li>
              <li class="${"svelte-1emk9j"}">together with your favorite Apple devices and</li>
              <li class="${"svelte-1emk9j"}">services — in a powerful experience that will</li>
              <li class="${"svelte-1emk9j"}">transform your living room.</li></ul>
            <a href="${""}" class="${"btn btn-red-fill"}">Now in the markets!</a>
            <div class="${"info-tab-available svelte-1emk9j"}"><span class="${"svelte-1emk9j"}">Available in:</span>
              <div class="${"svelte-1emk9j"}"><img src="${"/img/product/iraq.svg"}" alt="${""}">
                <img src="${"/img/product/iran.svg"}" alt="${""}">
                <img src="${"/img/product/turkey.svg"}" alt="${""}"></div></div></div></div>
        <div id="${"soft"}" class="${"b-tab svelte-1emk9j"}"><div class="${"info-tab info-tab-soft svelte-1emk9j"}"><p class="${"info-tab-product svelte-1emk9j"}">HDBOX X1</p>
            <div class="${"info-tab-soft-date svelte-1emk9j"}"><p class="${"svelte-1emk9j"}">LATEST BUILD
                <br>
                May 26, 2021 14:52
              </p>
              <a href="${""}" class="${"svelte-1emk9j"}">How to use ?</a></div>
            <div class="${"info-tab-soft-info svelte-1emk9j"}"><div class="${"info-tab-soft-version svelte-1emk9j"}"><p class="${"svelte-1emk9j"}">HDBOX X1 v11.32.1 <img src="${"/img/product/export.svg"}" class="${"info-tab-soft-version-icon svelte-1emk9j"}" alt="${""}"></p>
                <p class="${"svelte-1emk9j"}">Downloads: 5533</p></div>
              <div class="${"info-tab-soft-links svelte-1emk9j"}"><a class="${"info-tab-soft-download svelte-1emk9j"}" href="${""}">Download build (1.36 GB)</a>
                <a class="${"info-tab-soft-help svelte-1emk9j"}" href="${""}">How to update</a></div>
              <div class="${"info-tab-soft-chars svelte-1emk9j"}"><p class="${"svelte-1emk9j"}"><span class="${"svelte-1emk9j"}">Version:</span>
                  11.32.1
                </p>
                <p class="${"svelte-1emk9j"}"><span class="${"svelte-1emk9j"}">File name:</span>
                  HDBOX X1-11.32.1-20210526.zip
                </p>
                <p class="${"svelte-1emk9j"}"><span class="${"svelte-1emk9j"}">Date:</span>
                  May 26, 2021 14:52 GMT
                </p>
                <p class="${"svelte-1emk9j"}"><span class="${"svelte-1emk9j"}">Downloads:</span>
                  5533
                </p></div>
              <div class="${"info-tab-soft-change svelte-1emk9j"}"><p class="${"info-tab-soft-change-heading svelte-1emk9j"}">Changelog:</p>
                <ul class="${"svelte-1emk9j"}"><li>May security patch</li>
                  <li>Imported translations</li>
                  <li>Under the hood improvements</li>
                  <li>Google Mic + Voice Recording is now functional also No more BETA</li></ul></div></div></div></div></div></div></div>
</section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Header, "Header").$$render($$result, { position: "static" }, {}, {})}
${validate_component(Breadcrumbs, "Breadcrumbs").$$render($$result, { link: "productInfo" }, {}, {})}
${validate_component(ProductInfo, "ProductInfo").$$render($$result, {}, {}, {})}
${validate_component(ProductDescription, "ProductDesc").$$render($$result, {}, {}, {})}
${validate_component(Features, "Features").$$render($$result, {}, {}, {})}
${validate_component(Packages, "Packages").$$render($$result, {}, {}, {})}
${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};

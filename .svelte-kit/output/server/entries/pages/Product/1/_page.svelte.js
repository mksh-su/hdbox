import { c as create_ssr_component, v as validate_component, f as compute_rest_props, o as onDestroy, h as spread, i as escape_object, b as add_attribute, j as createEventDispatcher, a as subscribe, e as escape, s as setContext, k as set_store_value, l as compute_slots, g as getContext } from "../../../../chunks/index2.js";
import { C as CustomBtn, H as Header, F as Footer } from "../../../../chunks/Footer.js";
import { B as Breadcrumbs } from "../../../../chunks/Breadcrumbs.js";
import { P as Packages } from "../../../../chunks/Packages.js";
import { w as writable } from "../../../../chunks/index.js";
import { F as Features } from "../../../../chunks/Features.js";
const ProductDescription_svelte_svelte_type_style_lang = "";
const css$9 = {
  code: '.desc-row.svelte-up7s5a.svelte-up7s5a{display:flex;align-items:center;margin:100px 0}.desc-row.svelte-up7s5a .desc-item-img.svelte-up7s5a{width:400px;margin-right:180px;display:flex}.desc-row.svelte-up7s5a .desc-item-img img.svelte-up7s5a{width:100%}.desc-row.svelte-up7s5a .desc-item-name img.svelte-up7s5a{width:220px}.desc-row-grey.svelte-up7s5a.svelte-up7s5a{background:rgba(233, 233, 233, 0.33);border-radius:12px;padding:90px 85px 100px}.desc-row-grey.svelte-up7s5a .text.svelte-up7s5a{font-size:32px;font-family:"Rational Display", sans-serif;text-transform:uppercase;margin:58px 0 0}.desc-row-border.svelte-up7s5a.svelte-up7s5a{border:1px solid #dbdbdb;border-radius:12px}.desc-row-border.svelte-up7s5a .h2.svelte-up7s5a{font-size:32px;max-width:400px}.desc-row-border.svelte-up7s5a .desc-col.svelte-up7s5a:first-of-type{margin:25px 0}.desc-row-border.svelte-up7s5a .desc-item-img.svelte-up7s5a{margin-right:125px;width:470px}.desc-row-big.svelte-up7s5a .h2.svelte-up7s5a{font-size:48px}.desc-row-big.svelte-up7s5a .desc-item-img.svelte-up7s5a{margin-right:110px;width:480px}.desc-row-big.svelte-up7s5a .text.svelte-up7s5a{font-family:"Rational Display", sans-serif;font-size:18px;font-weight:500;max-width:460px}.desc-row-reverse.svelte-up7s5a.svelte-up7s5a{flex-direction:row-reverse}.desc-row-reverse.svelte-up7s5a .desc-item-img.svelte-up7s5a{margin-left:110px;margin-right:0}.desc-column.svelte-up7s5a.svelte-up7s5a{display:flex;flex-direction:column;margin:100px 0;text-align:center;align-items:center}.desc-column.svelte-up7s5a .h2.svelte-up7s5a{font-size:48px;max-width:600px}.desc-tv-img.svelte-up7s5a.svelte-up7s5a{border:4px solid black;box-shadow:10px 10px 25px 10px rgba(0, 0, 0, 0.2);max-width:800px;display:flex}',
  map: null
};
const ProductDescription = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$9);
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
const BodyChild = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, []);
  let targetElement;
  let child;
  const removeTarget = () => {
    if (typeof document !== "undefined") {
      document.body.removeChild(child);
    }
  };
  onDestroy(removeTarget);
  return `<div${spread([escape_object($$restProps)], {})}${add_attribute("this", targetElement, 0)}>${slots.default ? slots.default({}) : ``}</div>`;
});
const LightboxHeader_svelte_svelte_type_style_lang = "";
const css$8 = {
  code: "div.svelte-lightbox-header.svelte-5qj430{width:auto;height:3rem;display:flex;justify-content:flex-end;align-items:center}div.svelte-lightbox-header.fullscreen.svelte-5qj430{position:fixed;z-index:5;top:0;left:0;right:0}button.svelte-5qj430{background:transparent;font-size:3rem;border:none;color:white}button.svelte-5qj430:hover{color:lightgray;cursor:pointer}button.svelte-5qj430:active{background-color:transparent}button.fullscreen.svelte-5qj430{filter:drop-shadow(0 0 5px black) drop-shadow(0 0 10px black)}",
  map: null
};
const LightboxHeader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["closeButtonProps", "showCloseButton", "enableEscapeToClose", "imagePreset"]);
  createEventDispatcher();
  let { closeButtonProps = {} } = $$props;
  let { showCloseButton } = $$props;
  let { enableEscapeToClose } = $$props;
  let { imagePreset } = $$props;
  if ($$props.closeButtonProps === void 0 && $$bindings.closeButtonProps && closeButtonProps !== void 0)
    $$bindings.closeButtonProps(closeButtonProps);
  if ($$props.showCloseButton === void 0 && $$bindings.showCloseButton && showCloseButton !== void 0)
    $$bindings.showCloseButton(showCloseButton);
  if ($$props.enableEscapeToClose === void 0 && $$bindings.enableEscapeToClose && enableEscapeToClose !== void 0)
    $$bindings.enableEscapeToClose(enableEscapeToClose);
  if ($$props.imagePreset === void 0 && $$bindings.imagePreset && imagePreset !== void 0)
    $$bindings.imagePreset(imagePreset);
  $$result.css.add(css$8);
  return `

<div${spread([{ class: "svelte-lightbox-header" }, escape_object($$restProps)], {
    classes: (imagePreset === "fullscreen" ? "fullscreen" : "") + " svelte-5qj430"
  })}>${showCloseButton ? `<button${spread([escape_object(closeButtonProps)], {
    classes: (imagePreset === "fullscreen" ? "fullscreen" : "") + " svelte-5qj430"
  })}>×
        </button>` : ``}
</div>`;
});
const LightboxBody_svelte_svelte_type_style_lang = "";
const css$7 = {
  code: "div.svelte-lightbox-body.svelte-1d3ym4l{position:relative;width:auto;height:auto;max-height:80vh}div.svelte-lightbox-body > *{max-width:100%;max-height:inherit;height:auto;width:auto;object-fit:contain}div.svelte-lightbox-body.scroll > *{max-height:100%}div.svelte-lightbox-body.expand > *{flex-grow:1}div.fullscreen.svelte-1d3ym4l{width:inherit;max-width:inherit;height:inherit;max-height:100%;display:flex;align-items:center;justify-content:center}div.scroll.svelte-1d3ym4l{overflow:scroll}",
  map: null
};
const LightboxBody = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { imagePreset } = $$props;
  let { enableImageExpand } = $$props;
  if ($$props.imagePreset === void 0 && $$bindings.imagePreset && imagePreset !== void 0)
    $$bindings.imagePreset(imagePreset);
  if ($$props.enableImageExpand === void 0 && $$bindings.enableImageExpand && enableImageExpand !== void 0)
    $$bindings.enableImageExpand(enableImageExpand);
  $$result.css.add(css$7);
  return `<div class="${[
    "svelte-lightbox-body svelte-1d3ym4l",
    (imagePreset === "fullscreen" ? "fullscreen" : "") + " " + (imagePreset === "scroll" ? "scroll" : "") + " " + (enableImageExpand ? "expand" : "")
  ].join(" ").trim()}">${slots.default ? slots.default({}) : ``}
</div>`;
});
const i18n = writable({
  generateLocalizedGalleryCounter: (activeImage, imageCount) => {
    return `Image ${activeImage + 1} of ${imageCount}`;
  }
});
const LightboxFooter_svelte_svelte_type_style_lang = "";
const css$6 = {
  code: "div.svelte-lightbox-footer.svelte-6fc1ka{width:100%;height:auto;color:white;text-align:left;position:absolute}div.svelte-lightbox-footer.fullscreen.svelte-6fc1ka{position:fixed;z-index:5;bottom:0;left:0;right:0;padding-left:1rem}",
  map: null
};
const LightboxFooter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let localizedGalleryCounter;
  let $$restProps = compute_rest_props($$props, ["imagePreset", "title", "description", "gallery"]);
  let $i18n, $$unsubscribe_i18n;
  $$unsubscribe_i18n = subscribe(i18n, (value) => $i18n = value);
  let { imagePreset } = $$props;
  let { title = "" } = $$props;
  let { description = "" } = $$props;
  let { gallery = null } = $$props;
  const generateLocalizedGalleryCounter = (i18n2, gallery2) => {
    if (gallery2 !== null) {
      return i18n2.generateLocalizedGalleryCounter(gallery2.activeImage, gallery2.imageCount);
    }
  };
  if ($$props.imagePreset === void 0 && $$bindings.imagePreset && imagePreset !== void 0)
    $$bindings.imagePreset(imagePreset);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.gallery === void 0 && $$bindings.gallery && gallery !== void 0)
    $$bindings.gallery(gallery);
  $$result.css.add(css$6);
  localizedGalleryCounter = generateLocalizedGalleryCounter($i18n, gallery);
  $$unsubscribe_i18n();
  return `<div${spread([{ class: "svelte-lightbox-footer" }, escape_object($$restProps)], {
    classes: (imagePreset === "fullscreen" ? "fullscreen" : "") + " svelte-6fc1ka"
  })}><h2><!-- HTML_TAG_START -->${title}<!-- HTML_TAG_END --></h2>
    <h5><!-- HTML_TAG_START -->${description}<!-- HTML_TAG_END --></h5>
    ${gallery !== null ? `<p>${escape(localizedGalleryCounter)}</p>` : ``}
</div>`;
});
const ModalCover_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: `div.svelte-lightbox-overlay.svelte-7wg54p{position:fixed;z-index:1000000!important;background-color:rgba(43, 39, 45, 0.87);top:0;bottom:0;left:0;right:0;overflow:hidden;width:100%;height:100%;display:flex;align-items:center;justify-content:center}div.svelte-lightbox-overlay.svelte-7wg54p::before{content:'';position:absolute;top:0;bottom:0;left:0;right:0;opacity:0;z-index:-1}div.svelte-lightbox-overlay.svelte-7wg54p::after{content:"";clear:both;display:table}`,
  map: null
};
const ModalCover = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["transitionDuration"]);
  let { transitionDuration } = $$props;
  if ($$props.transitionDuration === void 0 && $$bindings.transitionDuration && transitionDuration !== void 0)
    $$bindings.transitionDuration(transitionDuration);
  $$result.css.add(css$5);
  return `<div${spread([{ class: "svelte-lightbox-overlay" }, escape_object($$restProps)], { classes: "svelte-7wg54p" })}>${slots.default ? slots.default({}) : ``}
</div>`;
});
const Modal_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: "div.svelte-lightbox-main.svelte-891jqp{position:relative;max-width:100%;max-height:100%;height:auto;width:auto;background-color:transparent}div.svelte-lightbox-main.fullscreen.svelte-891jqp{height:inherit;width:inherit;max-height:inherit;max-width:inherit}",
  map: null
};
const Modal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["transitionDuration", "imagePreset"]);
  let { transitionDuration } = $$props;
  let { imagePreset } = $$props;
  if ($$props.transitionDuration === void 0 && $$bindings.transitionDuration && transitionDuration !== void 0)
    $$bindings.transitionDuration(transitionDuration);
  if ($$props.imagePreset === void 0 && $$bindings.imagePreset && imagePreset !== void 0)
    $$bindings.imagePreset(imagePreset);
  $$result.css.add(css$4);
  return `<div${spread([{ class: "svelte-lightbox-main" }, escape_object($$restProps)], {
    classes: (imagePreset === "fullscreen" ? "fullscreen" : "") + " " + (imagePreset === "scroll" ? "scroll" : "") + " svelte-891jqp"
  })}>${slots.default ? slots.default({}) : ``}
</div>`;
});
const PreviousImageButton_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "button.svelte-w1dh06{background:transparent;border:none;font-size:1rem;width:50%;height:100%}button.svelte-w1dh06:active{background:transparent}button.svelte-w1dh06:disabled{color:gray}button:disabled.hideDisabled.svelte-w1dh06{visibility:hidden}svg.svelte-w1dh06{height:5rem}.previous-button.svelte-w1dh06{position:absolute;top:0;bottom:0;left:0;right:50%;z-index:4;text-align:left}.arrow.svelte-w1dh06{fill:none;stroke:var(--svelte-lightbox-arrows-color);stroke-linecap:round;stroke-linejoin:bevel;stroke-width:1.5px;margin:10px}",
  map: null
};
const PreviousImageButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { activeImage } = $$props;
  let { character } = $$props;
  if ($$props.activeImage === void 0 && $$bindings.activeImage && activeImage !== void 0)
    $$bindings.activeImage(activeImage);
  if ($$props.character === void 0 && $$bindings.character && character !== void 0)
    $$bindings.character(character);
  $$result.css.add(css$3);
  return `<button ${character !== "loop" && activeImage === 0 ? "disabled" : ""} class="${["previous-button svelte-w1dh06", character === "hide" ? "hideDisabled" : ""].join(" ").trim()}"><svg viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"svelte-w1dh06"}"><g><path class="${"arrow svelte-w1dh06"}" d="${"M8.7,7.22,4.59,11.33a1,1,0,0,0,0,1.41l4,4"}"></path></g></svg>
</button>`;
});
const NextImageButton_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "button.svelte-1a1bwoj{background:transparent;border:none;font-size:1rem;width:50%;height:100%}button.svelte-1a1bwoj:active{background:transparent}button.svelte-1a1bwoj:disabled{color:gray}button:disabled.hideDisabled.svelte-1a1bwoj{visibility:hidden}svg.svelte-1a1bwoj{height:5rem}.next-button.svelte-1a1bwoj{position:absolute;top:0;bottom:0;right:0;z-index:4;text-align:right}.arrow.svelte-1a1bwoj{fill:none;stroke:var(--svelte-lightbox-arrows-color);stroke-linecap:round;stroke-linejoin:bevel;stroke-width:1.5px;margin:10px}",
  map: null
};
const NextImageButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { imageCount } = $$props;
  let { activeImage } = $$props;
  let { character } = $$props;
  if ($$props.imageCount === void 0 && $$bindings.imageCount && imageCount !== void 0)
    $$bindings.imageCount(imageCount);
  if ($$props.activeImage === void 0 && $$bindings.activeImage && activeImage !== void 0)
    $$bindings.activeImage(activeImage);
  if ($$props.character === void 0 && $$bindings.character && character !== void 0)
    $$bindings.character(character);
  $$result.css.add(css$2);
  return `<button ${character !== "loop" && activeImage === imageCount - 1 ? "disabled" : ""} class="${["next-button svelte-1a1bwoj", character === "hide" ? "hideDisabled" : ""].join(" ").trim()}"><svg viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"svelte-1a1bwoj"}"><g><path d="${"M15.3,16.78l4.11-4.11a1,1,0,0,0,0-1.41l-4-4"}" class="${"arrow svelte-1a1bwoj"}"></path></g></svg>
</button>`;
});
const GalleryController = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $arrowsConfigStore, $$unsubscribe_arrowsConfigStore;
  let $activeImageStore, $$unsubscribe_activeImageStore;
  let $imageCountStore, $$unsubscribe_imageCountStore;
  let { imagePreset = "" } = $$props;
  let { imageCountStore } = $$props;
  $$unsubscribe_imageCountStore = subscribe(imageCountStore, (value) => $imageCountStore = value);
  let { activeImageStore } = $$props;
  $$unsubscribe_activeImageStore = subscribe(activeImageStore, (value) => $activeImageStore = value);
  let { arrowsConfigStore } = $$props;
  $$unsubscribe_arrowsConfigStore = subscribe(arrowsConfigStore, (value) => $arrowsConfigStore = value);
  if ($$props.imagePreset === void 0 && $$bindings.imagePreset && imagePreset !== void 0)
    $$bindings.imagePreset(imagePreset);
  if ($$props.imageCountStore === void 0 && $$bindings.imageCountStore && imageCountStore !== void 0)
    $$bindings.imageCountStore(imageCountStore);
  if ($$props.activeImageStore === void 0 && $$bindings.activeImageStore && activeImageStore !== void 0)
    $$bindings.activeImageStore(activeImageStore);
  if ($$props.arrowsConfigStore === void 0 && $$bindings.arrowsConfigStore && arrowsConfigStore !== void 0)
    $$bindings.arrowsConfigStore(arrowsConfigStore);
  $$unsubscribe_arrowsConfigStore();
  $$unsubscribe_activeImageStore();
  $$unsubscribe_imageCountStore();
  return `

<div style="display: contents; --svelte-lightbox-arrows-color:${escape($arrowsConfigStore.color, true)};">${validate_component(PreviousImageButton, "PreviousImageButton").$$render(
    $$result,
    {
      activeImage: $activeImageStore,
      character: $arrowsConfigStore.character
    },
    {},
    {}
  )}</div>

${slots.default ? slots.default({}) : ``}

<div style="display: contents; --svelte-lightbox-arrows-color:${escape($arrowsConfigStore.color, true)};">${validate_component(NextImageButton, "NextImageButton").$$render(
    $$result,
    {
      activeImage: $activeImageStore,
      imageCount: $imageCountStore,
      character: $arrowsConfigStore.character
    },
    {},
    {}
  )}</div>`;
});
const Gallery = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let gallery;
  let $$slots = compute_slots(slots);
  let $activeImageStore, $$unsubscribe_activeImageStore;
  let $imageCountStore, $$unsubscribe_imageCountStore;
  let { title = "" } = $$props;
  let { description = "" } = $$props;
  let { imagePreset = "" } = $$props;
  let { customization = {} } = $$props;
  let { transitionDuration = 300 } = $$props;
  let { keepBodyScroll = false } = $$props;
  let { enableImageExpand = false } = $$props;
  let { enableEscapeToClose = true } = $$props;
  let { enableClickToClose = false } = $$props;
  let { showCloseButton = true } = $$props;
  let { isVisible = false } = $$props;
  let { activeImage = 0 } = $$props;
  let { arrowsConfig = {
    color: "black",
    character: "",
    enableKeyboardControl: true
  } } = $$props;
  let images = [];
  let thumbnailCount = 0;
  const imageCountStore = writable(images.length);
  $$unsubscribe_imageCountStore = subscribe(imageCountStore, (value) => $imageCountStore = value);
  const activeImageStore = writable(activeImage);
  $$unsubscribe_activeImageStore = subscribe(activeImageStore, (value) => $activeImageStore = value);
  const arrowsConfigStore = writable(arrowsConfig);
  const toggle = () => {
    isVisible = !isVisible;
  };
  const open = () => {
    isVisible = true;
  };
  const openImage = (imageId) => {
    open();
    activeImage = imageId;
  };
  const close = () => {
    isVisible = false;
  };
  const keepOrEmptyImageList = (isVisible2) => {
    if (!isVisible2)
      images = [];
  };
  const programmaticController = { toggle, open, close, openImage };
  setContext("activeImage", activeImageStore);
  setContext("imageCounter", (image) => {
    image.id = images.length;
    images = [...images, image];
    set_store_value(imageCountStore, $imageCountStore = images.length, $imageCountStore);
    return $imageCountStore - 1;
  });
  setContext("thumbnailCounter", () => {
    return thumbnailCount++;
  });
  setContext("openImage", openImage);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.imagePreset === void 0 && $$bindings.imagePreset && imagePreset !== void 0)
    $$bindings.imagePreset(imagePreset);
  if ($$props.customization === void 0 && $$bindings.customization && customization !== void 0)
    $$bindings.customization(customization);
  if ($$props.transitionDuration === void 0 && $$bindings.transitionDuration && transitionDuration !== void 0)
    $$bindings.transitionDuration(transitionDuration);
  if ($$props.keepBodyScroll === void 0 && $$bindings.keepBodyScroll && keepBodyScroll !== void 0)
    $$bindings.keepBodyScroll(keepBodyScroll);
  if ($$props.enableImageExpand === void 0 && $$bindings.enableImageExpand && enableImageExpand !== void 0)
    $$bindings.enableImageExpand(enableImageExpand);
  if ($$props.enableEscapeToClose === void 0 && $$bindings.enableEscapeToClose && enableEscapeToClose !== void 0)
    $$bindings.enableEscapeToClose(enableEscapeToClose);
  if ($$props.enableClickToClose === void 0 && $$bindings.enableClickToClose && enableClickToClose !== void 0)
    $$bindings.enableClickToClose(enableClickToClose);
  if ($$props.showCloseButton === void 0 && $$bindings.showCloseButton && showCloseButton !== void 0)
    $$bindings.showCloseButton(showCloseButton);
  if ($$props.isVisible === void 0 && $$bindings.isVisible && isVisible !== void 0)
    $$bindings.isVisible(isVisible);
  if ($$props.activeImage === void 0 && $$bindings.activeImage && activeImage !== void 0)
    $$bindings.activeImage(activeImage);
  if ($$props.arrowsConfig === void 0 && $$bindings.arrowsConfig && arrowsConfig !== void 0)
    $$bindings.arrowsConfig(arrowsConfig);
  if ($$props.programmaticController === void 0 && $$bindings.programmaticController && programmaticController !== void 0)
    $$bindings.programmaticController(programmaticController);
  {
    activeImageStore.set(activeImage);
  }
  {
    arrowsConfigStore.set(arrowsConfig);
  }
  {
    keepOrEmptyImageList(isVisible);
  }
  images[$activeImageStore]?.title || title || "";
  images[$activeImageStore]?.description || description || "";
  gallery = {
    imageCount: $imageCountStore,
    activeImage: $activeImageStore
  };
  $$unsubscribe_activeImageStore();
  $$unsubscribe_imageCountStore();
  return `${$$slots.thumbnail ? `${slots.thumbnail ? slots.thumbnail({}) : ``}` : ``}

${isVisible ? `${validate_component(BodyChild, "BodyChild").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(ModalCover, "ModalCover").$$render($$result, Object.assign({}, { transitionDuration }, customization.coverProps || {}), {}, {
        default: () => {
          return `${validate_component(Modal, "Modal").$$render($$result, Object.assign({}, { imagePreset }, { transitionDuration }, customization.lightboxProps || {}), {}, {
            default: () => {
              return `${validate_component(LightboxHeader, "Header").$$render(
                $$result,
                Object.assign(
                  {},
                  { imagePreset },
                  { showCloseButton },
                  { enableEscapeToClose },
                  {
                    closeButtonProps: customization.closeButtonProps
                  },
                  customization.lightboxHeaderProps || {}
                ),
                {},
                {}
              )}

                    ${validate_component(LightboxBody, "Body").$$render($$result, { imagePreset, enableImageExpand }, {}, {
                default: () => {
                  return `${validate_component(GalleryController, "GalleryController").$$render(
                    $$result,
                    {
                      imagePreset,
                      imageCountStore,
                      activeImageStore,
                      arrowsConfigStore
                    },
                    {},
                    {
                      default: () => {
                        return `${slots.default ? slots.default({}) : ``}`;
                      }
                    }
                  )}`;
                }
              })}

                ${validate_component(LightboxFooter, "Footer").$$render($$result, Object.assign({}, { imagePreset }, { title }, { description }, { gallery }, customization.lightboxFooterProps || {}), {}, {})}`;
            }
          })}`;
        }
      })}`;
    }
  })}` : ``}`;
});
const GalleryThumbnail_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "div.svelte-hpqpx9{position:static;cursor:zoom-in}.svelte-lightbox-thumbnail > *{max-width:100%;height:auto}",
  map: null
};
const GalleryThumbnail = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["id"]);
  let { id } = $$props;
  getContext("openImage");
  if (!id) {
    id = getContext("thumbnailCounter")();
  }
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  $$result.css.add(css$1);
  return `<div${spread([escape_object($$restProps)], {
    classes: "svelte-lightbox-thumbnail svelte-hpqpx9"
  })}>${slots.default ? slots.default({}) : ``}
</div>`;
});
const GalleryImage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["title", "description"]);
  let $activeImageStore, $$unsubscribe_activeImageStore;
  let { title = "" } = $$props;
  let { description = "" } = $$props;
  const activeImageStore = getContext("activeImage");
  $$unsubscribe_activeImageStore = subscribe(activeImageStore, (value) => $activeImageStore = value);
  const imageId = getContext("imageCounter")({ title, description });
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  $$unsubscribe_activeImageStore();
  return `${$activeImageStore === imageId ? `${slots.default ? slots.default({ ...$$restProps }) : ``}` : ``}`;
});
const ProductInfo_svelte_svelte_type_style_lang = "";
const css = {
  code: '.info-sect.svelte-7icmi4.svelte-7icmi4{margin:50px 0 100px}.info-sect.svelte-7icmi4 .b-tab.svelte-7icmi4{display:none}.info-sect.svelte-7icmi4 .b-tab.active.svelte-7icmi4{display:block}.info-sect.svelte-7icmi4 .b-nav.svelte-7icmi4{display:flex}.info-sect.svelte-7icmi4 .b-nav-tab.svelte-7icmi4{padding:20px;flex-grow:1;text-align:center;color:#0f0f0f;font-size:14px;font-family:"Rational Display", sans-serif;text-decoration:none;border:1px solid #dbdbdb;border-bottom:0;transition:0.3s}.info-sect.svelte-7icmi4 .b-nav-tab.svelte-7icmi4:first-of-type{border-radius:12px 0 0 0}.info-sect.svelte-7icmi4 .b-nav-tab.svelte-7icmi4:last-of-type{border-radius:0 12px 0 0}.info-sect.svelte-7icmi4 .b-nav-tab.active.svelte-7icmi4{font-weight:500;background:#dcdcd2;border-color:#dcdcd2}.info-row.svelte-7icmi4.svelte-7icmi4{display:flex;justify-content:space-between}.info-tab.svelte-7icmi4.svelte-7icmi4{padding:35px 48px;border:1px solid #dbdbdb;border-radius:0 0 12px 12px;width:480px}.info-tab-product.svelte-7icmi4.svelte-7icmi4{font-size:20px;font-weight:500;color:#000000;font-family:"Rational Display", sans-serif;margin:0}.info-tab-share.svelte-7icmi4.svelte-7icmi4{margin:10px 0 25px}.info-tab-share.svelte-7icmi4 a.svelte-7icmi4{color:#107cf8;font-size:10px;font-family:"Rational Display", sans-serif}.info-tab-desc.svelte-7icmi4.svelte-7icmi4{padding:0 0 80px 17px;font-family:"Rational Display", sans-serif;font-size:13px}.info-tab-desc.svelte-7icmi4 li.svelte-7icmi4{margin:10px 0}.info-tab-available.svelte-7icmi4.svelte-7icmi4{margin-top:24px}.info-tab-available.svelte-7icmi4 span.svelte-7icmi4{font-size:11px;font-weight:300;font-family:"Rational Display", sans-serif;margin-bottom:10px;display:inline-block}.info-tab-available.svelte-7icmi4 div.svelte-7icmi4{display:flex;gap:10px}.info-tab-soft.svelte-7icmi4.svelte-7icmi4{padding-left:18px;padding-right:18px}.info-tab-soft-version.svelte-7icmi4.svelte-7icmi4{display:flex;justify-content:space-between;align-items:center}.info-tab-soft-version-icon.svelte-7icmi4.svelte-7icmi4{vertical-align:middle;display:inline-block;margin-left:14px}.info-tab-soft-version.svelte-7icmi4 p.svelte-7icmi4{margin:0;font-size:16px;font-family:"Rational Display", sans-serif}.info-tab-soft-date.svelte-7icmi4.svelte-7icmi4{display:flex;justify-content:space-between;align-items:flex-end;margin:20px 0 16px;font-family:"Rational Display", sans-serif}.info-tab-soft-date.svelte-7icmi4 p.svelte-7icmi4{margin:0}.info-tab-soft-date.svelte-7icmi4 a.svelte-7icmi4{color:#107CF8;text-decoration:none;font-size:14px}.info-tab-soft-info.svelte-7icmi4.svelte-7icmi4{border:1px solid #cfcfcf;border-radius:12px;padding:20px}.info-tab-soft-links.svelte-7icmi4.svelte-7icmi4{margin:30px 0}.info-tab-soft-chars.svelte-7icmi4.svelte-7icmi4{margin:30px 0}.info-tab-soft-chars.svelte-7icmi4 p.svelte-7icmi4{margin:10px 0}.info-tab-soft-chars.svelte-7icmi4 p span.svelte-7icmi4{color:#CE1212}.info-tab-soft-change-heading.svelte-7icmi4.svelte-7icmi4{font-size:14px}.info-tab-soft-change.svelte-7icmi4 ul.svelte-7icmi4{background:#f3f3f3;border:1px solid #e3e3e3;border-radius:12px;padding:20px 20px 20px 40px}',
  map: null
};
const ProductInfo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<section class="${"info-sect svelte-7icmi4"}"><div class="${"container"}"><div class="${"info-row svelte-7icmi4"}"><div class="${"info-col"}">${validate_component(Gallery, "LightboxGallery").$$render($$result, {}, {}, {
    thumbnail: () => {
      return `<div class="${"sample-class-1"}">${validate_component(GalleryThumbnail, "GalleryThumbnail").$$render($$result, {}, {}, {
        default: () => {
          return `<img src="${"/img/product/x1.svg"}" alt="${"Simple lightbox"}">`;
        }
      })}</div>
          `;
    },
    default: () => {
      return `${validate_component(GalleryImage, "GalleryImage").$$render($$result, {}, {}, {
        default: () => {
          return `<img src="${"/img/product/x1.svg"}" alt="${"Simple lightbox"}">`;
        }
      })}
          ${validate_component(GalleryImage, "GalleryImage").$$render($$result, {}, {}, {
        default: () => {
          return `<img src="${"/img/product/x2.svg"}" alt="${"Simple lightbox"}">`;
        }
      })}
          ${validate_component(GalleryImage, "GalleryImage").$$render($$result, {}, {}, {
        default: () => {
          return `<img src="${"/img/product/x3.svg"}" alt="${"Simple lightbox"}">`;
        }
      })}`;
    }
  })}</div>
      <div class="${"info-col"}"><nav class="${"b-nav svelte-7icmi4"}"><a href="${"#product"}" data-tab="${"product"}" class="${"b-nav-tab active svelte-7icmi4"}">Product</a>
          <a href="${"#soft"}" data-tab="${"soft"}" class="${"b-nav-tab svelte-7icmi4"}">Software</a></nav>
        <div id="${"product"}" class="${"b-tab active svelte-7icmi4"}"><div class="${"info-tab svelte-7icmi4"}"><p class="${"info-tab-product svelte-7icmi4"}">HDBOX X1</p>
            <p class="${"info-tab-share svelte-7icmi4"}"><a href="${""}" class="${"svelte-7icmi4"}">Share the product with your friends</a></p>
            <ul class="${"info-tab-desc svelte-7icmi4"}"><li class="${"svelte-7icmi4"}">The new Mediastar zenon brings the best of TV in a powerful experience that will</li>
              <li class="${"svelte-7icmi4"}">together with your favorite Apple devices and</li>
              <li class="${"svelte-7icmi4"}">services — in a powerful experience that will</li>
              <li class="${"svelte-7icmi4"}">transform your living room.</li></ul>
            <a href="${""}" class="${"btn btn-red-fill"}">Now in the markets!</a>
            <div class="${"info-tab-available svelte-7icmi4"}"><span class="${"svelte-7icmi4"}">Available in:</span>
              <div class="${"svelte-7icmi4"}"><img src="${"/img/product/iraq.svg"}" alt="${""}">
                <img src="${"/img/product/iran.svg"}" alt="${""}">
                <img src="${"/img/product/turkey.svg"}" alt="${""}"></div></div></div></div>
        <div id="${"soft"}" class="${"b-tab svelte-7icmi4"}"><div class="${"info-tab info-tab-soft svelte-7icmi4"}"><p class="${"info-tab-product svelte-7icmi4"}">HDBOX X1</p>
            <div class="${"info-tab-soft-date svelte-7icmi4"}"><p class="${"svelte-7icmi4"}">LATEST BUILD
                <br>
                May 26, 2021 14:52
              </p>
              <a href="${""}" class="${"svelte-7icmi4"}">How to use ?</a></div>
            <div class="${"info-tab-soft-info svelte-7icmi4"}"><div class="${"info-tab-soft-version svelte-7icmi4"}"><p class="${"svelte-7icmi4"}">HDBOX X1 v11.32.1 <img src="${"/img/product/export.svg"}" class="${"info-tab-soft-version-icon svelte-7icmi4"}" alt="${""}"></p>
                <p class="${"svelte-7icmi4"}">Downloads: 5533</p></div>
              <div class="${"info-tab-soft-links svelte-7icmi4"}"><a href="${""}">Download build (1.36 GB)</a>
                <a href="${""}">How to update</a></div>
              <div class="${"info-tab-soft-chars svelte-7icmi4"}"><p class="${"svelte-7icmi4"}"><span class="${"svelte-7icmi4"}">Version:</span>
                  11.32.1
                </p>
                <p class="${"svelte-7icmi4"}"><span class="${"svelte-7icmi4"}">File name:</span>
                  HDBOX X1-11.32.1-20210526.zip
                </p>
                <p class="${"svelte-7icmi4"}"><span class="${"svelte-7icmi4"}">Date:</span>
                  May 26, 2021 14:52 GMT
                </p>
                <p class="${"svelte-7icmi4"}"><span class="${"svelte-7icmi4"}">Downloads:</span>
                  5533
                </p></div>
              <div class="${"info-tab-soft-change svelte-7icmi4"}"><p class="${"info-tab-soft-change-heading svelte-7icmi4"}">Changelog:</p>
                <ul class="${"svelte-7icmi4"}"><li>May security patch</li>
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

import { c as create_ssr_component } from "./index.js";
const Features_svelte_svelte_type_style_lang = "";
const css = {
  code: '.feature-grid.svelte-u6ydss.svelte-u6ydss{display:grid;gap:16px;grid-template-columns:1fr 2fr 1.4fr;grid-template-rows:1fr 0.5fr 0.5fr 0fr;grid-auto-flow:row;grid-template-areas:"Left TVLG H265" "Perks TVLG WIFI" "Perks VODPVR TimeShift" "YT HDMIUSB ForeverTV"}.feature-grid.svelte-u6ydss .Left.svelte-u6ydss{grid-area:Left;display:flex;flex-direction:column;align-items:center;padding:28px 20px}.feature-grid.svelte-u6ydss .Left img.svelte-u6ydss{margin:20px auto;padding-right:30px}.feature-grid.svelte-u6ydss .Left .feature-item-text.svelte-u6ydss{margin-top:auto}.feature-grid.svelte-u6ydss .WIFI.svelte-u6ydss{grid-area:WIFI;display:flex;align-items:center;gap:10px;padding-right:10px}.feature-grid.svelte-u6ydss .WIFI .feature-item-text.svelte-u6ydss{font-size:22px}.feature-grid.svelte-u6ydss .TimeShift.svelte-u6ydss{grid-area:TimeShift;display:flex}.feature-grid.svelte-u6ydss .TimeShift img.svelte-u6ydss{max-width:210px;margin:auto}.feature-grid.svelte-u6ydss .VODPVR.svelte-u6ydss{display:grid;grid-template-columns:1fr 1fr;grid-template-rows:1fr;grid-auto-flow:row;grid-template-areas:". .";grid-area:VODPVR;border:0;padding:0;gap:16px}.feature-grid.svelte-u6ydss .VODPVR .feature-item-inner.svelte-u6ydss{border:1px solid #dbdbdb;padding:56px 48px;border-radius:12px}.feature-grid.svelte-u6ydss .Perks.svelte-u6ydss{grid-area:Perks}.feature-grid.svelte-u6ydss .YT.svelte-u6ydss{grid-area:YT;display:flex;justify-content:center;align-items:center}.feature-grid.svelte-u6ydss .HDMIUSB.svelte-u6ydss{grid-area:HDMIUSB;display:flex;gap:44px;justify-content:center;padding:55px}.feature-grid.svelte-u6ydss .ForeverTV.svelte-u6ydss{grid-area:ForeverTV;background-image:url("/src/Assets/img/other/forever-bg.png");background-size:cover;display:flex;justify-content:center;align-items:center}.feature-grid.svelte-u6ydss .H265.svelte-u6ydss{grid-area:H265;display:flex;flex-direction:column;align-items:center}.feature-grid.svelte-u6ydss .H265 img.svelte-u6ydss{margin:20px auto}.feature-grid.svelte-u6ydss .H265 .feature-item-text.svelte-u6ydss{margin-top:auto}.feature-grid.svelte-u6ydss .TVLG.svelte-u6ydss{grid-area:TVLG;display:flex;flex-direction:column;align-items:center;padding:20px 20px 28px 20px}.feature-grid.svelte-u6ydss .TVLG .feature-item-tv.svelte-u6ydss{border:4px solid black;box-shadow:10px 10px 25px 5px rgba(0, 0, 0, 0.2);display:flex;width:100%}.feature-grid.svelte-u6ydss .TVLG .feature-item-text.svelte-u6ydss{margin-top:auto;font-size:22px}.feature-grid.svelte-u6ydss .TVLG img.svelte-u6ydss{width:100%}.feature-item.svelte-u6ydss.svelte-u6ydss{border:1px solid #dbdbdb;border-radius:12px;padding:28px;text-align:center}.feature-item-text.svelte-u6ydss.svelte-u6ydss{margin:0;font-family:"Rational Display", sans-serif}.feature-item-small.svelte-u6ydss.svelte-u6ydss{display:flex;align-items:center;text-align:left;margin:14px 0}.feature-item-small-icon.svelte-u6ydss.svelte-u6ydss{min-width:18px;margin-right:18px}.feature-item-small-name.svelte-u6ydss.svelte-u6ydss{text-transform:uppercase;font-size:10px}.feature-sect.svelte-u6ydss.svelte-u6ydss{margin-bottom:16px}',
  map: null
};
const Features = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<section class="${"feature-sect svelte-u6ydss"}"><div class="${"container"}"><div class="${"section-desc"}"><h2 class="${"h2"}">Delivering extraordinary experiences in a small package</h2>
      <p class="${"text"}">Mediastar devices use high quality display resolutions to provide users with a luxurious experience.
      </p></div>
    <div class="${"feature-grid svelte-u6ydss"}"><div class="${"feature-item Left svelte-u6ydss"}"><img src="${"/img/icons/channels-black.svg"}" alt="${""}" class="${"svelte-u6ydss"}">
        <p class="${"text feature-item-text svelte-u6ydss"}">The best shows, movies, sports and live TV.</p></div>
      <div class="${"feature-item TVLG svelte-u6ydss"}"><div class="${"feature-item-tv svelte-u6ydss"}"><img src="${"/img/other/avatar.jpg"}" alt="${""}" class="${"svelte-u6ydss"}"></div>
        <p class="${"text feature-item-text svelte-u6ydss"}">Unlock the world of Higher Definition</p></div>
      <div class="${"feature-item H265 svelte-u6ydss"}"><img src="${"/img/icons/full-hd-red.svg"}" alt="${""}" class="${"svelte-u6ydss"}">
        <p class="${"text feature-item-text svelte-u6ydss"}">High-Efficiency Video Coding support and FHD resolution</p></div>
      <div class="${"feature-item Perks svelte-u6ydss"}"><div class="${"feature-item-small svelte-u6ydss"}"><img src="${"/img/icons/feature-audio.svg"}" class="${"feature-item-small-icon svelte-u6ydss"}" alt="${""}">
          <span class="${"feature-item-small-name svelte-u6ydss"}">Multi-language audio</span></div>
        <div class="${"feature-item-small svelte-u6ydss"}"><img src="${"/img/icons/feature-search.svg"}" class="${"feature-item-small-icon svelte-u6ydss"}" alt="${""}">
          <span class="${"feature-item-small-name svelte-u6ydss"}">Blind search supported</span></div>
        <div class="${"feature-item-small svelte-u6ydss"}"><img src="${"/img/icons/feature-satellite.svg"}" class="${"feature-item-small-icon svelte-u6ydss"}" alt="${""}">
          <span class="${"feature-item-small-name svelte-u6ydss"}">Multi satellite search. Network search</span></div>
        <div class="${"feature-item-small svelte-u6ydss"}"><img src="${"/img/icons/feature-update.svg"}" class="${"feature-item-small-icon svelte-u6ydss"}" alt="${""}">
          <span class="${"feature-item-small-name svelte-u6ydss"}">Software and addition/ data upgrade through USB</span></div>
        <div class="${"feature-item-small svelte-u6ydss"}"><img src="${"/img/icons/feature-ratio.svg"}" class="${"feature-item-small-icon svelte-u6ydss"}" alt="${""}">
          <span class="${"feature-item-small-name svelte-u6ydss"}">Variable aspect ratio (4:3.169) with Pan &amp; scan vector or letter box option
          </span></div>
        <div class="${"feature-item-small svelte-u6ydss"}"><img src="${"/img/icons/feature-storing.svg"}" class="${"feature-item-small-icon svelte-u6ydss"}" alt="${""}">
          <span class="${"feature-item-small-name svelte-u6ydss"}">Storing memory: more than 100 satellite, 4000 transponders and 8000 channels
          </span></div></div>
      <div class="${"feature-item VODPVR svelte-u6ydss"}"><div class="${"feature-item-inner svelte-u6ydss"}"><img src="${"/img/icons/vod.svg"}" alt="${""}" class="${"svelte-u6ydss"}"></div>
        <div class="${"feature-item-inner svelte-u6ydss"}"><img src="${"/img/icons/pvr.svg"}" alt="${""}" class="${"svelte-u6ydss"}"></div></div>
      <div class="${"feature-item WIFI svelte-u6ydss"}"><img src="${"/img/icons/wi-fi.svg"}" alt="${""}" class="${"svelte-u6ydss"}">
        <p class="${"text feature-item-text svelte-u6ydss"}">Internal Wi-Fi Support</p></div>
      <div class="${"feature-item TimeShift svelte-u6ydss"}"><img src="${"/img/icons/timeshift.svg"}" alt="${""}" class="${"svelte-u6ydss"}"></div>
      <div class="${"feature-item YT svelte-u6ydss"}"><img src="${"/img/icons/youtube-black.svg"}" alt="${""}" class="${"svelte-u6ydss"}"></div>
      <div class="${"feature-item HDMIUSB svelte-u6ydss"}"><img src="${"/img/icons/hdmi-black.svg"}" alt="${""}" class="${"svelte-u6ydss"}">
        <img src="${"/img/icons/usb.svg"}" alt="${""}" class="${"svelte-u6ydss"}"></div>
      <div class="${"feature-item ForeverTV svelte-u6ydss"}"><img src="${"/img/icons/forevertv-white-big.svg"}" alt="${""}" class="${"svelte-u6ydss"}"></div></div></div>
</section>`;
});
export {
  Features as F
};

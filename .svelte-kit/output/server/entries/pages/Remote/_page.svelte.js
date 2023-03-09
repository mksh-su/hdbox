import { c as create_ssr_component, v as validate_component } from "../../../chunks/index.js";
import { H as Header, F as Footer } from "../../../chunks/Footer.js";
const Breadcrumbs_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: '.breadcrumbs-row.svelte-g6dyh7.svelte-g6dyh7{font-family:"Rational Display", sans-serif;font-size:14px;font-weight:300;padding:14px 0;border-bottom:1px solid #dcdcd2}.breadcrumbs.svelte-g6dyh7 a.breadcrumbs-item.svelte-g6dyh7{color:#a6a6a6;text-decoration:none}.breadcrumbs.svelte-g6dyh7 span.breadcrumbs-item.svelte-g6dyh7{color:#484848;font-weight:400}',
  map: null
};
const Breadcrumbs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="${"breadcrumbs svelte-g6dyh7"}"><div class="${"container"}"><div class="${"breadcrumbs-row svelte-g6dyh7"}"><a href="${""}" class="${"breadcrumbs-item svelte-g6dyh7"}">HOME</a>
      /
      <a href="${""}" class="${"breadcrumbs-item svelte-g6dyh7"}">How to use</a>
      /
      <span class="${"breadcrumbs-item svelte-g6dyh7"}">Remote Control Unit (RU)</span></div></div>
</div>`;
});
const Remote_svelte_svelte_type_style_lang = "";
const css = {
  code: '.usage.svelte-w0jeyd.svelte-w0jeyd{margin:100px 0}.usage-row.svelte-w0jeyd.svelte-w0jeyd{display:flex}.usage-col.svelte-w0jeyd.svelte-w0jeyd:last-of-type{margin-left:auto}.usage.svelte-w0jeyd .h1.svelte-w0jeyd{font-weight:500;font-size:32px;margin:0}.usage-list.svelte-w0jeyd.svelte-w0jeyd{list-style:none;padding-left:0;font-family:"Rational Display", sans-serif;font-weight:500}',
  map: null
};
const Remote = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"usage svelte-w0jeyd"}"><div class="${"container"}"><div class="${"usage-row svelte-w0jeyd"}"><div class="${"usage-col svelte-w0jeyd"}"><h1 class="${"h1 svelte-w0jeyd"}">Remote Control Unit (RU)</h1>
        <ol class="${"usage-list svelte-w0jeyd"}"><li>1. MUTE: Mute audio.</li>
          <li>2. POWER:</li>
          <li>3. Display: Set the HDMI mode.</li>
          <li>4. TV/R: Switch between TV and RADIO.</li>
          <li>5. TIMER: Setup event timer.</li>
          <li>6. MODE: Set the display format.</li>
          <li>7. NUMERIC KEY (0-9): Enter a TV/radio channel number or menu option number.</li>
          <li>8. Recall: Show the previous viewed channels list. Or switch to the previous viewed channel.</li>
          <li>9. F1: Accessorial function.</li>
          <li>10. Sub: Display the subtitle language list.</li>
          <li>11. ZOOM: Picture Zooming function.</li>
          <li>12. Motor: Enter motor control.</li>
          <li>13. TXT: Display the teletext.</li>
          <li>14. AUDIO: Display the audio list.</li>
          <li>15. Net: Set the network function.</li>
          <li>16. Wi-Fi: Set the wifi connected.</li>
          <li>17. INFO: Display the program information.</li>
          <li>18. MENU: Activate main menu.</li>
          <li>19. EXIT: Exit current menu step by step.</li>
          <li>20. SAT: Display the Satellite list.</li>
          <li>21. FIND: Quickly find channels which you want.</li>
          <li>22. ▲ / ▼: Changes program.</li>
          <li>23. ◄ / ► Change volume in viewing mode.</li>
          <li>24. OK: Confirm the selected operation or display the channel list while watching a program.</li>
          <li>25. Spectrum</li>
          <li>26. M</li>
          <li>27. FAV: Display favorite channel list you set before.</li>
          <li>28. USB: Enter USB menu.</li>
          <li>29. VOD.</li>
          <li>30. YouTube.</li>
          <li>31. HD: Display HD channels.</li>
          <li>32. EPG (Electronic Program Guide): Display the program guide.</li>
          <li>33. PAUSE: Freeze the picture.</li>
          <li>34. SLEEP: Set the sleep time.</li>
          <li>35. ◄◄: Fast rewind. ►►: Fast forward.</li>
          <li>36. I◄◄: Previous. ►►I: Next.</li>
          <li>37. ►: Play.</li>
          <li>38. II: Pause/Time shift.</li>
          <li>39. ■: Stop.</li>
          <li>40. ●: Record.</li>
          <li>41. S/N.</li>
          <li>42. Search</li>
          <li>43. SW</li>
          <li>44. HDIP</li></ol></div>
      <div class="${"usage-col svelte-w0jeyd"}"><img src="${"./img/other/remote.svg"}" class="${"usage-remote"}" alt="${""}"></div></div></div>
</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Header, "Header").$$render($$result, { position: "static" }, {}, {})}
${validate_component(Breadcrumbs, "Breadcrumbs").$$render($$result, {}, {}, {})}
${validate_component(Remote, "Remote").$$render($$result, {}, {}, {})}
${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};

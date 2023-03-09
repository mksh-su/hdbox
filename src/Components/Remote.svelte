<script>
  import CustomBtn from "./CustomBtn.svelte";
</script>

<div class="usage">
  <div class="container">
    <div class="usage-row">
      <div class="usage-col">
        <h1 class="h1">Remote Control Unit (RU)</h1>
        <ol class="usage-list">
          <li>1. MUTE: Mute audio.</li>
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
          <li>44. HDIP</li>
        </ol>
      </div>
      <div class="usage-col">
        <img src="./img/other/remote.svg" class="usage-remote" alt="" />
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  $heading-font: "Rational Display", sans-serif;
  $text-font: "TT Commons", sans-serif;
  $sequel-font: "Sequel100Black-86", sans-serif;
  $red-color: #e81d2c;
  .usage {
    margin: 100px 0;
    &-row {
      display: flex;
    }
    &-col {
      &:last-of-type {
        margin-left: auto;
      }
    }
    .h1 {
      font-weight: 500;
      font-size: 32px;
      margin: 0;
    }
    &-list {
      list-style: none;
      padding-left: 0;
      font-family: $heading-font;
      font-weight: 500;
    }
  }
</style>

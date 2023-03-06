<script>
  // import Logo from "../Assets/Logo.svelte";
</script>

<section class="feature-sect">
  <div class="container">
    <div class="section-desc">
      <h2 class="h2">Delivering extraordinary experiences in a small package</h2>
      <p class="text">
        Mediastar devices use high quality display resolutions to provide users with a luxurious experience.
      </p>
    </div>
    <div class="feature-grid">
      <div class="feature-item Left">
        <img src="./img/icons/channels-black.svg" alt="" />
        <p class="text feature-item-text">The best shows, movies, sports and live TV.</p>
      </div>
      <div class="feature-item TVLG">
        <img src="./img/other/avatar.jpg" alt="" />
        <p class="text feature-item-text">Unlock the world of Higher Definition</p>
      </div>
      <div class="feature-item H265">
        <img src="./img/icons/full-hd-red.svg" alt="" />
        <p class="text feature-item-text">High-Efficiency Video Coding support and FHD resolution</p>
      </div>
      <div class="feature-item Perks">
        <div class="feature-item-small">
          <img src="./img/icons/feature-audio.svg" class="feature-item-small-icon" alt="" />
          <span class="feature-item-small-name">Multi-language audio</span>
        </div>
        <div class="feature-item-small">
          <img src="./img/icons/feature-search.svg" class="feature-item-small-icon" alt="" />
          <span class="feature-item-small-name">Blind search supported</span>
        </div>
        <div class="feature-item-small">
          <img src="./img/icons/feature-satellite.svg" class="feature-item-small-icon" alt="" />
          <span class="feature-item-small-name">Multi satellite search. Network search</span>
        </div>
        <div class="feature-item-small">
          <img src="./img/icons/feature-update.svg" class="feature-item-small-icon" alt="" />
          <span class="feature-item-small-name">Software and addition/ data upgrade through USB</span>
        </div>
        <div class="feature-item-small">
          <img src="./img/icons/feature-ratio.svg" class="feature-item-small-icon" alt="" />
          <span class="feature-item-small-name">
            Variable aspect ratio (4:3.169) with Pan & scan vector or letter box option
          </span>
        </div>
        <div class="feature-item-small">
          <img src="./img/icons/feature-storing.svg" class="feature-item-small-icon" alt="" />
          <span class="feature-item-small-name">
            Storing memory: more than 100 satellite, 4000 transponders and 8000 channels
          </span>
        </div>
      </div>
      <div class="feature-item VODPVR">
        <div class="feature-item-inner">
          <img src="./img/icons/vod.svg" alt="" />
        </div>
        <div class="feature-item-inner">
          <img src="./img/icons/pvr.svg" alt="" />
        </div>
      </div>
      <div class="feature-item WIFI">
        <img src="./img/icons/wi-fi.svg" alt="" />
        <p class="text feature-item-text">Internal Wi-Fi Support</p>
      </div>
      <div class="feature-item TimeShift">
        <img src="./img/icons/timeshift.svg" alt="" />
      </div>
      <div class="feature-item YT">
        <img src="./img/icons/youtube-black.svg" alt="" />
      </div>
      <div class="feature-item HDMIUSB">
        <img src="./img/icons/hdmi-black.svg" alt="" />
        <img src="./img/icons/usb.svg" alt="" />
      </div>
      <div class="feature-item ForeverTV">
        <img src="./img/icons/forevertv-white-big.svg" alt="" />
      </div>
    </div>
  </div>
</section>

<style lang="scss">
  .feature {
  &-grid {
    display: grid;
    gap: 16px;
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: 1fr 0.5fr 0.5fr 0fr;
    grid-auto-flow: row;
    grid-template-areas:
      "Left TVLG H265"
      "Perks TVLG WIFI"
      "Perks VODPVR TimeShift"
      "YT HDMIUSB ForeverTV";

    .Left {
      grid-area: Left;
      display: flex;
      flex-direction: column;
      align-items: center;
      
      img {
        margin: 20px auto;
      }

      .feature-item-text {
        margin-top: auto;
      }
    }

    .WIFI {
      grid-area: WIFI;
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .TimeShift {
      grid-area: TimeShift;
      display: flex;
    }

    .VODPVR {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr;
      grid-auto-flow: row;
      grid-template-areas: ". .";
      grid-area: VODPVR;
      border: 0;
      padding: 0;

      .feature-item-inner {
        border: 1px solid #dbdbdb;
        padding: 56px 48px;
        border-radius: 12px;
        border-radius: 12px 0 0 12px;

        + .feature-item-inner {
            border-radius: 0 12px 12px 0;
        }
      }
    }

    .Perks {
      grid-area: Perks;
    }

    .YT {
      grid-area: YT;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .HDMIUSB {
      grid-area: HDMIUSB;
      display: flex;
      gap: 44px;
      justify-content: center;
      padding: 55px;
    }

    .ForeverTV {
      grid-area: ForeverTV;
      background-image: url(./img/other/forever-bg.png);
      background-size: cover;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .H265 {
      grid-area: H265;
      display: flex;
      flex-direction: column;
      align-items: center;
      
      img {
        margin: 20px auto;
      }

      .feature-item-text {
        margin-top: auto;
      }
    }

    .TVLG {
      grid-area: TVLG;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 25px 25px 25px 30px;

      img {
        width: 100%;
        box-shadow: 10px 10px 25px 5px rgb(0 0 0 / 20%);
      }

      .feature-item-text {
        margin-top: auto;
        font-size: 22px;
      }
    }
  }
  &-item {
    border: 1px solid #dbdbdb;
    border-radius: 12px;
    padding: 30px;
    text-align: center;
    &-text {
      margin: 0;
    }
    &-small {
      display: flex;
      align-items: center;
      text-align: left;
      margin: 14px 0;
      &-icon {
        min-width: 18px;
        margin-right: 18px;
      }
      &-name {
        text-transform: uppercase;
        font-size: 10px;
      }
    }
  }
}
</style>

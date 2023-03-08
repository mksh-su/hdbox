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
        <div class="feature-item-tv">
          <img src="./img/other/avatar.jpg" alt="" />
        </div>
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
  $heading-font: "Rational Display", sans-serif;
  $text-font: "TT Commons", sans-serif;
  $sequel-font: "Sequel100Black-86", sans-serif;
  $red-color: #e81d2c;
  .feature {
    &-grid {
      display: grid;
      gap: 16px;
      grid-template-columns: 1fr 2fr 1.4fr;
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
        padding: 28px 20px;

        img {
          margin: 20px auto;
          padding-right: 30px;
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
        padding-right: 10px;

        .feature-item-text {
          font-size: 22px;
        }
      }

      .TimeShift {
        grid-area: TimeShift;
        display: flex;

        img {
          max-width: 210px;
          margin: auto;
        }
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
        gap: 16px;

        .feature-item-inner {
          border: 1px solid #dbdbdb;
          padding: 56px 48px;
          border-radius: 12px;
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
        background-image: url("/src/Assets/img/other/forever-bg.png");
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
        padding: 20px 20px 28px 20px;

        .feature-item-tv {
          border: 4px solid black;
          box-shadow: 10px 10px 25px 5px rgb(0 0 0 / 20%);
          display: flex;
          width: 100%;
        }

        .feature-item-text {
          margin-top: auto;
          font-size: 22px;
        }

        img {
          width: 100%;
        }
      }
    }
    &-item {
      border: 1px solid #dbdbdb;
      border-radius: 12px;
      padding: 28px;
      text-align: center;
      &-text {
        margin: 0;
        font-family: $heading-font;
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

<script>
  import PackagesAvatar from "../Assets/PackagesAvatar.svelte";
  import CustomBtn from "./CustomBtn.svelte";
  let help = [
    { name: "Remote Control Unit (RU). The remote controller with full function.", img: "./img/help/img-1.png", link: "", linkName: "Open" },
    { name: "Smart Share for Windows: Installation, Setup, and Use - PC Software", img: "./img/help/img-2.png", link: "", linkName: "Play" },
    { name: "Ultra HD 4K TV Upscaling - UHD TV Video", img: "./img/help/img-3.png", link: "", linkName: "Play" },
    { name: "Best Picture Settings for your LG 4K or 4K OLED - TV", img: "./img/help/img-4.png", link: "", linkName: "Play" },
    { name: "Connecting LG TV to Google Assistant & Amazon Alexa - LG SmartThinQ", img: "./img/help/img-5.png", link: "", linkName: "Play" },
    { name: "How To Access and Troubleshoot Disney+ On An LG Smart TV- WebOS 6.", img: "./img/help/img-6.png", link: "", linkName: "Play" },
  ];
</script>

<section class="help-sect">
  <div class="container">
    <h3 class="h3">Help Center</h3>
    <div class="help-grid">
      {#each help as item}
        <div class="help-item">
          <div class="help-item-img">
            <img src="{item.img}" alt="" />
          </div>
          <div class="help-item-bottom">
            <a href="item.link" class="help-item-name">{item.name}</a>
            <a class="help-item-link" href="{item.link}">{item.linkName}</a>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style lang="scss">
  $heading-font: "Rational Display", sans-serif;
  $text-font: "TT Commons", sans-serif;
  $sequel-font: "Sequel100Black-86", sans-serif;
  $red-color: #e81d2c;
  .help {
    &-sect {
      margin-bottom: 100px;

      .h3 {
        font-weight: 500;
        font-size: 24px;
      }
    }
    &-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 16px;
      margin-bottom: 130px;
    }
    &-item {
      display: flex;
      flex-direction: column;
      &-img {
        border-radius: 12px 12px 0px 0px;
        position: relative;
        overflow: hidden;
        min-height: 160px;
        img {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          min-height: 100%;
        }
      }
      &-name {
        font-size: 16px;
        font-family: $heading-font;
        font-weight: 500;
        margin: 0;
        padding-bottom: 30px;
        position: relative;
        text-decoration: none;
        color: #484848;
      }
      &-bottom {
        border: 1px solid #dbdbdb;
        border-radius: 0 0 12px 12px;
        padding: 24px 22px 22px;
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        align-items: baseline;
      }
      &-link {
        margin-top: auto;
        font-weight: 400;
        color: #1B1717;
        text-decoration: none;
        position: relative;
        padding-right: 12px;
        font-size: 12px;
        &:after {
          content: "";
          position: absolute;
          display: inline-block;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          height: 7px;
          width: 4px;
          background-image: url(/img/help/arrow-right.svg);
          background-repeat: no-repeat;
          background-size: contain;
          background-position: center;
        }
      }
    }
  }
</style>

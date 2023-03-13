<script>
  import PackagesAvatar from "./../Assets/PackagesAvatar.svelte";
  import CustomBtn from "./CustomBtn.svelte";
  let resellers = [
    { name: "Erbil", img: "./img/reseller/erbil.jpg", person: "Hiersh Nahoer", location: "Erbil, Nishtiman Bazar, New Farhad" },
    { name: "Sulaimani", img: "./img/reseller/sulaimani.jpg", person: "Diyari Muhammad", location: "Sulaimani, Flkay Dastaraka" },
    { name: "Duhok", img: "./img/reseller/duhok.jpg", person: "Bandi Talib", location: "Duhok, Qoj Center, Sport Max Shop" },
    { name: "Kalar", img: "./img/reseller/kalar.jpg", person: "Muhammad Yaseen", location: "Kalar, Bazaar, Hamoodi Shop" },
    { name: "Choman", img: "./img/reseller/choman.jpg", person: "Hiersh Nahoer", location: "Erbil, Nishtiman Bazar, New Farhad" },
  ];
</script>

<section class="reseller-sect">
  <div class="container">
    <h3 class="h3">HDBOX Reseller</h3>
    <div class="reseller-grid">
      {#each resellers as item}
        <div class="reseller-item">
          <div class="reseller-item-img">
            <img src="{item.img}" alt="" />
          </div>
          <div class="reseller-item-bottom">
            <p class="reseller-item-name">{item.name} reseller</p>
            <div class="reseller-item-info">
              <div class="reseller-item-person">{item.person}</div>
              <div class="reseller-item-location"><a href="/">{item.location}</a></div>
              <div class="reseller-item-phone">
                <div class="reseller-item-info-inner">
                  <a href="tel:07704496003">07704496003</a>
                  <a href="tel:07704496003">07704496003</a>
                </div>
              </div>
            </div>
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
  .reseller {
    &-sect {
      margin-top: 30px;
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
        min-height: 200px;
        img {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
      &-name {
        font-size: 18px;
        font-family: $heading-font;
        font-weight: 500;
        text-transform: uppercase;
        margin: 0;
        padding-bottom: 10px;
        position: relative;
        &:after {
          content: "";
          width: 58px;
          height: 1px;
          background-color: #dbdbdb;
          display: inline-block;
          position: absolute;
          bottom: 0;
          left: 0;
        }
      }
      &-info {
        margin-top: 25px;
        display: flex;
        flex-direction: column;
        gap: 14px;

        a {
          color: #0f0f0f;
        }

        &-inner {
          display: flex;
          flex-direction: column;
        }
      }
      &-bottom {
        border: 1px solid #dbdbdb;
        border-radius: 0 0 12px 12px;
        padding: 18px 24px 30px;
        flex-grow: 1;
      }
      &-person,
      &-location,
      &-phone {
        position: relative;
        padding-left: 30px;

        &:before {
          content: "";
          position: absolute;
          width: 16px;
          height: 16px;
          display: inline-block;
          background-size: contain;
          background-position: center;
          background-repeat: no-repeat;
          left: 0;
          top: 0;
        }
      }
      &-person {
        &:before {
          background-image: url(/img/reseller/user.svg);
        }
      }
      &-location {
        &:before {
          background-image: url(/img/reseller/location.svg);
        }
      }
      &-phone {
        &:before {
          background-image: url(/img/reseller/phone.svg);
        }
        a {
          text-decoration: none;
        }
      }
    }
  }
</style>

<script>
  // import Logo from "../Assets/Logo.svelte";
  import CustomBtn from "./CustomBtn.svelte";
</script>

<section class="product-sect">
  <div class="container">
    <div class="section-desc">
      <h2 class="h2">A small box filled with new experiences.</h2>
      <p class="text">
        Mediastar devices use high quality display resolutions to provide users with a luxurious experience.
      </p>
    </div>
    <div class="product-row">
      <div class="product-item">
        <div class="product-item-img">
          <img src="./img/product/m1.svg" alt="" />
        </div>
        <div class="product-item-name"><img src="./img/product/m1-sign.svg" alt="" /></div>
        <p class="product-item-headline">Say hello to your new streming device</p>
        <CustomBtn text="Discover M1" link="#" font_size="lg" />
      </div>
      <div class="product-item">
        <div class="product-item-img">
          <img src="./img/product/x1.svg" alt="" />
        </div>
        <div class="product-item-name"><img src="./img/product/x1-sign.svg" alt="" /></div>
        <p class="product-item-headline">A small box for best experience</p>
        <CustomBtn text="Discover X1" link="#" font_size="lg" />
      </div>
    </div>
    <div class="app-row">
      <div class="app-col">
        <img src="./img/product/app-screen.png" class="app-col-img" alt="" />
      </div>
      <div class="app-col">
        <img src="./img/product/app-logo.svg" alt="" />
        <p class="text">
          Using the XBOX app, you can easily renew and manage your subscriptions, and packages, register your device,
          and check your balance.
        </p>
        <div class="app-link-row">
          <a href="" class="app-link">
            <img src="./img/icons/app-store.svg" alt="" />
          </a>
          <a href="" class="app-link">
            <img src="./img/icons/google-play.svg" alt="" />
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

<style lang="scss">
  $heading-font: "Rational Display", sans-serif;
  $text-font: "TT Commons", sans-serif;
  $sequel-font: "Sequel100Black-86", sans-serif;
  $red-color: #e81d2c;
  .product {
    &-sect {
      margin: 110px 0 130px;
    }
    &-item {
      background: rgba(233, 233, 233, 0.3);
      border-radius: 12px;
      text-align: center;
      flex-grow: 1;
      flex-basis: 50%;
      padding: 40px;
      &-headline {
        font-size: 24px;
        font-weight: 500;
        margin: 18px auto;
        max-width: 260px;
      }
      &-img {
        height: 320px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 0 60px;
        img {
          max-height: 100%;
        }
      }
      &-link {
        color: black;
        font-size: 18px;

        &:after {
          content: "";
          background-image: url("/src/Assets/img/icons/arrow.svg");
          background-position: center;
          background-size: contain;
          width: 10px;
          height: 10px;
          display: inline-block;
          margin-left: 14px;
        }
      }
    }
    &-row {
      display: flex;
      gap: 16px;
    }
  }

  .app {
    &-row {
      display: flex;
      align-items: center;
      border: 1px solid #d9d9d9;
      border-radius: 12px;
      margin-top: 16px;
    }
    &-col {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      flex-basis: 50%;

      .text {
        margin: 18px 0;
        font-weight: 500;
        font-family: $heading-font;
      }

      &:last-of-type {
        padding-right: 120px;
      }
    }
    &-link {
      text-decoration: none;
      transition: .3s;
      &:hover {
        opacity: .8;
      }
      &-row {
        display: flex;
        gap: 16px;
        margin-top: 20px;
      }
    }
  }
</style>

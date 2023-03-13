<script>
  import CustomBtn from "./CustomBtn.svelte";
</script>

<section class="main-sect">
  <div class="container">
    <div class="section-desc">
      <h2 class="h2">Delivering extraordinary experiences in a small package</h2>
      <p class="text">
        Mediastar devices use high quality display resolutions to provide users with a luxurious experience.
      </p>
    </div>

    <div class="main-top">
      <div class="main-item">
        <h3 class="h3">HDBOX</h3>
        <p class="text">
          There's nothing better than watching live TV, movies, or sports. With over 280 channels and packages to choose
          from, the HDBOX has something for everyone.
        </p>
      </div>
    </div>
    <div class="main-bottom">
      <div class="main-item">
        <h2 class="h2">Our mission & approach</h2>
        <p class="text">
          We want to maximize your comfort, make your daily life more effortless and introduce you to the latest
          technologies. Mediastar builds long-lasting, strong devices that are built to endure all kinds of harsh and
          unstable conditions.
        </p>
      </div>
      <div class="main-item">
        <h2 class="h2">Our Values</h2>
        <p class="text">
          We always make sure our customers are satisfied with our products. Mediastar offers high quality products with
          reasonable prices because we care about your comfort and happiness.
        </p>
      </div>
    </div>
  </div>
</section>

<style lang="scss">
  $heading-font: "Rational Display", sans-serif;
  $text-font: "TT Commons", sans-serif;
  $sequel-font: "Sequel100Black-86", sans-serif;
  $red-color: #e81d2c;

  .main {
    &-bottom {
      display: flex;
      gap: 16px;
      margin-bottom: 16px;
      .main-item {
        flex-basis: 50%;
        &:first-of-type {
          background-color: $red-color;
          .h2,
          .text {
            color: white;
          }
        }
        &:last-of-type {
          background-color: #dcdcd2;
        }
      }
    }
    &-item {
      padding: 36px 46px;
      border-radius: 12px;

      .h2 {
        margin-top: 0;
        margin-bottom: 26px;
        line-height: 1.2;
        min-height: 115px;
      }

      .text {
        padding: 0 110px 60px 0;
        font-family: $heading-font;
      }
    }
    &-top {
      background-image: url(/img/about/tv.jpg);
      background-size: cover;
      background-position: center;
      border-radius: 12px;
      margin-bottom: 16px;
      position: relative;
      overflow: hidden;

      &:before {
        content: "";
        height: 100%;
        width: 60%;
        display: inline-block;
        position: absolute;
        background: linear-gradient(90deg, #221714 0%, #221714 45.83%, rgba(34, 23, 20, 0) 100%);
      }
      .h3,
      .text {
        color: white;
        position: relative;
        z-index: 1;
      }
      .h3 {
        font-size: 24px;
        font-weight: 500;
        margin: 0 0 14px;
      }
      .main-item {
        padding: 85px 95px;
        .text {
          max-width: 330px;
          padding: 0;
        }
      }
    }
  }
</style>

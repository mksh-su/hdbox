<script>
  import CustomBtn from "./CustomBtn.svelte";
</script>

<section class="desc-sect">
  <div class="container">
    <div class="desc-row desc-row-grey">
      <div class="desc-col">
        <div class="desc-item-img">
          <img src="./img/product/x1.svg" alt="" />
        </div>
      </div>
      <div class="desc-col">
        <div class="desc-item-name"><img src="./img/product/x1-sign.svg" alt="" /></div>
        <p class="text">A small box for best experience</p>
      </div>
    </div>
    <div class="desc-row desc-row-border">
      <div class="desc-col">
        <div class="desc-item-img">
          <img src="./img/product/remote.png" alt="" />
        </div>
      </div>
      <div class="desc-col">
        <h2 class="h2">Easy control with HDBOX Remote control</h2>
        <CustomBtn text="How to use" link="" font_size="sm" />
      </div>
    </div>
    <div class="desc-row desc-row-big">
      <div class="desc-col">
        <div class="desc-item-img">
          <img src="./img/product/tv.png" alt="" />
        </div>
      </div>
      <div class="desc-col">
        <h2 class="h2">A small box filled with new experiences.</h2>
        <p class="text">
          There's nothing better than watching live TV, movies, or sports. With over 280 channels and packages to choose
          from, the HDBOX has something for everyone.
        </p>
      </div>
    </div>
    <div class="desc-column">
      <h2 class="h2">A small box filled with new experiences.</h2>
      <div class="desc-tv-img">
        <img src="./img/product/avatar-big.jpg" alt="" />
      </div>
    </div>
    <div class="desc-row desc-row-big desc-row-reverse">
      <div class="desc-col">
        <div class="desc-item-img">
          <img src="./img/product/rock.png" alt="" />
        </div>
      </div>
      <div class="desc-col">
        <h2 class="h2">A small box filled with new experiences.</h2>
        <p class="text">
          There's nothing better than watching live TV, movies, or sports. With over 280 channels and packages to choose
          from, the HDBOX has something for everyone.
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

  .desc {
    &-row {
      display: flex;
      align-items: center;
      margin: 100px 0;

      .desc-item-img {
        width: 400px;
        margin-right: 180px;
        display: flex;
        img {
          width: 100%;
        }
      }
      .desc-item-name {
        img {
          width: 220px;
        }
      }
      &-grey {
        background: rgba(233, 233, 233, 0.33);
        border-radius: 12px;
        padding: 90px 85px 100px;

        .text {
          font-size: 32px;
          font-family: $heading-font;
          text-transform: uppercase;
          margin: 58px 0 0;
        }
      }
      &-border {
        border: 1px solid #dbdbdb;
        border-radius: 12px;
        .h2 {
          font-size: 32px;
          max-width: 400px;
        }
        .desc-col {
          &:first-of-type {
            margin: 25px 0;
          }
        }
        .desc-item-img {
          margin-right: 125px;
          width: 470px;
        }
      }
      &-big {
        .h2 {
          font-size: 48px;
        }
        .desc-item-img {
          margin-right: 110px;
          width: 480px;
        }
        .text {
          font-family: $heading-font;
          font-size: 18px;
          font-weight: 500;
          max-width: 460px;
        }
      }
      &-reverse {
        flex-direction: row-reverse;
        .desc-item-img {
          margin-left: 110px;
          margin-right: 0;
        }
      }
    }
    &-column {
      display: flex;
      flex-direction: column;
      margin: 100px 0;
      text-align: center;
      align-items: center;

      .h2 {
        font-size: 48px;
        max-width: 600px;
      }
    }
    &-tv {
      &-img {
        border: 4px solid black;
        box-shadow: 10px 10px 25px 10px rgba(0, 0, 0, 0.2);
        max-width: 800px;
        display: flex;
      }
    }
  }
</style>

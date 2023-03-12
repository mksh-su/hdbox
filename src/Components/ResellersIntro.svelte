<script>
  import CustomBtn from "./CustomBtn.svelte";
</script>

<div class="container">
  <section class="intro-sect wrapper">
    <div class="content">
      <h6 class="h6">Reseller</h6>
      <p class="text">
        There's nothing better than watching live TV, movies, or sports. With over 280 channels and packages to choose
        from, the HDBOX has something for everyone.
      </p>
    </div>
    <div class="img">
      <img src="./img/reseller/reseller-intro.svg" alt="" />
    </div>
  </section>
</div>

<style lang="scss">
  $heading-font: "Rational Display", sans-serif;
  $text-font: "TT Commons", sans-serif;
  $sequel-font: "Sequel100Black-86", sans-serif;
  $red-color: #e81d2c;
  .intro {
    &-sect {
      margin-bottom: 50px;
      display: flex;
      align-items: center;
      border: 1px solid rgba(0, 0, 0, 0.1);
      border-radius: 12px;
      padding: 13px 120px 13px 98px;
      .content h6 {
        font-size: 16px;
        color: #707070;
        font-family: $text-font;
        margin-bottom: 0;
      }
      .content p {
        font-size: 18px;
        margin: 0;
        padding-top: 12px;
        padding-bottom: 31px;
        font-weight: 500;
        font-family: $heading-font;
      }
      .h6 {
        margin-top: 0;
        font-weight: 400;
      }
      .img {
        margin-left: auto;
        img {
          min-height: 300px;
          max-width: unset;
        }
      }
      .text {
        max-width: 340px;
      }
    }
  }
</style>

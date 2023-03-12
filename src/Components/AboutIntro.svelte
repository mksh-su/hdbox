<script>
  import CustomBtn from "./CustomBtn.svelte";
</script>

<div class="intro-sect">
  <div class="container">
    <h1 class="h1">unlock the world of higher definition</h1>
    <div class="intro-bg">
      <img src="./img/about/intro-img.jpg" class="intro-bg-inner" alt="" />
    </div>
  </div>
</div>
<div class="about-product">
  <div class="container">
    <img src="./img/about/box.png" class="about-product-img" alt="" />
  </div>
</div>

<style lang="scss">
  $heading-font: "Rational Display", sans-serif;
  $text-font: "TT Commons", sans-serif;
  $sequel-font: "Sequel100Black-86", sans-serif;
  $red-color: #e81d2c;

  .intro-sect {
    .container {
      position: relative;
    }
    .h1 {
      font-family: $sequel-font;
      color: white;
      font-size: 48px;
      text-transform: uppercase;
      text-align: center;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      min-width: 700px;
      line-height: 1.2;
    }
  }

  .about-product {
    text-align: center;
    transform: translateY(-50%);
    &-img {
      max-width: 350px;
      margin: auto;
    }
  }
</style>

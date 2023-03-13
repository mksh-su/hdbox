<script>
  import PackagesAvatar from "./../Assets/PackagesAvatar.svelte";
  import CustomBtn from "./CustomBtn.svelte";
</script>

<section class="package-sect">
  <div class="container">
    <div class="wrapper">
      <div class="avatar">
        <PackagesAvatar />
      </div>
      <div class="content">
        <h6 class="h6">Channels & Packages</h6>
        <p class="text">
          There's nothing better than watching live TV, movies, or sports. With over 280 channels and packages to choose
          from, the HDBOX has something for everyone
        </p>
        <CustomBtn text="Discover Now" link="#" font_size="lg" />
      </div>
    </div>
  </div>
</section>

<style lang="scss">
  $heading-font: "Rational Display", sans-serif;
  $text-font: "TT Commons", sans-serif;
  $sequel-font: "Sequel100Black-86", sans-serif;
  $red-color: #e81d2c;
  .package {
    &-sect {
      margin-bottom: 16px;
    }
  }
  .h6 {
    margin-top: 0;
    font-weight: 400;
  }
  .wrapper {
    display: flex;
    align-items: center;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    padding: 13px 109px 13px 64px;
    .avatar {
      margin-inline-end: 106px;
    }
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
  }
</style>

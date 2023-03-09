<script>
  import CustomBtn from "./CustomBtn.svelte";
</script>

<div class="breadcrumbs">
  <div class="container">
    <div class="breadcrumbs-row">
      <a href="" class="breadcrumbs-item">HOME</a>
      /
      <a href="" class="breadcrumbs-item">How to use</a>
      /
      <span class="breadcrumbs-item">Remote Control Unit (RU)</span>
    </div>
  </div>
</div>

<style lang="scss">
  $heading-font: "Rational Display", sans-serif;
  $text-font: "TT Commons", sans-serif;
  $sequel-font: "Sequel100Black-86", sans-serif;
  $red-color: #e81d2c;
  .breadcrumbs {
    &-row {
      font-family: $heading-font;
      font-size: 14px;
      font-weight: 300;
      padding: 14px 0;
      border-bottom: 1px solid #dcdcd2;
    }
    a.breadcrumbs-item {
      color: #a6a6a6;
      text-decoration: none;
    }
    span.breadcrumbs-item {
      color: #484848;
      font-weight: 400;
    }
  }
</style>

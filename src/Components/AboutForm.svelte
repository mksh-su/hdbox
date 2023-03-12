<script>
  import CustomBtn from "./CustomBtn.svelte";
</script>

<div class="form-sect">
  <div class="container">
    <div class="form-top">
      <div class="form-row">
        <div class="form-row-item">
          <h2 class="h2">Contact information</h2>
          <p class="text">Fill up the form and our Team will get back to you within 24 hours.</p>
          <form action="" class="form"></form>
        </div>
        <div class="form-row-item">
          <img src="./img/about/contact.svg" class="form-two-item-img" alt="" />
        </div>
      </div>
    </div>
    <div class="form-bottom">

    </div>
  </div>
</div>

<style lang="scss">
  $heading-font: "Rational Display", sans-serif;
  $text-font: "TT Commons", sans-serif;
  $sequel-font: "Sequel100Black-86", sans-serif;
  $red-color: #e81d2c;

  .form {
    &-sect {

    }
    &-top {
      border: 1px solid #DBDBDB;
      border-radius: 12px 12px 0 0;
    }
    &-row {
      display: flex;
      align-items: flex-start;
      &-item {
        &:last-of-type {
          margin-left: auto;
        }
      }
    }
  }
</style>

<script>
  import CustomBtn from "./CustomBtn.svelte";
</script>

<div class="container">
  <section class="intro-sect wrapper">
    <div class="content">
      <h6 class="h6">Help Center</h6>
      <p class="text">
        If you need help with anything HDBOX related, refer to the videos below. Still can’t find what you’re looking
        for?
      </p>
      <a href="/" class="intro-link">Contact Us</a>
      <form action="" class="form-search">
        <input type="text" placeholder="Search" class="form-search-input" />
        <input type="submit" class="form-search-btn" value="Search" />
      </form>
    </div>
    <div class="img">
      <img src="./img/help/help-intro.svg" alt="" />
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
      .content {
        h6 {
          font-size: 16px;
          color: #707070;
          font-family: $text-font;
          margin-bottom: 0;
        }
        p {
          font-size: 18px;
          margin: 0;
          padding-top: 12px;
          font-weight: 500;
          font-family: $heading-font;
        }
        .intro-link {
          color: #0066cc;
          font-size: 18px;
          font-weight: 500;
          font-family: $heading-font;
          transition: .3s;
          &:hover {
            color: $red-color;
          }
        }
      }
      .form-search {
        margin-top: 32px;
        position: relative;
        max-width: 280px;
        &-input {
          padding: 10px 18px;
          border: 1px solid #DBDBDB;
          border-radius: 12px;
          width: 100%;
        }
        &-btn {
          font-size: 0;
          padding: 0;
          width: 14px;
          height: 14px;
          display: inline-block;
          position: absolute;
          right: 16px;
          top: 50%;
          transform: translateY(-50%);
          background-color: transparent;
          background-image: url(/img/help/search.svg);
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center;
          border: 0;
        }
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

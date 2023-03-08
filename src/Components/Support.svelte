<script>
  import SupportAvatars from "./../Assets/SupportAvatars.svelte";
</script>

<section class="avatar-sect wrapper">
  <div class="avatar-wrapper">
    <SupportAvatars />
  </div>
  <div class="content">
    <h6>Get in Touch</h6>
    <p>
      We're available 24/7, so get in touch with us and <br />
      we'll respond as soon as possible.
    </p>
    <a href="mailto:hello@whitespace.krd" class="btn btn-red-fill">Say Hello</a>
  </div>
</section>

<style lang="scss">
  $heading-font: "Rational Display", sans-serif;
  $text-font: "TT Commons", sans-serif;
  $sequel-font: "Sequel100Black-86", sans-serif;
  $red-color: #e81d2c;
  .avatar {
    &-sect {
      margin-bottom: 100px;
    }
  }
  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-top: 130px;
    h6 {
      font-size: 16px;
      color: #707070;
      margin-top: 25px;
      margin-bottom: 0;
      font-weight: 400;
    }
    p {
      margin-top: 6px;
      margin-bottom: 34px;
      font-size: 18px;
      color: #000;
      font-family: $heading-font;
      font-weight: 500;
    }
  }
  //   .wrapper a {
  //     display: flex;
  //     justify-content: center;
  //     margin: auto;
  //     color: #fff;
  //     background: #e81d2c;
  //     border-radius: 6px;
  //     width: 138px;
  //     height: 40px;
  //     line-height: 40px;
  //     font-size: 16px;
  //     text-decoration: none;
  //   }
</style>

<script>
  // import Logo from "../Assets/Logo.svelte";
</script>

<section class="hero-sect">
  <img src="./img/hero-bg.jpg" class="hero-bg" alt="" />
  <div class="container">
    <div class="hero-bottom">
      <p class="hero-headline">unlock the world of higher definition</p>
      <p class="hero-desc">
        The new HDBOX satellite receiver will provide you with the best TV watching experience that will transform your
        living room into a movie theatre.
        <a href="">Check Our Products</a>
      </p>
      <div class="hero-bottom-row">
        <div class="hero-bottom-col">
          <span class="hero-bottom-col-name">The new HDBOX satellite</span>
          <div class="hero-bottom-logo-row">
            <img src="./img/icons/forevertv-white.svg" class="hero-bottom-logo" alt="" />
            <img src="./img/icons/youtube-white.svg" class="hero-bottom-logo" alt="" />
          </div>
        </div>
        <div class="hero-bottom-col">
          <span class="hero-bottom-col-name">The new HDBOX satellite</span>
          <div class="hero-bottom-logo-row">
            <img src="./img/icons/full-hd.svg" class="hero-bottom-logo" alt="" />
            <img src="./img/icons/channels-white.png" class="hero-bottom-logo" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style lang="scss">
  $sequel-font: 'Sequel100Black-86', sans-serif;
  .hero {
    &-bg {
      object-fit: cover;
      object-position: center;
      position: absolute;
      min-height: 100%;
      width: 100%;
    }

    &-sect {
      min-height: 840px;
      height: 100vh;
      position: relative;
      overflow: hidden;
      // max-width: 1440px;
      margin: auto;

      * {
        color: white;
      }

      .container {
        display: flex;
        flex-direction: column;
        height: 100%;
      }
    }

    &-headline {
      font-weight: 900;
      font-style: italic;
      font-size: 32px;
      color: white;
      max-width: 530px;
      margin: 18px auto;
      text-transform: uppercase;
      text-align: center;
      font-family: $sequel-font;
      line-height: 1.1;
    }

    &-desc {
      color: white;
      font-size: 16px;
      max-width: 420px;
      margin: 18px auto 44px;
      text-align: center;
    }

    &-bottom {
      position: relative;
      margin-top: auto;
      padding-bottom: 50px;
      &-row {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
      }
      &-col {
        display: flex;
        flex-direction: column;
        &-name {
          font-size: 16px;
        }
        &:last-of-type {
          justify-content: flex-end;
          .hero-bottom-col-name {
            text-align: right;
          }
          .hero-bottom-logo-row {
            gap: 26px;
          }
        }
      }
      &-logo {
        &-row {
          display: flex;
          align-items: center;
          gap: 48px;
          margin-top: 12px;
        }
        max-height: 53px;
      }
    }
  }
</style>

<script>
  import CustomBtn from "./CustomBtn.svelte";
  let socials = [
    { name: "Instagram", link: "/#" },
    { name: "Facebook", link: "/#2" },
    { name: "Telegram", link: "/#3" },
    { name: "YouTube", link: "/#4" },
  ];
</script>

<div class="form-sect">
  <div class="container">
    <div class="form-top">
      <div class="form-row">
        <div class="form-row-item">
          <h2 class="h2">Contact information</h2>
          <p class="text">Fill up the form and our Team will get back to you within 24 hours.</p>
          <form action="" class="form">
            <div class="form-grid">
              <label class="form-label">
                <span class="form-label-name">First name</span>
                <input type="text" class="form-input" placeholder="Ex. John" />
              </label>
              <label class="form-label">
                <span class="form-label-name">Last name</span>
                <input type="text" class="form-input" placeholder="Ex. Doe" />
              </label>
              <label class="form-label">
                <span class="form-label-name">Mail</span>
                <input type="email" class="form-input" placeholder="Ex. John@mail.com" />
              </label>
              <label class="form-label">
                <span class="form-label-name">Phone</span>
                <input type="tel" class="form-input" placeholder="Ex. +900 000 000" />
              </label>
            </div>
            <label class="form-label form-label-message">
              <span class="form-label-name">Message</span>
              <textarea class="form-input" placeholder="Problem, Question, Suggestion..." />
            </label>
            <input type="submit" class="btn btn-red-fill" value="Send Message" />
          </form>
        </div>
        <div class="form-row-item">
          <img src="./img/about/contact.svg" class="form-two-item-img" alt="" />
        </div>
      </div>
    </div>
    <div class="form-bottom">
      <div class="form-bottom-col form-bottom-col-contact">
        <a class="form-bottom-col-contact-text" href="mailto:info@hdbox.com">
          <img src="./img/about/email.svg" alt="" />
          info@hdbox.com
        </a>
        <span class="form-bottom-col-contact-text">
          <img src="./img/about/call.svg" alt="" />
          <a href="">0770 121 6222</a>
          -
          <a href="">0750 121 6222</a>
        </span>
        <span class="form-bottom-col-contact-text">
          <img src="./img/about/location.svg" alt="" />
          Empire World, Zagros, Erbil
        </span>
      </div>
      <div class="form-bottom-col form-bottom-col-social">
        <h4 class="h4">Social</h4>
        <div class="form-bottom-col-social-grid">
          {#each socials as item}
            <CustomBtn text={item.name} link={item.link} font_size="sm" />
          {/each}
        </div>
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  $heading-font: "Rational Display", sans-serif;
  $text-font: "TT Commons", sans-serif;
  $sequel-font: "Sequel100Black-86", sans-serif;
  $red-color: #e81d2c;

  .form {
    &-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 24px;
      margin-top: 80px;
    }
    &-input {
      border: 0;
      border-bottom: 1px solid #DBDBDB;
      padding: 14px 0;
      font-size: 12px;
      outline: none;
      &::placeholder {
        color: #A6A6A6;
      }
    }
    &-label {
      display: flex;
      flex-direction: column;
      &-name {
        color: #484848;
        font-size: 14px;
        font-family: $heading-font;
      }
      &-message {
        margin: 48px 0 36px;
      }
    }
    &-top {
      border: 1px solid #dbdbdb;
      border-radius: 12px 12px 0 0;
      padding: 64px 100px 50px 100px;
    }
    &-bottom {
      border: 1px solid #dbdbdb;
      border-top: 0;
      border-radius: 0 0 12px 12px;
      padding: 34px 100px 44px 100px;
      display: flex;
      &-col {
        &:first-of-type {
          flex-basis: 40%;
        }
        &-contact {
          display: flex;
          flex-direction: column;
          gap: 12px;
          &-text {
            display: flex;
            align-items: center;
            gap: 14px;
            color: #313131;
            text-decoration: none;

            a {
              color: #313131;
              text-decoration: none;
            }

            img {
              max-width: 16px;
            }
          }
        }
        &-social {
          .h4 {
            font-size: 18px;
            font-weight: 500;
            margin: 0 0 16px;
          }
          &-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 10px 40px;
          }
        }
      }
    }
    &-row {
      display: flex;
      align-items: flex-start;
      &-item {
        &:last-of-type {
          margin-left: auto;
        }
        &-img {
          max-width: 470px;
        }
        .h2 {
          font-size: 32px;
          margin: 0 0 26px;
        }
        .text {
          max-width: 270px;
          color: #707070;
        }
      }
    }
  }
</style>

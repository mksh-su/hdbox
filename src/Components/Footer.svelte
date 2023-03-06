<script>
  import Logo from "../Assets/Logo.svelte";
  import CustomBtn from "./CustomBtn.svelte";
  let links = [
    { name: "Product", link: "/#" },
    { name: "Broadcast", link: "/#2" },
    { name: "Channels & Packages", link: "/#3" },
    { name: "Reseller", link: "/#4" },
    { name: "How to use", link: "/#5" },
    { name: "About us", link: "/#6" },
    { name: "Contact", link: "/#7" },
  ];
  let socials = [
    { name: "Instagram", link: "/#" },
    { name: "Facebook", link: "/#2" },
    { name: "Telegram", link: "/#3" },
    { name: "YouTube", link: "/#4" },
  ];
</script>

<footer class="footer">
  <div class="container">
    <div class="first">
      <div class="content">
        <!-- <Logo type="lg-000" /> -->
        <img src="./img/logo-black.svg" alt="" />
        <p class="text">
          There's nothing better than watching live TV, movies,
          <br />
          or sports. With over 280 channels and packages to
          <br />
          choose from, the HDBOX has something for
          <br />
          everyone
        </p>
      </div>
      <div class="nav">
        <div class="links">
          <h5 class="h5">Navigation</h5>
          {#each links as item}
            <CustomBtn text={item.name} link={item.link} font_size="sm" />
          {/each}
        </div>
        <div class="socials">
          <h5 class="h5">Social</h5>
          {#each socials as item}
            <CustomBtn text={item.name} link={item.link} font_size="sm" />
          {/each}
        </div>
      </div>
    </div>
    <div class="last">
      <div class="copyright">
        <p>Copyright © 2010-2022 HDBOX. All rights reserved.</p>
      </div>
      <div class="by">
        <p>Branding & Website by :&nbsp;</p>
        <CustomBtn text="whitespace" link="https://whitespace.krd/" font_size="xs" />
      </div>
    </div>
  </div>
</footer>

<style lang="scss">
  .footer {
    padding: 60px 0 40px;
    .first {
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;
    }
    .nav {
      display: flex;
      gap: 40px;
      margin-bottom: 10px;

      a {
        margin-bottom: 10px;
      }

      .h5 {
        font-size: 18px;
        font-weight: 500;
        margin: 0 0 16px;
      }
    }

    .links {
      flex-direction: column;
      gap: 8px;
    }
  }

  .copyright {
    p {
      margin: 0;
      font-size: 14px;
    }
  }

  .last {
    border: 1px solid rgba(0, 0, 0, 0.1);
    font-size: 14px;
    padding: 16px;
    display: flex;
    justify-content: space-between;
    border-radius: 6px;

    p {
      margin: 0;
      font-size: 14px;
    }
  }
  .last .by {
    display: flex;
  }
</style>

<script>
  import Logo from "../Assets/Logo.svelte";
</script>

<header class="header">
  <div class="container">
    <a href="" class="logo"><Logo type="lg-000" /></a>
    <nav class="header-nav">
      <ul class="header-nav-list">
        <li class="header-nav-link"><a href="">Product</a></li>
        <li class="header-nav-link"><a href="">Broadcasting</a></li>
        <li class="header-nav-link"><a href="">Channels & Packages</a></li>
        <li class="header-nav-link"><a href="">Reseller</a></li>
        <li class="header-nav-link"><a href="">About us</a></li>
        <li class="header-nav-link"><a href="">Contact</a></li>
      </ul>
    </nav>
  </div>
</header>

<style lans="scss">
  .logo {
    max-height: 24px;
  }

  .header {
    position: absolute;
    width: 100%;
    z-index: 999;
    top: 40px;

    .container {
      display: flex;
      justify-content: space-between;
    }

    &-nav {
      &-list {
        display: flex;
        padding: 0;
        margin: 0;
        list-style: none;
        display: flex;
      }
      &-link {
        margin-left: 34px;
        a {
          color: white;
          text-decoration: none;
          font-size: 12px;
        }
      }
    }
  }
</style>

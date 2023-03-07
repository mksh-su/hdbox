<script>
  import Logo from "../Assets/Logo.svelte";
  import { onMount } from "svelte";
  onMount(() => {
    const select = document.querySelectorAll(".select-btn");
    const option = document.querySelectorAll(".select-option");
    let index = 1;
    select.forEach((a) => {
      a.addEventListener("click", (b) => {
        const next = b.target.nextElementSibling;
        next.classList.toggle("toggle");
        next.style.zIndex = index++;
      });
    });
    option.forEach((a) => {
      a.addEventListener("click", (b) => {
        b.target.parentElement.classList.remove("toggle");
        const parent = b.target.closest(".select").children[0];
        parent.setAttribute("data-type", b.target.getAttribute("data-type"));
        parent.innerText = b.target.getAttribute("data-type");
      });
    });
  });
</script>

<header class="header">
  <div class="container">
    <a href="" class="logo">
      <!-- <Logo type="lg-000" /> -->
      <img src="./img/logo.svg" alt="" />
    </a>
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
    <div class="header-select">
      <div class="select">
        <div class="select-btn" data-type="English">English</div>
        <div class="select-dropdown">
          <div class="select-option" data-type="English">English</div>
          <div class="select-option" data-type="Kurdish">Kurdish</div>
        </div>
      </div>
    </div>
  </div>
</header>

<style lang="scss">
  $heading-font: "Rational Display", sans-serif;
  $text-font: "TT Commons", sans-serif;
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
      align-items: center;
    }

    &-nav {
      margin-left: auto;
      margin-right: 24px;
      padding-right: 24px;
      border-right: 1px solid rgba(255, 255, 255, 0.14);
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
          font-size: 14px;
        }
      }
    }
  }

  .select {
    position: relative;
    padding: 12px 34px 12px 16px;
    border: 1px solid rgba(255, 255, 255, 0.14);
    border-radius: 6px;
    min-width: 108px;

    .select-btn {
      box-sizing: border-box;
      border-radius: 3px;
      width: 100%;
      cursor: pointer;
      position: relative;
      user-select: none;
      color: white;
      font-size: 13px;
      font-family: $heading-font;
      font-weight: 300;

      &:after {
        content: "";
        position: absolute;
        top: 40%;
        right: -15px;
        width: 6px;
        height: 6px;
        transform: translateY(-50%) rotate(45deg);
        border-right: 1px solid white;
        border-bottom: 1px solid white;
        transition: 0.3s;
      }
    }

    .select-btn.toggle {
      border-radius: 3px 3px 0 0;
    }

    .select-btn.toggle:after {
      transform: translateY(-50%) rotate(-135deg);
    }

    .select-dropdown {
      position: absolute;
      top: 100%;
      min-width: 110px;
      right: 0;
      border-radius: 0 0 3px 3px;
      overflow: hidden;
      border-top: 1px solid #eee;
      z-index: 1;
      background: #fff;
      transform: scale(1, 0);
      transform-origin: top center;
      visibility: hidden;
      transition: 0.3s;
      box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.08);
      border-radius: 8px;
    }

    .select-dropdown-full {
      min-width: 100%;
    }

    .select-dropdown .select-option {
      padding: 10px;
      box-sizing: border-box;
      cursor: pointer;
      color: white;
      position: relative;
    }

    .select-dropdown .select-option:hover {
      background: #f8f8f8;
    }

    .select-dropdown.toggle {
      visibility: visible;
      transform: scale(1, 1);
    }
  }
</style>

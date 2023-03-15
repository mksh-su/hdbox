<script>
  import CustomBtn from "./CustomBtn.svelte";
  import Search from "./Search.svelte";
  import { onMount } from "svelte";

  let optionsOpen = false;

  function onSelectClick(e) {
    optionsOpen = !optionsOpen;
  }

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

    const filter = document.querySelector(".filter-btn");
    filter?.addEventListener("click", function () {
      this.classList.toggle("open");
    });
  });
</script>

<section class="shop-sect">
  <div class="container">
    <div class="shop-choice">
      <p class="shop-choice-all">120 Products available</p>
      <div class="filter">
        <div class="filter-btn">Filter</div>
      </div>
      <Search />
      <div class="select">
        <div class="select-btn" data-type="sort">Sort By</div>
        <div class="select-dropdown">
          <div class="select-option" data-type="new">Newest</div>
          <div class="select-option" data-type="cheap">Cheapest</div>
        </div>
      </div>
    </div>
    <div class="shop-grid">
      <div class="shop-grid-item big1">
        <a href="" class="shop-grid-item-img">
          <img src="./img/product/x1.svg" alt="" />
        </a>
        <p class="shop-grid-item-name">HDBOX X1</p>
        <a href="" class="shop-grid-item-link">Discover more</a>
      </div>
      <div class="shop-grid-item reg1">
        <a href="" class="shop-grid-item-img">
          <img src="./img/product/m1.svg" alt="" />
        </a>
        <p class="shop-grid-item-name">HDBOX M1</p>
        <a href="" class="shop-grid-item-link">Discover more</a>
      </div>
      <div class="shop-grid-item reg2">
        <a href="" class="shop-grid-item-img">
          <img src="./img/product/m2.svg" alt="" />
        </a>
        <p class="shop-grid-item-name">HDBOX M2</p>
        <a href="" class="shop-grid-item-link">Discover more</a>
      </div>
      <div class="shop-grid-item big2">
        <a href="" class="shop-grid-item-img">
          <img src="./img/product/x2.svg" alt="" />
        </a>
        <p class="shop-grid-item-name">HDBOX X2</p>
        <a href="" class="shop-grid-item-link">Discover more</a>
      </div>
      <div class="shop-grid-item reg3">
        <a href="" class="shop-grid-item-img">
          <img src="./img/product/m3.svg" alt="" />
        </a>
        <p class="shop-grid-item-name">HDBOX M3</p>
        <a href="" class="shop-grid-item-link">Discover more</a>
      </div>
      <div class="shop-grid-item reg4">
        <a href="" class="shop-grid-item-img">
          <img src="./img/product/x3.svg" alt="" />
        </a>
        <p class="shop-grid-item-name">HDBOX X3</p>
        <a href="" class="shop-grid-item-link">Discover more</a>
      </div>
      <div class="shop-grid-item reg5">
        <a href="" class="shop-grid-item-img">
          <img src="./img/product/m3.svg" alt="" />
        </a>
        <p class="shop-grid-item-name">HDBOX M3</p>
        <a href="" class="shop-grid-item-link">Discover more</a>
      </div>
      <div class="shop-grid-item reg6">
        <a href="" class="shop-grid-item-img">
          <img src="./img/product/x3.svg" alt="" />
        </a>
        <p class="shop-grid-item-name">HDBOX X3</p>
        <a href="" class="shop-grid-item-link">Discover more</a>
      </div>
      <div class="shop-grid-item reg7">
        <a href="" class="shop-grid-item-img">
          <img src="./img/product/m3.svg" alt="" />
        </a>
        <p class="shop-grid-item-name">HDBOX M3</p>
        <a href="" class="shop-grid-item-link">Discover more</a>
      </div>
      <div class="shop-grid-item reg8">
        <a href="" class="shop-grid-item-img">
          <img src="./img/product/x3.svg" alt="" />
        </a>
        <p class="shop-grid-item-name">HDBOX X3</p>
        <a href="" class="shop-grid-item-link">Discover more</a>
      </div>
    </div>
  </div>
</section>

<style lang="scss">
  $heading-font: "Rational Display", sans-serif;
  $text-font: "TT Commons", sans-serif;
  $sequel-font: "Sequel100Black-86", sans-serif;
  $red-color: #e81d2c;

  .big1 {
    grid-area: big1;
  }
  .big2 {
    grid-area: big2;
  }
  .reg1 {
    grid-area: reg1;
  }
  .reg2 {
    grid-area: reg2;
  }
  .reg3 {
    grid-area: reg3;
  }
  .reg4 {
    grid-area: reg4;
  }
  .reg5 {
    grid-area: reg5;
  }
  .reg6 {
    grid-area: reg6;
  }
  .reg7 {
    grid-area: reg7;
  }
  .reg8 {
    grid-area: reg8;
  }
  .reg9 {
    grid-area: reg9;
  }
  .reg10 {
    grid-area: reg10;
  }
  .shop {
    &-choice {
      padding: 13px 15px 13px 23px;
      margin-bottom: 16px;
      border: 1px solid #dbdbdb;
      border-radius: 12px;
      display: flex;
      align-items: center;
      &-all {
        margin: 0;
        font-size: 14px;
        font-weight: 500;
        font-family: $heading-font;
        margin-right: auto;
      }
    }
    &-grid {
      display: grid;
      gap: 16px;
      grid-auto-flow: row;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr 1fr;
      grid-template-areas:
        "big1 big1 reg1 reg2"
        "big2 big2 reg3 reg4"
        "reg5 reg6 reg7 reg8";
      &-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 34px 34px 22px;
        border: 1px solid #dbdbdb;
        border-radius: 12px;
        &-img {
          height: 205px;
          display: flex;
          align-items: center;
          justify-content: center;
          img {
            max-width: 205px;
            max-height: 100%;
            transition: 0.3s;
          }
          &:hover {
            img {
              transform: scale(1.05);
            }
          }
        }
        &-name {
          margin: 24px 0 26px;
          font-size: 20px;
          font-weight: 500;
          text-transform: uppercase;
          font-family: $heading-font;
        }
        &-link {
          color: $red-color;
          transition: 0.3s;
          &:hover {
            color: darken($red-color, 10%);
          }
        }
      }
    }
  }
  .select {
    position: relative;
    border: 1px solid #dbdbdb;
    border-radius: 12px;
    min-width: 108px;
    cursor: pointer;
    margin-left: 12px;

    .select-btn {
      box-sizing: border-box;
      border-radius: 3px;
      width: 100%;
      position: relative;
      user-select: none;
      color: #0f0f0f;
      font-size: 13px;
      font-family: $heading-font;
      font-weight: 300;
      padding: 10px 34px 10px 16px;

      &:after {
        content: "";
        position: absolute;
        top: 40%;
        right: 15px;
        width: 6px;
        height: 6px;
        transform: translateY(-50%) rotate(45deg);
        border-right: 1px solid #dbdbdb;
        border-bottom: 1px solid #dbdbdb;
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

  .filter {
    position: relative;
    border: 1px solid #dbdbdb;
    border-radius: 12px;
    cursor: pointer;
    margin-right: 12px;
    &-btn {
      color: #0f0f0f;
      font-size: 13px;
      font-family: $heading-font;
      font-weight: 300;
      padding: 10px 16px;
      text-align: center;
      border-radius: 12px;
      transition: .3s;
    }

    :global(.open) {
      background-color: #e2e2e2;
    }
  }
</style>

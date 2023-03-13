<script>
  import CustomBtn from "./CustomBtn.svelte";
  import Search from "./Search.svelte";
</script>

<section class="shop-sect">
  <div class="container">
    <div class="shop-choice">
      <p class="shop-choice-all">120 Products available</p>
      <Search />
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

  .big1 { grid-area: big1; }
  .big2 { grid-area: big2; }
  .reg1 { grid-area: reg1; }
  .reg2 { grid-area: reg2; }
  .reg3 { grid-area: reg3; }
  .reg4 { grid-area: reg4; }
  .reg5 { grid-area: reg5; }
  .reg6 { grid-area: reg6; }
  .reg7 { grid-area: reg7; }
  .reg8 { grid-area: reg8; }
  .reg9 { grid-area: reg9; }
  .reg10 { grid-area: reg10; }
  .shop {
    &-choice {
      padding: 13px 15px 13px 23px;
      margin-bottom: 16px;
      border: 1px solid #dbdbdb;
      border-radius: 12px;
      &-all {
        margin: 0;
        font-size: 14px;
        font-weight: 500;
        font-family: $heading-font;
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
            transition: .3s;
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
          transition: .3s;
          &:hover {
            color: darken($red-color, 10%);
          }
        }
      }
    }
  }
</style>

<script>
  import CustomBtn from "./CustomBtn.svelte";
  import { Lightbox, LightboxGallery, GalleryImage, GalleryThumbnail } from "svelte-lightbox";
  import { onMount } from "svelte";
  onMount(() => {
    function Tabs() {
      var bindAll = function () {
        var menuElements = document.querySelectorAll("[data-tab]");
        for (var i = 0; i < menuElements.length; i++) {
          menuElements[i].addEventListener("click", change, false);
        }
      };

      var clear = function () {
        var menuElements = document.querySelectorAll("[data-tab]");
        for (var i = 0; i < menuElements.length; i++) {
          menuElements[i].classList.remove("active");
          var id = menuElements[i].getAttribute("data-tab");
          document.getElementById(id).classList.remove("active");
        }
      };

      var change = function (e) {
        clear();
        e.preventDefault();
        e.target.classList.add("active");
        var id = e.currentTarget.getAttribute("data-tab");
        document.getElementById(id).classList.add("active");
      };

      bindAll();
    }

    var connectTabs = new Tabs();
  });
</script>

<section class="info-sect">
  <div class="container">
    <div class="info-row">
      <div class="info-col">
        <LightboxGallery>
          <svelte:fragment slot="thumbnail">
            <div class="sample-class-1">
              <GalleryThumbnail>
                <img src="/img/product/x1.svg" alt="Simple lightbox" />
              </GalleryThumbnail>
            </div>
          </svelte:fragment>

          <GalleryImage>
            <img src="/img/product/x1.svg" alt="Simple lightbox" />
          </GalleryImage>
          <GalleryImage>
            <img src="/img/product/x2.svg" alt="Simple lightbox" />
          </GalleryImage>
          <GalleryImage>
            <img src="/img/product/x3.svg" alt="Simple lightbox" />
          </GalleryImage>
        </LightboxGallery>
      </div>
      <div class="info-col">
        <nav class="b-nav">
          <a href="#product" data-tab="product" class="b-nav-tab active">Product</a>
          <a href="#soft" data-tab="soft" class="b-nav-tab">Software</a>
        </nav>
        <div id="product" class="b-tab active">
          <div class="info-tab">
            <p class="info-tab-product">HDBOX X1</p>
            <p class="info-tab-share"><a href="">Share the product with your friends</a></p>
            <ul class="info-tab-desc">
              <li>The new Mediastar zenon brings the best of TV in a powerful experience that will</li>
              <li>together with your favorite Apple devices and</li>
              <li>services — in a powerful experience that will</li>
              <li>transform your living room.</li>
            </ul>
            <a href="" class="btn btn-red-fill">Now in the markets!</a>
            <div class="info-tab-available">
              <span>Available in:</span>
              <div>
                <img src="/img/product/iraq.svg" alt="" />
                <img src="/img/product/iran.svg" alt="" />
                <img src="/img/product/turkey.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div id="soft" class="b-tab">
          <div class="info-tab info-tab-soft">
            <p class="info-tab-product">HDBOX X1</p>
            <div class="info-tab-soft-date">
              <p>
                LATEST BUILD
                <br />
                May 26, 2021 14:52
              </p>
              <a href="">How to use ?</a>
            </div>
            <div class="info-tab-soft-info">
              <div class="info-tab-soft-version">
                <p>
                  HDBOX X1 v11.32.1 <img src="/img/product/export.svg" class="info-tab-soft-version-icon" alt="" />
                </p>
                <p>Downloads: 5533</p>
              </div>
              <div class="info-tab-soft-links">
                <a href="">Download build (1.36 GB)</a>
                <a href="">How to update</a>
              </div>
              <div class="info-tab-soft-chars">
                <p>
                  <span>Version:</span>
                  11.32.1
                </p>
                <p>
                  <span>File name:</span>
                  HDBOX X1-11.32.1-20210526.zip
                </p>
                <p>
                  <span>Date:</span>
                  May 26, 2021 14:52 GMT
                </p>
                <p>
                  <span>Downloads:</span>
                  5533
                </p>
              </div>
              <div class="info-tab-soft-change">
                <p class="info-tab-soft-change-heading">Changelog:</p>
                <ul>
                  <li>May security patch</li>
                  <li>Imported translations</li>
                  <li>Under the hood improvements</li>
                  <li>Google Mic + Voice Recording is now functional also No more BETA</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style lang="scss">
  $heading-font: "Rational Display", sans-serif;
  $text-font: "TT Commons", sans-serif;
  $sequel-font: "Sequel100Black-86", sans-serif;
  $red-color: #e81d2c;

  .info {
    &-sect {
      margin: 50px 0 100px;

      .b-tab {
        display: none;
      }

      .b-tab.active {
        display: block;
      }

      .b-nav {
        display: flex;
        &-tab {
          padding: 20px;
          flex-grow: 1;
          text-align: center;
          color: #0f0f0f;
          font-size: 14px;
          font-family: $heading-font;
          text-decoration: none;
          border: 1px solid #dbdbdb;
          border-bottom: 0;
          transition: 0.3s;

          &:first-of-type {
            border-radius: 12px 0 0 0;
          }

          &:last-of-type {
            border-radius: 0 12px 0 0;
          }

          &.active {
            font-weight: 500;
            background: #dcdcd2;
            border-color: #dcdcd2;
          }
        }
      }
    }
    &-row {
      display: flex;
      justify-content: space-between;
    }
    &-tab {
      padding: 35px 48px;
      border: 1px solid #dbdbdb;
      border-radius: 0 0 12px 12px;
      width: 480px;
      &-product {
        font-size: 20px;
        font-weight: 500;
        color: #000000;
        font-family: $heading-font;
        margin: 0;
      }
      &-share {
        margin: 10px 0 25px;
        a {
          color: #107cf8;
          font-size: 10px;
          font-family: $heading-font;
        }
      }
      &-desc {
        padding: 0 0 80px 17px;
        font-family: $heading-font;
        font-size: 13px;
        li {
          margin: 10px 0;
        }
      }
      &-available {
        margin-top: 24px;

        span {
          font-size: 11px;
          font-weight: 300;
          font-family: $heading-font;
          margin-bottom: 10px;
          display: inline-block;
        }

        div {
          display: flex;
          gap: 10px;
        }
      }
      &-soft {
        padding-left: 18px;
        padding-right: 18px;
        &-version {
          display: flex;
          justify-content: space-between;
          align-items: center;
          &-icon {
            vertical-align: middle;
            display: inline-block;
            margin-left: 14px;
          }
          p {
            margin: 0;
          font-size: 16px;
          font-family: $heading-font;
          }
        }
        &-date {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin: 20px 0 16px;
          font-family: $heading-font;
          p {
            margin: 0;
          }
          a {
            color: #107CF8;
            text-decoration: none;
            font-size: 14px;
          }
        }
        &-info {
          border: 1px solid #cfcfcf;
          border-radius: 12px;
          padding: 20px;
        }
        &-links {
          margin: 30px 0;
        }
        &-chars {
          margin: 30px 0;
          p {
            margin: 10px 0;
           span {
            color: #CE1212;
           } 
          }
        }
        &-change {
          &-heading {
            font-size: 14px;
          }
          ul {
            background: #f3f3f3;
            border: 1px solid #e3e3e3;
            border-radius: 12px;
            padding: 20px 20px 20px 40px;
          }
        }
      }
    }
  }
</style>

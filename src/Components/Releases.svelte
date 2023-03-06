<script>
  // import Logo from "../Assets/Logo.svelte";
  // import function to register Swiper custom elements
  import { register } from "swiper/element/bundle";
  // register Swiper custom elements
  register();
</script>

<section class="release-sect">
  <div class="container">
    <div class="section-desc">
      <h2 class="h2">New releases are now streaming on Forevertv</h2>
      <p class="text">
        Mediastar devices use high quality display resolutions to provide users with a luxurious experience.
      </p>
    </div>
  </div>
  <swiper-container
    loop={true}
    freeMode={true}
    spaceBetween={20}
    slidesPerView={4}
    autoplay={{
      delay: 1,
      disableOnInteraction: false,
      pauseOnMouseEnter: false,
    }}
    speed={8000}
  >
    <swiper-slide>
      <img src="./img/poster/aqua.png" class="release-poster" alt="" />
    </swiper-slide>
    <swiper-slide>
      <img src="./img/poster/avatar.png" class="release-poster" alt="" />
    </swiper-slide>
    <swiper-slide>
      <img src="./img/poster/barbarian.png" class="release-poster" alt="" />
    </swiper-slide>
    <swiper-slide>
      <img src="./img/poster/dune.png" class="release-poster" alt="" />
    </swiper-slide>
    <swiper-slide>
      <img src="./img/poster/marvel.png" class="release-poster" alt="" />
    </swiper-slide>
    <swiper-slide>
      <img src="./img/poster/nope.png" class="release-poster" alt="" />
    </swiper-slide>
    <swiper-slide>
      <img src="./img/poster/sw.png" class="release-poster" alt="" />
    </swiper-slide>
    <swiper-slide>
      <img src="./img/poster/w.png" class="release-poster" alt="" />
    </swiper-slide>
  </swiper-container>
  <swiper-container
    loop={true}
    freeMode={true}
    spaceBetween={20}
    slidesPerView={4}
    autoplay={{
      delay: 1,
      disableOnInteraction: false,
      pauseOnMouseEnter: false,
      reverseDirection: true,
    }}
    speed={8000}
  >
    <swiper-slide>
      <img src="./img/poster/aqua.png" class="release-poster" alt="" />
    </swiper-slide>
    <swiper-slide>
      <img src="./img/poster/avatar.png" class="release-poster" alt="" />
    </swiper-slide>
    <swiper-slide>
      <img src="./img/poster/barbarian.png" class="release-poster" alt="" />
    </swiper-slide>
    <swiper-slide>
      <img src="./img/poster/dune.png" class="release-poster" alt="" />
    </swiper-slide>
    <swiper-slide>
      <img src="./img/poster/marvel.png" class="release-poster" alt="" />
    </swiper-slide>
    <swiper-slide>
      <img src="./img/poster/nope.png" class="release-poster" alt="" />
    </swiper-slide>
    <swiper-slide>
      <img src="./img/poster/sw.png" class="release-poster" alt="" />
    </swiper-slide>
    <swiper-slide>
      <img src="./img/poster/w.png" class="release-poster" alt="" />
    </swiper-slide>
  </swiper-container>
  <div class="container">
    <div class="btn-container">
      <a href="" class="btn btn-red-fill">Discover Channels</a>
    </div>
  </div>
</section>

<style lang="scss">
  .release {
    &-sect {
      margin: 120px 0 130px;
      swiper-container, .swiper-container, .swiper-wrapper {
        transition-timing-function: linear !important;
        margin: 10px 0;
      }
      swiper-slide, .swiper-slide {
        max-width: 380px;
      }
    }
    &-poster {
      max-width: 360px;
      border-radius: 12px;
    }
  }
</style>

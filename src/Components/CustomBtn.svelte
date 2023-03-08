<script>
  import { prop_dev } from "svelte/internal";
  import TrArrow from "../Assets/TRArrow.svelte";

  export let text = "";
  export let link = "";
  export let font_size = "lg";
</script>

<div class="btn-link">
  <a class={font_size} href={link}>{text}</a>
  <TrArrow />
</div>

<style lang="scss">
  $heading-font: "Rational Display", sans-serif;
  $text-font: "TT Commons", sans-serif;
  $sequel-font: "Sequel100Black-86", sans-serif;
  $red-color: #e81d2c;
  .btn-link {
    a {
      text-decoration: underline;
      margin-inline-end: 4px;
      color: #000;
      transition: 0.3s;
      &:hover {
        color: $red-color;
      }
    }
    .lg {
      font-size: 18px;
    }
    .sm {
      font-size: 16px;
    }
    .xs {
      font-size: 14px;
      margin-inline-end: 8px;
    }
  }
</style>

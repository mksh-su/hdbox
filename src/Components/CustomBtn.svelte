<script>
    import { prop_dev } from "svelte/internal";
    import TrArrow from "../Assets/TRArrow.svelte";

    export let text = "";
    export let link = "";
    export let font_size = "lg";
</script>

<div class="wrapper">
    <a class={font_size} href={link}>{text}</a>
    <TrArrow />
</div>

<style>
        * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        text-decoration: none;
        list-style: none;
    }
    .wrapper {
        display: flex;
        align-items: center;
    }
    .wrapper a {
        text-decoration: underline;
        margin-inline-end: 12px;
        color: #000;
    }
    .wrapper .lg {
        font-size: 18px;
    }
    .wrapper .sm {
        font-size: 16px;
    }
    .wrapper .xs {
        font-size: 14px;
        margin-inline-end: 8px;
    }
</style>

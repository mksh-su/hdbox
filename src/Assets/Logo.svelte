<script>
    export let type = "lg-bck"
</script>

<div class="wrapper">
{#if type == "lg-black"}
    <img src="./img/logo-black.svg" alt="" />
{:else if type == "lg-white"}
    <img src="./img/logo.svg" alt="" />
{/if}
</div>
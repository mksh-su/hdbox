<script>
    import SupportAvatars from "../Assets/SupportAvatars.svelte";
    import Header from "../Components/Header.svelte";
    import Hero from "../Components/Hero.svelte";
    import Products from "../Components/Products.svelte";
    import Features from "../Components/Features.svelte";
    import Releases from "../Components/Releases.svelte";
    import Footer from "../Components/Footer.svelte";
    import Packages from "../Components/Packages.svelte";
    import Plans from "../Components/Plans.svelte";
    import Support from "../Components/Support.svelte";
</script>

<Header />
<Hero />
<Products />
<Features />
<Releases />
<Plans />
<Support />
<Packages />
<Footer />

<style>
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        text-decoration: none;
        list-style: none;
    }
    .divider {
        height: 1px;
        background-color: rgba(0, 0, 0,0.1);
        width: 100% !important;
        margin: 5px 0;
    }
</style>

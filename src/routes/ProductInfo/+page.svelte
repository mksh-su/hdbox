<script>
  import Header from "../../Components/Header.svelte";
  import Breadcrumbs from "../../Components/Breadcrumbs.svelte";
  import Packages from "../../Components/Packages.svelte";
  import ProductFeatures from "../../Components/ProductDescription.svelte";
  import Features from "../../Components/Features.svelte";
  import Footer from "../../Components/Footer.svelte";
</script>

<Header position="static" />
<Breadcrumbs link="productInfo" />
<ProductFeatures />
<Features />
<Packages />
<Footer />

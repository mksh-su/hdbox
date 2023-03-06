<script>
    import PackagesAvatar from "./../Assets/PackagesAvatar.svelte";
    import CustomBtn from "./CustomBtn.svelte";
</script>

<section class="wrapper">
    <div class="avatar">
        <PackagesAvatar />
    </div>
    <div class="content">
        <h6>Channels & Packages</h6>
        <p>
            There's nothing better than watching live TV, movies, <br />
            or sports. With over 280 channels and packages to <br />
            choose from, the HDBOX has something for everyone
        </p>
        <CustomBtn text="Discover Now" link="#" font_size="lg" />
    </div>
</section>

<style>
    .wrapper {
        display: flex;
        align-items: center;
        border: 1px solid rgba(0, 0, 0, 0.1);
        border-radius: 12px;
        padding: 13px 109px 13px 64px;
    }
    .wrapper .avatar {
        margin-inline-end: 106px;
    }
    .wrapper .conent h6 {
        font-size: 16px;
        color: #707070;
    }
    .wrapper .conent p {
        font-size: 18px;
        padding-top: 12px;
        padding-bottom: 31px;
    }
</style>

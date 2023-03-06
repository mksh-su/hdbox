<script>
    import SupportAvatars from "./../Assets/SupportAvatars.svelte";
</script>

<section class="wrapper">
    <div class="avatar-wrapper">
        <SupportAvatars />
    </div>
    <div class="content">
        <h6>Get in Touch</h6>
        <p>
            We're available 24/7, so get in touch with us and <br />
            we'll respond as soon as possible.
        </p>
        <a href="mailto:hello@whitespace.krd"> Say Hello</a>
    </div>
</section>

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
        flex-direction: column;
        align-items: center;
        text-align: center;
        margin-top: 130px;
    }
    .wrapper h6 {
        font-size: 16px;
        color: #707070;
        margin-top: 39px;
    }
    .wrapper p {
        margin-top: 6px;
        margin-bottom: 34px;;
        font-size: 18px;
        color: #000;
    }
    .wrapper a {
        display: flex;
        justify-content: center;
        margin: auto;
        color: #fff;
        background: #E81D2C;
        border-radius: 6px;
        width: 138px;
        height: 40px;
        line-height: 40px;
        font-size: 16px;
    }

</style>

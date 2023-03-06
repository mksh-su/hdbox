<script>
    import Logo from "../Assets/Logo.svelte";
    import CustomBtn from "./CustomBtn.svelte";
    let links = [
        { name: "Product", link: "/#" },
        { name: "Broadcast", link: "/#2" },
        { name: "Product", link: "/#3" },
        { name: "Product", link: "/#4" },
        { name: "Product", link: "/#5" },
        { name: "Product", link: "/#6" },
        { name: "Product", link: "/#7" },
    ];
    let socials = [
        { name: "Instagram", link: "/#" },
        { name: "Facebook", link: "/#2" },
        { name: "Telegram", link: "/#3" },
        { name: "YouTube", link: "/#4" },
    ];
</script>

<footer>
    <div class="first">
        <div class="content">
            <Logo type="lg-000" />
            <p>
                There's nothing better than watching live TV, movies, <br />
                or sports. With over 280 channels and packages to <br />
                choose from, the HDBOX has something for <br />
                everyone
            </p>
        </div>
        <div class="nav">
            <ul class="links">
                <h5>Navigation</h5>
                {#each links as item}
                    <CustomBtn
                        text={item.name}
                        link={item.link}
                        font_size="sm"
                    />
                {/each}
            </ul>
            <ul class="socials">
                <h5>Social</h5>
                {#each socials as item}
                    <CustomBtn
                        text={item.name}
                        link={item.link}
                        font_size="sm"
                    />
                {/each}
            </ul>
        </div>
    </div>
    <div class="last">
        <div class="copyright">
            <p>Copyright © 2010-2022 HDBOX. All rights reserved.</p>
        </div>
        <div class="by">
            <p>Branding & Website by :&nbsp;</p>
            <CustomBtn
                text="whitespace"
                link="https://whitespace.krd/"
                font_size="xs"
            />
        </div>
    </div>
</footer>

<style>
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        text-decoration: none;
        list-style: none;
    }
    footer .first {
        display: flex;
        justify-content: space-between;
    }
    footer .nav {
        display: flex;
    }
    .last {
        border: 1px solid rgba(0, 0, 0, 0.1);
        font-size: 14px;
        padding: 16px;
        display: flex;
        justify-content: space-between;
        border-radius: 6px;
    }
    .last .by {
        display: flex;
    }
</style>

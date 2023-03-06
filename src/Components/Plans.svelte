<script>
    let plans = [
        {
            duration: "6 Months",
            cost: "20,000 IQD",
            perks: [
                "Over 6000 Live IPTV Channels",
                "4K, HD & SD Channels",
                "Premium HD Sports Channels",
                "TV Guide (EPG)",
                "Free Updates",
                "Available Worldwide",
                "Support All Devices",
                "Movies & Series (VOD)",
                "Fast Delivery",
                "24/7 Customer Support",
                "99.9% Uptime",
                "AntiFreeze Technology",
            ],
        },
        {
            duration: "12 Months",
            cost: "35,000 IQD",
            perks: [
                "Over 6000 Live IPTV Channels",
                "4K, HD & SD Channels",
                "Premium HD Sports Channels",
                "TV Guide (EPG)",
                "Free Updates",
                "Available Worldwide",
                "Support All Devices",
                "Movies & Series (VOD)",
                "Fast Delivery",
                "24/7 Customer Support",
                "99.9% Uptime",
                "AntiFreeze Technology",
            ],
        },
    ];
</script>
<section>

    <div class="plan-intro">
        <h2>Flexible Plans</h2>
        <h6>Choose a plan that works best for you</h6>
    </div>
    
    <div class="plan-wrapper">
        {#each plans as plan, i}
        <div class="plan">
            <header class={i == 0 ? "six" : "annual"}>
                <h3>{plan.duration}</h3>
            </header>
            <h4>{plan.cost}</h4>
            <ul class="perks">
                {#each plan.perks as perk}
                <li>{perk}</li>
                {/each}
            </ul>
            <footer>
                <a href="/contact-us">Contact Us</a>
            </footer>
        </div>
        {/each}
    </div>
</section>

<style lang="scss">
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        text-decoration: none;
        list-style: none;
    }
    .plan-intro {
        text-align: center;
    }
    .plan-intro h2 {
        font-size: 54px;
    }
    .plan-intro h6 {
        margin-top: 17px;
        margin-bottom: 38px;
        font-size: 16px;
    }
    .plan-wrapper {
        display: flex;
        justify-content: center;
        gap: 25px;
        border-radius: 24px;
    }
    .plan {
        border: 1px solid rgba(0, 0, 0, 0.1);
        display: flex;
        width: 414px;
        flex-direction: column;
        align-items: center;
        padding: 14px;
        padding-top: 8xp;
        border-radius: 24px;
    }
    .plan .six {
        background: url("/src/Assets/6.png");
    }
    .plan .annual {
        background: url("/src/Assets/12.png");
    }
    .plan header {
        width: 100%;
        height: 156px;
        line-height: 156px;
        text-align: center;
        color: #fff;
        border-radius: 24px;
        font-size: 32px;
        font-weight: "Meduim";
    }

    .plan h4 {
        margin-top: 32px;
        margin-bottom: 42px;
        font-size: 24px;
    }
    .perks {
        font-size: 24px;
        color: #323232;
    }
    .perks li {
        list-style: inside;
    }

    footer {
        margin-top: 46px;
        border-radius: 24px;
        background: #eaeaea;
        width: 100%;
        text-align: center;
        height: 68px;
        line-height: 68px;
    }
    footer a {
        color: #000;
        font-size: 20px;
    }
    footer a:hover {
        color: #e81d2c;
    }
</style>

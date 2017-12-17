<template>
    <div class="overview-wrap">
        <ul class="img-container">
            <li>
                <img src="~images/overview/overview-1.png" alt="">
            </li>
            <li>
                <img src="~images/overview/overview-2.png" alt="">
            </li>
            <li class="full">
                <img src="~images/overview/overview-3.png" alt="">
            </li>
            <li>
                <img src="~images/overview/overview-4.png" alt="">
            </li>
            <li>
                <img src="~images/overview/overview-5.png" alt="">
            </li>
            <li class="full">
                <img src="~images/overview/overview-6.png" alt="">
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    methods: {},
    components: {
    },
    mounted() {
    },
    destroyed() {
    }
}
</script>

<style lang="scss" scoped>
.overview-wrap {
    min-height: 800px;
    text-align: center;
}

.img-container {
    background: #fff;
    li {
        // margin: 60px 100px;
        img {
            width: 1220px;
            margin: 0 auto;
            display: block;
        }
        &.full img {
            width: 100%;
        }
    }
}
</style>
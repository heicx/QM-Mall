<template>
    <div class="overview-wrap">
        <ul class="img-container">
            <li>
                <img src="/src/assets/images/wallpaper/9.png" alt="">
            </li>
            <li>
                <img src="/src/assets/images/wallpaper/10.png" alt="">
            </li>
            <li>
                <img src="/src/assets/images/wallpaper/11.png" alt="">
            </li>
            <li>
                <img src="/src/assets/images/wallpaper/12.png" alt="">
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
    li {
        margin: 60px 100px;
        img {
            width: 1220px;
        }
    }
}
</style>
<template>
    <div class="stars">
        <img src="./img/full.png" v-for="index of fullStar" :key="index + 'full'">
        <img src="./img/half.png" v-for="index of halfStar" :key="index + 'half'">
        <img src="./img/no.png" v-for="index of noStar" :key="index + 'no'">
    </div>
</template>
<script>
    export default {
        props: ['num'],
        computed: {
            fullStar () {
                return Math.floor(this.num)
            },
            halfStar () {
                return this.num % 1 >= 0.5 ? 1 : 0
            },
            noStar () {
                return 5 - this.fullStar - this.halfStar
            }
        }
    }
</script>
<style lang="less">
    .stars {
        display: flex;
        width: 70px;
        height: 14px;
    }
</style>

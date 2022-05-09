<script>
import CompMovies from "./compmovies/CompMovies.vue"

    export default {
        name: 'Movies',
        components: {
        CompMovies
    }
}

</script>

<template>
    <div class="border">
        <div class="DivMovies">
            <CompMovies/>
        </div>
    </div>
</template>

<style>
.border {
    width: 100%;
    height: 1610px;
    position: relative;
    top: -90px;
    border: solid 1px #8080804d;
    max-width: 1100px;
    margin: 0 auto;
    border-radius: 10px;
}

.DivMovies {
    position: relative;
    top: 0px;
    height: 100%;
    width: 90%;
    max-width: 1100px;
    margin: 0 auto;
}

</style>
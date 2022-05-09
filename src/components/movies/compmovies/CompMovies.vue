<template>
    <div class="Grid" >
        <div class="Movies" v-for="(list, index) in list" v-bind:key="index">
            <div id="photo">
                <img v-bind:src='list.poster_path' alt="">
            </div>

            <div id="divbotton">
                <h1>{{list.title}}</h1>
                <div id="vote">
                    <p id="voteaverage">{{list.vote_average}}</p>
                    <p id="gender">Gênero</p>
                </div>
                <p>R$ 79,99</p>
                <button> <p id="titlebutton">Adicionar</p> </button>
            </div>
        </div>
    </div>
</template>

<style>
.Grid {
    position: relative;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    top: 121px;
    height: 330px;
    width: 100%;
    max-width: 1100px;
}

.Movies {
    position: relative;
    margin: 0 auto;
    height: 330px;
    width: 100%;
    max-width: 160px;
    margin-top: 30px;
    border: solid 1px gray;
}

    #photo {
        position: relative;
        height: 190px;
        max-width: 160px;
        background: #DFE6ED;
        border: solid 1px;
    }

    img {
        width: 100%;
        max-width: 160px;
        height: 190px;
    }

    #divbotton {
        position: relative;
        height: 135px;
        max-width: 200px;
        text-align: center;
        border: solid 1px;
    }

    h1 {
        margin-top: 5px;
        font-weight: 700;
        font-size: 12px;
        text-align: center;
    }

    #vote {
        display: flex;
        justify-content: space-around;
        margin: 2px;
    }

        #voteaverage {
            font-weight: 700;
        }

    button {
        width: 102%;
        height: 35px;
        position: absolute;
        top: 103px;
        left: -2px;
        background: #6558F5;
        border-radius: 3px;
    }

        #titlebutton {
            color: white;
            font-weight: 700;
            font-size: 16px;
        }


@media (max-width: 925px){
    .Grid {
        grid-template-columns: repeat(3, 1fr);
    }
}

@media (max-width:700px){
    .Grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width:475px){
    .Grid {
        grid-template-columns: repeat(1, 1fr);
    }
}
</style>

<script >
import api from "./../../../api/api"


export default {
    name: 'CompMovies',
    data(){
        return{
        list: [],
        url: `https://image.tmdb.org/t/p/original` 
        }
    },
      mounted(){
        let list = [];
        api.get('week?api_key=fdec3cf017f52d95fdcd581919da1255')
        .then(e => {     
            for (let index = 0; index < 16; index++) {
                list.push(e.data.results[index]); 
                list[index].poster_path = `https://image.tmdb.org/t/p/original${list[index].poster_path}`    
            }
            this.list = list;
            console.log(this.list)
        }) 
    }
}
</script>
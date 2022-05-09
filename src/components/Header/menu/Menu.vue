<script> 

</script>

<template>
    <div class="menu">
        <div class="divlogo">
            <h2 id="logo"> LOGO </h2>
        </div>

        <div class="input">
            <input type="text" placeholder="Pesquisar">
             <b-icon  icon="search" > </b-icon> 
        </div> 
        
        <div id="icons">
        </div>
    </div>
</template>

<style scoped>
.menu {
    position: absolute;
    background: #8DD7CF;
    height: 50px;
    width: 100%;
}   

.divlogo {
    position: relative;
    display: flex;
    left: 4%;
    width: 80px;
    height: 100%;
    align-items: center;
    justify-content: center;
}
    #logo {
        color: white;
        font-weight: 700;
    }


.input {
    position: relative;
    top: -45px;
    left: 29%;
    width: 40%;
    display: flex;
    align-items: center;
    align-content: center;
    height: 38px;
    border-radius: 3px;
}

    input {
        width: 100%;
        height: 100%;
        border-radius: 2px;
        padding: 10px;

    } 

</style>
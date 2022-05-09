<script> 

</script>

<template>
  <div class="headertop">
        <div class="divcircle">
            <div id="circle"></div>
            <div id="circle"></div>
            <div id="circle"></div>
        </div>
    </div>
</template>

<style scoped>
.headertop {
  height: 40px;
  width: 100%;
  background: #9EADBA;
  border-radius: 10px 10px 0px 0px;
}

    .divcircle {
            position: relative;
            left: 15px;
            display: flex;
            width: 55px;
            height: 100%;
            justify-content: space-around;
            align-items: center;
    }

        #circle {
            border-radius: 80px;
            height: 15px;
            width: 15px;
            background: #8F9EAC;
        }
</style>

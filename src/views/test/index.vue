<template>
  <div>
       test
  </div>
</template>

<script setup name="dashboard">
import axios from 'axios'

axios.post('http://localhost:8000/login',{
    name:"xuguang",
    password:"xg970511"
}).then(res => {

    console.log('%c [  ]-15', 'font-size:13px; background:pink; color:#bf2c9f;', res)
})

// import {testApi} from '../../api'

// testApi.test({
//     name:"xuguang",
//     password:"xg970511"
// }).then(res => {
//     console.log('%c [  ]-15', 'font-size:13px; background:pink; color:#bf2c9f;', res)
// })



</script>

<style  scoped>
</style>

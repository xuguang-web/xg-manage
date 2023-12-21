<template>
  <div >
      66
  </div>
</template>

<script setup lang="ts" name="test">
import axios from 'axios'
axios.post('http://localhost:8000/login',{
    name:"kobe",
    password: "123456"
}).then(res => {
    console.log('%c [  ]-15', 'font-size:13px; background:pink; color:#bf2c9f;', res)
})
</script>

<style lang="scss" scoped>
</style>

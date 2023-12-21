<template>
	<div class="galaxy">
		 <canvas ref="canvasRef" width="300" height="300"></canvas>
	</div>
</template>

<script setup lang="ts" name="point">
import { ref, onMounted } from 'vue';

// canvas类型断言
const canvasRef = ref<HTMLCanvasElement | null>(null);
let ctx = ref()
let sun = ref()
let earth = ref()
let moon = ref()

// 初始化canvas对象
const InitCanvas = () => {
    let canvas = canvasRef.value;
    ctx.value = canvas?.getContext('2d')

    // 初始化图片
    let sun = new Image()
    sun.src = "../images/canvas_sun.png"

    ctx.value.drawImage(sun, 0, 0);

    console.log('%c [  ]-28', 'font-size:13px; background:pink; color:#bf2c9f;', 66)
    // sun.onload = () => {
    //     console.log('%c [  ]-28', 'font-size:13px; background:pink; color:#bf2c9f;', 666)
       
    // }
    
    // earth.value = new Image()
    // earth.value.src = "../images/canvas_earth.png"
    

    // moon.value = new Image()
    // moon.value.src = "../images/canvas_moon.png"
}

// 初始化背景图片
const drawBg = () => {
    ctx.value.save()
    // ctx.value.drawImage(sun.value,0,0)
    // sun.value.onload = () => {
       
    // }
    ctx.value.translate(150,150)
    ctx.value.strokeStyle = 'rgba(0,153,255,0.4)'
    ctx.value.beginPath()
    ctx.value.arc(0,0,105,0,Math.PI *2)
    ctx.value.stroke()
    ctx.value.restore()
}

// 初始化地球
const drawEarth = () => {
    let time = new Date()
    let second = time.getSeconds()
    // 解决动画卡顿问题获取毫秒
    let mill = time.getMilliseconds()
    ctx.value.save()
    ctx.value.translate(150,150)

    // 2.1 地球旋转
    
    // 1s 1mm -> 
    ctx.value.rotate(Math.PI*2/60*second + Math.PI*2/60/1000*mill)
    ctx.value.translate(105,0) // 圆圈的坐标系

    ctx.value.drawImage(earth.value,-12,-12)
}

// 初始化月球
const drawMoon = () => {
    let time = new Date()
        let second = time.getSeconds()
        let mill = time.getMilliseconds()
       
        ctx.value.save()
        // 3.1 月球旋转
        ctx.value.rotate(Math.PI*2/10*second + Math.PI*2/10/1000*mill)
        ctx.value.translate(0,28)
        ctx.value.drawImage(moon.value,-3.5,-3.5)
        ctx.value.restore()

        // 绘制地球的蒙版(圆上的坐标系) --实现地球向阳面的阴影效果
        ctx.value.save()
        ctx.value.beginPath()
        ctx.value.fillStyle = 'rgba(0,0,0,0.4)'
        ctx.value.fillRect(0,-12,40,24)
        ctx.value.restore()

        ctx.value.restore()
}

// 注意坐标变换
const draw = () => {
    ctx.value.clearRect(0,0,300,300)
    ctx.value.save()

    // 1.绘制太阳系背景
    drawBg()
    // 2.绘制地球
    // drawEarth()
    // // // 3.绘制月球(复用地球坐标系)
    // drawMoon()

    requestAnimationFrame(draw)
}


onMounted (()=>{
    // 初始化canvas数据
    InitCanvas()
    // 采用requestAnimationFrame动画函数
    requestAnimationFrame(draw)

})



</script>

<style scoped >

.galaxy {
    width: 100%;
    height: 100%;
    /* background-image: url(../images/grid.png); */

}

</style>

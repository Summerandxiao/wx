<template>
  <div>
     <ul>
       
      <li><image :src="arr.img" /></li>
      <li class="tit">标题：{{arr.title}}</li>
 </ul>
      <map
        :id="arr.id"
        :longitude="113.34"
        :latitude="22.16"
       :scale="14"
        :controls="controls"
        :bindcontroltap="controltap"
        :markers="markers"
        :bindmarkertap="markertap"
        :polyline="polyline"
        :bindregionchange="regionchange"
        show-location
        style="width: 100px; height: 100px;"
        @regionchange="regionChange" @begin="regionChangeBegin" @end="regionChangeEnd"
      ></map>
      
  </div>
</template>

<script>

//import QQMapWX from '../../../static/qqmap-wx-jssdk.js';

export default {
 data(){
   return{
      arr:{}
   }
  
  },
mounted(){
 // console.log( this.getQuery())
 console.log(this.$root.$mp.query)
 const info = this.$root.$mp.query
 this.arr = info
 console.log(this.arr)
wx.getLocation({
  type: 'wgs84',
  success(res) {
    const latitude = res.latitude
    const longitude = res.longitude
    const speed = res.speed
    const accuracy = res.accuracy
  }
})
 }
}
</script>

<style lang="scss" scoped>
.tit{
  font-size:20px;
}
</style>

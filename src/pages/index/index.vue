<template>
  <div class="home">
   <swiper
         :indicator-dots=true
         :autoplay=true
         :interval=3000
         :duration=500
         >
           <swiper-item v-for="(item,index) in bannerdata" :key="index">
               <image :src="item" class="slide-image" width="100%" height="150" />
            </swiper-item>
   </swiper>
    <ul class="cxlist">
       <li v-for="(item,index) of prolist" :key="index">
         <view class="top">  {{item.title}}</view>
          <view> <image :src="item.images.small" /> </view>  
       </li>
    </ul>
     <Where></Where>
  </div>
</template>

<script>

import store from "./store" ;
import Where from "@/components/where/where.vue";
export default {
  components:{
       Where
  },
 computed:{
      bannerdata(){
         return store.state.bannerdata
      },
 prolist(){
         return store.state.prolist
      }
 },
   
     mounted(){
        this.$http.get("https://www.daxunxun.com/banner") 
           .then(data=>{
             console.log(data.data)
             let arr=[]
             data.data.map((item)=>{
               arr.push("https://www.daxunxun.com"+item)
             })
            store.commit("changebannerdata",arr)
           })
         this.$http.get("https://www.daxunxun.com/douban")
            .then((data)=>{
               console.log(data)
                let brr=[]
               brr=data.data.slice(0,4)
               console.log(brr)
               store.commit("changeprolist",brr)
            }) 
     }
}
</script>

<style lang="scss" scoped>


.cxlist{
   margin-top:20px;
    height:70px;
    width:100%;
    display:flex;
    justify-content:space-around;
      li{
         float:left;
         height:70px;
         width:70px;
         position:relative;
         .top{
            font-size:12px;
            position:absolute;
            background-color:#ff8000;
            color:#fff;
            width:30px;
            height:20px;
            border-radius:5px 10px;
            white-space:nowrap;
            overflow:hidden;
          
            margin-left:-5px;
         }
         image{
            height:60px;
            width:60px;
            border-radius:20px;
            border:1px solid #000;
         }
      }
 }
 
</style>

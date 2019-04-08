<template>
     <div class="play">
       <div class="text">
         <div>
             <div class="chin">玩哪里</div>
             <div class="engl">WHERE TO PLAY</div>
         </div>
         <navigator url="../../pages/where/main" class="more">MORE > </navigator>
       </div>
       <div class="scroll_box">
        <scroll-view scroll-x="true" class="poster" scroll-left="scrollLeft" style="width: auto;overflow:hidden;">
           
                <view v-for="(item,index) in prolist"
                 id="index" 
                  @click="goDetail(item.id,item.title,item.images.small)"
                  class="sitme"
                  :key="index">
                 <image class="img" :src="item.images.small" />
                 <div class="title">{{item.title}}</div>
                  </view>
               
            </scroll-view>
    </div>
    </div>
       
</template>

<script>
  import store from "./store.js";
   export default{
        computed:{
            prolist(){
                return store.state.prolist
            }
        },
        methods:{
            goDetail(id,title,img){
                wx.navigateTo({
                        url: '../../pages/detailwhere/main?id=' + id+"&title="+title+"&img="+img
                    })
            }
        },
        mounted(){
             this.$http.get("https://www.daxunxun.com/douban")
               .then((data)=>{
                   store.commit("changeprolist",data.data)
               })
        }
   }
</script>

<style lang="scss"  scoped>
.paly{
     display:block;
      background-color:#ff8000;
     width:100%;
     height:150px;
 }
 .text{
         width:100%;
         height:50px;
         display:flex;
         background-color:#ff8000;
         justify-content:space-between;
         align-items:center;
         padding:0 10px;
         box-sizing:border-box;
         }
          .chin{
             font-weight:200;
             font-size:14px;
         }
         .engl{
             font-size:14px;
         }
         .more{
             font-size:12px;
         }
         .scroll_box{
              width:100%;
             white-space: nowrap;
             overflow:hidden;
             padding-top:10px;
         }
         
          .sitme{
                 display:inline-block;
                 padding:0 5px;
                  
            }
            .img{
                        width:70px;
                        height:50px;
                    }
                    .title{
                        font-size:12px;
                    }
         
        
</style>
<template>
      <div class="scroll_box">
        <view  class="poster"  style="width: auto;overflow:hidden;">
           
                <view v-for="(item,index) in prolist"
                 id="index" 
                  @click="goDetail(item.id,item.title,item.images.small)"
                  class="sitme"
                  :key="index">
                 <image class="img" :src="item.images.small" />
                 <div class="title">{{item.title}}</div>
                  </view>
               
            </view>
    </div>
</template>

<script>
 import store from "./store.js";
   export default{
       data(){
           return{
                pageCode:1
           }
          
       },
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
            
            },
                   onReachBottom () {
                    // 请求下一页数据，拼接之前的数据，重新渲染
                    api.request('douban?count=20&start='+ this.data.pageCode * 20).then((data) => {
                    console.log(data)
                    let pageCode = this.data.pageCode + 1;
                    if (data.length == 0) {
                        wx.showToast({
                        title: '没有数据了',
                        duration: 2000
                        })
                        return;
                    }
                    this.$nextTick({
                        pageCode: pageCode,
                        prolist: [...store.state.prolist, ...data]
                    })
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

<style lang="scss" scoped>
 .scroll_box{
              height:100%;
             overflow:hidden;
          
         }
         
          .sitme{
                height:150px;
                 padding-top:10px;
                 padding-left:5%;
               
            }
            .img{
                        width:90%;
                        height:150px;
                         position:relative;
                    }
                    .title{
                      background-color:#ff8000;
                      width:50px;
                      height:20px;
                      position:absolute;
                        font-size:12px;
                        padding-top:140px;
                        padding-left:10px;
                        
                    }
         
</style>

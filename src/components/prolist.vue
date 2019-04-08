<template>
   <ul class="card">
      <navigator class="list" v-for="(item,index) in prolist" :key="index">
         {{item.images.small}}
      </navigator>
   </ul>    
</template>

<script>
import store from "./store";
export default {
  computed:{
    prolist(){
        return store.state.prolist
      }
  },
  mounted(){
            this.$http.get("https://www.daxunxun.com/douban") 
           .then(data=>{
             console.log(data)
             store.commit("changeprolist",data.data)
           }) 

  }
   
}
</script>

<style scoped lang="less">
.card {
  height:50px;
  width:100%;
  overflow:hidden;
  .list{
    list-style:none;
    float:left;
    height:50px;
    width:50px;
    padding-right:10px;
    padding-left:10px;
  }
}
</style>

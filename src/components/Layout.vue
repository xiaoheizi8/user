<template>
  <div id="aaa">
<!--    <div class="header-right">-->
<!--      <el-icon><Document/></el-icon>-->
<!--      <router-link to="/person" class="header-item">个人信息</router-link>-->
<!--    </div>-->
    <el-container>
      <el-header class="el-header" style="background-color: white; display: flex; justify-content: space-between; align-items: center; padding: 0 20px;">
      </el-header>
      <el-container>
        <el-aside width="200px">
          <LeftMenu/>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
      <el-footer height="">
      </el-footer>
    </el-container>

  </div>
</template>

<script>
import LeftMenu from "../components/LeftMenu.vue";
import {  Document } from '@element-plus/icons-vue';
// import {}
export default {
  name: "Layout",
  components: {LeftMenu,Document}
}
</script>

<style scoped>
.el-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}



</style>
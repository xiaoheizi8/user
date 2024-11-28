<template>
  <div class="header-right">
    <el-icon><Document/></el-icon>
    <router-link to="/person" class="header-item">个人信息</router-link>
  </div>
  <div id="center">
    <el-container>
      <el-header class="header">
        <div class="logo">
          <el-icon> </el-icon>
          <span>双碳招投标网</span>
        </div>

      </el-header>

      <el-container>
        <el-aside width="200px">
          <el-menu
              default-active="1"
              class="el-menu-vertical-demo"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b"
          >


          </el-menu>
        </el-aside>

        <el-main>
          <h1>欢迎来到双碳招投标网</h1>
          <p>这里是您的主界面，您可以在左侧菜单中选择不同的功能。</p>
          <el-card>
            <h2>公告</h2>
            <p>暂无公告信息。</p>
          </el-card>
        </el-main>
      </el-container>

      <el-footer>
        <span>© 2024 双碳招投标网</span>
      </el-footer>
    </el-container>
  </div>
</template>

<script setup>


import { useRouter } from 'vue-router';
import {  Document, Location } from '@element-plus/icons-vue';

const router = useRouter();


</script>

<style scoped>
.header-right {
  position: absolute;
  top: 0;
  right: 0;
}


.header-item {
  margin-left: 10px; /* 根据需要调整间距 */
  text-decoration: none; /* 去除下划线 */
  color: inherit; /* 使链接颜色与周围文本一致 */
  display: flex;
  align-items: center;
}

</style>
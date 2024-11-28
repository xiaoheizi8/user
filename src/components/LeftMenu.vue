<template>
  <div class="common-layout">
    <el-menu :router="true">
      <el-container>
        <el-header>
          <el-aside class="aside" width="200px">
            <el-row class="tac">
              <el-col :span="12" class="menu-col">
                <img src="../assets/vue.svg" />
                <h5 class="mb-2">个人中心</h5>
                <el-menu
                    active-text-color="#ffd04b"
                    background-color="#545c64"
                    class="el-menu-vertical-demo"
                    text-color="#fff"
                >
                  <el-menu-item @click="$router.push('/home')">
                    <el-icon><icon-menu /></el-icon>
                    <span>首页</span>
                  </el-menu-item>
                  <el-menu-item @click="$router.push('/myBids')">
                    <el-icon><document/></el-icon>
                    <span>我的标的</span>
                  </el-menu-item>

<!--                  <el-sub-menu>-->
<!--                    <template #title>-->
<!--                      <el-icon><location /></el-icon>-->
<!--                      <span>制造执行</span>-->
<!--                    </template>-->
<!--                    <el-menu-item-group title="mes">-->
<!--                      <el-menu-item  @click="$router.push('/check')">质量管理</el-menu-item>-->
<!--&lt;!&ndash;                      <el-menu-item  @click="$router.push('/art')">工艺建模</el-menu-item>&ndash;&gt;-->
<!--                    </el-menu-item-group>-->
<!--                  </el-sub-menu>-->
                </el-menu>
              </el-col>
            </el-row>
          </el-aside>
        </el-header>

      </el-container>
    </el-menu>
  </div>
</template>

<script lang="ts">

export default {
  name: 'LeftMenu'

};

</script>

<style scoped>
.aside {
  display: flex;
  padding: 0; /* 移除左侧填充 */
  /*position: relative;*/
  position: fixed;
  top:0;
  left: 0;
  height: 100vh; /* 使容器充满整个视口高度 */
  justify-content:flex-start ;
}

.menu-col {
  display: flex;
  flex-direction: column; /* 垂直排列内容 */
  justify-content: flex-start; /* 内容从顶部开始排列 */
  width: 350px; /* 设置固定宽度 */
  background-color: #545c64; /* 确保菜单背景色一致 */
}
</style>
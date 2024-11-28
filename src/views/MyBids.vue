<template>
  <div class="main">
    <el-table :data="bidsData" style="margin-top: 20px">
      <el-table-column prop="name" label="标的名称" width="200"/>
      <el-table-column prop="endTime" label="投标结束时间" width="200"/>
      <el-table-column prop="status" label="状态" width="200">
        <template #default="scope">
          <span :class="statusClass(scope.row.status)">{{ scope.row.status }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="200">
        <template #default="scope">
          <el-button @click="editBid(scope.row)" type="primary" size="small">修改</el-button>
          <el-button @click="deleteBid(scope.row.id)" type="danger" size="small">删除</el-button>
          <el-button
            v-if="scope.row.status === '报名成功'"
            @click="submitDocuments(scope.row)"
            type="success"
            size="small"
          >提交资料
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'; // 导入vue-router

// 静态数据
const bidsData = ref([
  {
    id: 1,
    name: '标的A',
    endTime: '2024-01-01 10:00',
    status: '报名成功'
  },
  {
    id: 2,
    name: '标的B',
    endTime: '2024-01-02 11:00',
    status: '已过期'
  },
  {
    id: 3,
    name: '标的C',
    endTime: '2024-01-03 12:00',
    status: '资质审核'
  },
  {
    id: 4,
    name: '标的D',
    endTime: '2024-01-04 13:00',
    status: '待开标'
  },
  {
    id: 5,
    name: '标的E',
    endTime: '2024-01-05 14:00',
    status: '开标结果'
  }
]);

// 获取vue-router实例
const router = useRouter();

// 根据状态返回不同的类名，用于应用不同的样式
const statusClass = (status) => {
  switch (status) {
    case '报名成功':
      return 'status-success';
    case '已过期':
      return 'status-expired';
    case '资质审核':
      return 'status-pending';
    case '待开标':
      return 'status-waiting';
    case '开标结果':
      return 'status-completed';
    default:
      return '';
  }
};

// 编辑标的信息的方法
const editBid = (row) => {
  console.log('编辑:', row);
  // 这里可以添加编辑逻辑，例如打开一个对话框来编辑数据
};

// 删除标的信息的方法
const deleteBid = (id) => {
  console.log('删除:', id);
  // 这里可以添加删除逻辑，例如从数组中移除对应的数据
};

// 提交资料跳转的方法
const submitDocuments = (row) => {
  console.log('提交资料:', row);
  // 跳转到布标资料提交页
  router.push({ path: '/upload', params: { bidId: row.id } });
};
</script>

<style scoped>
.main{
  margin: 20px;
  display: flex;

}
.status-success {
  color: green;
}

.status-expired {
  color: red;
}

.status-pending {
  color: orange;
}

.status-waiting {
  color: blue;
}

.status-completed {
  color: purple;
}
</style>

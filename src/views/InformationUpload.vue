<template>
  <div>
    <!-- 企业信息确认部分 -->
    <el-form :model="enterpriseInfo" label-width="150px" ref="form">
      <el-form-item label="企业名称" prop="companyName">
        <el-input v-model="enterpriseInfo.companyName" placeholder="请输入企业名称" />
      </el-form-item>
      <el-form-item label="统一社会信用代码" prop="creditCode">
        <el-input v-model="enterpriseInfo.creditCode" placeholder="请输入统一社会信用代码" />
      </el-form-item>
      <el-form-item label="公司注册地址" prop="address">
        <el-input v-model="enterpriseInfo.address" placeholder="请输入公司注册地址" />
      </el-form-item>
      <el-form-item label="机构类型" prop="organizationType">
        <el-input v-model="enterpriseInfo.organizationType" placeholder="请输入机构类型" />
      </el-form-item>
      <el-form-item label="企业性质" prop="companyType">
        <el-input v-model="enterpriseInfo.companyType" placeholder="请输入企业性质" />
      </el-form-item>
      <el-form-item label="成立日期" prop="establishmentDate">
        <el-date-picker v-model="enterpriseInfo.establishmentDate" type="date" placeholder="选择成立日期" />
      </el-form-item>
      <el-form-item label="法人/负责人" prop="legalPerson">
        <el-input v-model="enterpriseInfo.legalPerson" placeholder="请输入法人或负责人" />
      </el-form-item>
      <el-form-item label="法人/负责人身份证" prop="legalPersonIdCard">
        <el-input v-model="enterpriseInfo.legalPersonIdCard" placeholder="请输入身份证号" />
      </el-form-item>
      <el-form-item label="单位联系地址" prop="contactAddress">
        <el-input v-model="enterpriseInfo.contactAddress" placeholder="请输入单位联系地址" />
      </el-form-item>
      <el-form-item label="经营范围" prop="businessScope">
        <el-input v-model="enterpriseInfo.businessScope" placeholder="请输入经营范围" />
      </el-form-item>
      <el-form-item label="公司简况" prop="companyProfile">
        <el-input type="textarea" v-model="enterpriseInfo.companyProfile" placeholder="请输入公司简况" />
      </el-form-item>
      <el-form-item label="营业执照扫描件" prop="licenseFile">
        <el-upload
          :action="uploadAction"
          :on-success="handleUploadSuccess"
          :on-error="handleUploadError"
          :before-upload="beforeUpload"
          multiple
          limit="10"
          accept="application/pdf,image/png,image/jpg,image/jpeg,application/zip,application/rar"
          :file-list="fileList"
        >
          <el-button slot="trigger" type="primary">上传营业执照扫描件</el-button>
        </el-upload>
      </el-form-item>
      <!-- 其他资料上传 -->
      <el-form-item label="法人/负责人身份证扫描件" prop="idCardFile">
        <el-upload
          :action="uploadAction"
          :on-success="handleUploadSuccess"
          :on-error="handleUploadError"
          :before-upload="beforeUpload"
          multiple
          limit="10"
          accept="application/pdf,image/png,image/jpg,image/jpeg,application/zip,application/rar"
          :file-list="fileList"
        >
          <el-button slot="trigger" type="primary">上传身份证扫描件</el-button>
        </el-upload>
      </el-form-item>
    </el-form>

    <!-- 提交按钮 -->
    <el-button type="success" @click="submitForm">提交资料</el-button>

    <!-- 提示 -->
    <el-dialog :visible.sync="dialogVisible" title="提交成功">
      <p>报名成功！</p>
      <span slot="footer" class="dialog-footer">
        <el-button @click="closeDialog">关闭</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { ElMessage } from 'element-plus';

// 模拟上传接口URL
const uploadAction = 'https://your-upload-api.com/upload';

// 企业信息表单数据
const enterpriseInfo = reactive({
  companyName: '',
  creditCode: '',
  address: '',
  organizationType: '',
  companyType: '',
  establishmentDate: '',
  legalPerson: '',
  legalPersonIdCard: '',
  contactAddress: '',
  businessScope: '',
  companyProfile: '',
  licenseFile: '',
  idCardFile: '',
});

// 文件列表
const fileList = ref([]);

// 跳转路由
const router = useRouter();

// 上传文件之前的验证
const beforeUpload = (file) => {
  const isValidFile = ['pdf', 'zip', 'rar', 'png', 'jpg', 'jpeg'].includes(file.type.split('/')[1]);
  const isSmallEnough = file.size / 1024 / 1024 < 100; // 文件大小小于100MB
  if (!isValidFile) {
    ElMessage.error('只支持 pdf/zip/rar/png/jpg/jpeg 文件类型');
  }
  if (!isSmallEnough) {
    ElMessage.error('文件大小不能超过 100MB');
  }
  return isValidFile && isSmallEnough;
};

// 上传成功回调
const handleUploadSuccess = (response, file, fileList) => {
  console.log('上传成功', response);
  fileList.value = fileList;
};

// 上传失败回调
const handleUploadError = (error, file, fileList) => {
  console.error('上传失败', error);
};

// 提交表单
const submitForm = () => {
  // 你可以添加表单验证逻辑
  console.log('提交的企业信息:', enterpriseInfo);
  if (enterpriseInfo.companyName && enterpriseInfo.creditCode && enterpriseInfo.address) {
    // 显示成功提示
    dialogVisible.value = true;
    // 跳转到我的标的页面
    setTimeout(() => {
      router.push('/myBids');
    }, 2000);
  } else {
    ElMessage.error('请填写必填项');
  }
};

// 关闭弹框
const closeDialog = () => {
  dialogVisible.value = false;
};

// 弹框显示控制
const dialogVisible = ref(false);
</script>

<style scoped>
/* 自定义上传按钮的样式 */
.el-upload__text {
  display: inline-block;
  margin-right: 10px;
}
</style>

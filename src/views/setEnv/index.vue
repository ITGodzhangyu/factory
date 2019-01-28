<template>
  <div class="app-container">
    <div class='title'>
    	  <h2><i style='color:#67C23A;margin-right: 5px;' class='el-icon-success'></i>代码工程创建成功</h2>
    	  <div class='btn'>
    	  	<el-button type="primary" size='mini' @click='dialogVisible=true'>生成代码工程</el-button>
    	  	<el-button type="primary" size='mini'>下载zip</el-button>
    	  </div>
    </div>
    <div class='content'>
    	  <p>代码工程：这是个代码工程</p>
    	  <p>代码工程：这是个代码工程</p>
    	  <p>代码工程：这是个代码工程</p>
    	  <p>代码工程：这是个代码工程</p>
	</div>
	<el-dialog
	  title="Gitlab生成代码工程"
	  :visible.sync="dialogVisible"
	  width="500px"
	  >
	  <el-form :model='formData' label-width="80px" size='small'>
	  	<el-form-item prop='name' label='用户名：'>
	  		<el-input v-model='formData.name' clearable></el-input>
	  	</el-form-item>
	  	<el-form-item prop='password' label='密码：'>
	  		<el-input type='password' v-model='formData.password' clearable></el-input>
	  	</el-form-item>
	  	<el-form-item prop='git' label='Gitlab：'>
	  		<el-input v-model='formData.git' clearable></el-input>
	  	</el-form-item>
	  </el-form>
	  <span slot="footer" class="dialog-footer">
	  	<el-button type="primary" @click="dialogSuccess = true;dialogVisible = false" size='mini'>提 交</el-button>
	  	<el-button @click="dialogVisible = false" size='mini'>取 消</el-button>
	  </span>
	</el-dialog>
    <el-dialog
	  :visible.sync="dialogSuccess"
	  class='dialog_self'
	  width="500px"
	  >
	  <p class='dialog_content'><i style='color:#67C23A;margin-right: 5px;' class='el-icon-success'></i>生成代码工程成功</p>
	  <p>{{http}}</p>
	  <span slot="footer" class="dialog-footer">
	  	<el-button type="primary" icon="document" @click='handleCopy' size='mini'>复制链接</el-button>
	  </span>
	</el-dialog>
  </div>
</template>

<script>
import clip from '@/utils/clipboard'
export default {
  data() {
    return {
    	  dialogVisible: false,
    	  dialogSuccess: false,
    	  http: 'Http:asadawefa/a/d/asf//afa.d',
    	  formData: {
    	  	name: '',
    	  	password: '',
    	  	git: ''
    	  }
    }
  },
  created() {
  },
  methods: {
    handleCopy(event) {
    	  clip(this.http, event)
    	  this.dialogSuccess = false
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  .app-container {
	.title {
	  position: relative;
	  padding-bottom: 20px;
	  border-bottom: 2px solid #f1f4f6;
	  position: relative;
	  h2 {
		font-size: 18px;
		margin: 0;
		font-weight: normal;
      }
      .btn {
      	position: absolute;
      	right: 0;
      	top: 0;
      }
	}
	.content {
	  padding-top: 20px;
	  p {
	  	color: #999;
	  	font-size: 14px;
	  }
	}
	.dialog_content {
	  font-size: 14px;
	}
  }
</style>

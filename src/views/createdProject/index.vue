<template>
  <div class="app-container">
    <div class='title'>
    	  <h2>代码工程创建</h2>
    </div>
    <div class='content'>
    	  <el-form :model="formList" ref="formList" label-position='top' size='mini' status-icon :inline='true'>
		  <el-steps direction="vertical" :active="active">
		    <el-step v-for='(item, index) in formList.list' :key='index'>
		    	  <template slot="description">
		    	  	<div>
		    	  		<el-form-item :prop="'list.' + index + '.value'" :label="item.name" :key='index' :rules='item.rules'>
		    	  		  <div v-if='item.type === "text"'>
		    	  		  	<el-input v-model="item.value" :disabled="index < active"></el-input>
		    	  		  </div>
		    	  		  <div v-if='item.type === "checkbox"'>
		    	  		  	<el-checkbox-group v-model="item.value" :disabled="index < active">
					      <el-checkbox v-for="check in item.data" :label="check.code" :key="check.code">{{check.name}}</el-checkbox>
					    </el-checkbox-group>
		    	  		  </div>
		    	  		  <div v-if='item.type === "textarea"'>
		    	  		  	<el-input type='textarea' :rows="3" v-model="item.value" :disabled="index < active"></el-input>
		    	  		  </div>	
		    	  		  <div v-if='item.type === "radio"'>
		    	  		  	<el-radio-group v-model="item.value">
		    	  		  		<el-radio v-for='rad in item.data' :label="rad.code" :key='rad.code'>{{rad.name}}</el-radio>
		    	  		  	</el-radio-group>
		    	  		  </div>	
		  		    </el-form-item>
		    	  		<el-form-item class='submit' v-if='index === formList.list.length - 1 && !item.created'>
			  		  <el-button type="primary" @click="submitForm(item)">提交</el-button>
		              <el-button @click="resetForm">取消</el-button>
			  		</el-form-item>
			  		<el-form-item class='submit' v-if='item.created'>
			  		  <el-button type="primary" @click="creatForm(item)">创建</el-button>
			  		</el-form-item>
		    	  	</div>
		    	  </template>
		    </el-step>
		  </el-steps>		  
	  </el-form>
	  </div>
	</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    	  active: 0,
    	  formList: {
    	  	list: [
    	  	  {
    	  	  	type: 'checkbox',
    	  	  	name: '选择环境',
    	  	  	data: [
    	  	  	  {
	    	  		name: 'Dev环境',
	    	  		code: 'dev'
	    	  	  },
	    	  	  {
	    	  		name: '测试环境',
	    	  		code: 'uat'
	    	  	  },
	    	  	  {
	    	  		name: '预生产',
	    	  		code: 'fac'
	    	  	  },
	    	  	  {
	    	  		name: '生产环境',
	    	  		code: 'faced'
	    	  	  }
    	  	  	],
    	  	  	rules: [
    	  	  	  { required: true, message: '请选择环境', trigger: 'blur' }
    	  	  	],
    	  	  	value: []
    	  	  }
    	  	]
    	  },
      list: null,
      listLoading: false
    }
  },
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  created() {
  	console.log(this.$socket)
  },
  sockets: {
        connect: function () {
            console.log('socket connected')
            this.$socket.emit('customEmit', {name:'p'})
        },
        customEmit: function (data) {
            console.log('this method was fired by the socket server. eg: io.emit("customEmit", data)')
        }
  },
  methods: {
    submitForm(item) { 
    	  this.$refs.formList.validate((valid) => {
        if (valid) {
          this.active = this.formList.list.length
	    	  const obj = {
	    	  	value: '', 
	    	  	type: 'text',
	    	  	name: '域名' + this.active,
	    	  	rules: { required: true, message: '请输入域名' + this.active, trigger: 'blur' }
	    	  }
	    	  if (this.active > 6) obj.created = true
	    	  this.formList.list.push(obj)	
        }
      })
    },
    creatForm(item) {
    	  this.$router.push('/example/successProject')
    },
    resetForm() {
    	  this.$router.push('/example/codeProject')
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  .app-container {
	.title {
	  position: relative;
	  padding: 20px 0;
	  border-bottom: 2px solid #f1f4f6;
	  h2 {
		font-size: 18px;
		margin: 0;
		font-weight: normal;
      }
	}
	.content {
		padding: 20px 0;
		position: relative;
		.el-form {
		  	.el-form-item {		  	  
		  	  margin-top: -5px;
		  	  .el-input {
		  	  	width: 500px;
		  	  }
		  	  &.submit {
		  	  	margin-top: 22px;
		  	  }
		    }
		  }
	}
  }
</style>

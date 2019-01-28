<template>
  <div class="app-container">
    <div class='title'>
    	  <h2>微服务组件列表</h2>
    </div>
    <div class='content'>
    	  <el-table :data="tableData" border resizable highlight-current-row header-row-class-name='table-title' v-loading="loading" header-cell-class-name='table-head'>
        <el-table-column type="index" label='序号' :index="indexMethod" width='50px'>
        </el-table-column>
        <el-table-column prop="processDefinitionId" label="微服务组件" min-width='15%' show-overflow-tooltip>
          <template slot-scope="scope">
            <span>{{scope.row.processDefinitionId}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="name" label="地址" min-width='60%' show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="updata" label="更新时间" min-width='15%' show-overflow-tooltip>
        </el-table-column>
        <el-table-column label="操作" width='100px' align='center'>
        	  <template slot-scope="scope">
            <el-dropdown :hide-on-click="false" placement='bottom-end' @command="handleCommand($event,scope.row)">
              <span class="el-dropdown-link">
				<svg-icon icon-class='more'></svg-icon>
			  </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="edit">编辑</el-dropdown-item>
                <el-dropdown-item command="delete">删除</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </template>
        </el-table-column>
      </el-table>
	</div>
	<el-dialog
	  title="配置组件地址"
	  :visible.sync="editDialog"
	  width="500px"
	  >
	  <el-form :model='formData' label-width="40px" size='small'>
	  	<el-form-item prop='dev' label='dev：'>
	  		<el-input v-model='formData.dev' clearable></el-input>
	  	</el-form-item>
	  	<el-form-item prop='uat' label='uat：'>
	  		<el-input v-model='formData.uat' clearable></el-input>
	  	</el-form-item>
	  	<el-form-item prop='pro' label='pro：'>
	  		<el-input v-model='formData.pro' clearable></el-input>
	  	</el-form-item>
	  </el-form>
	  <span slot="footer" class="dialog-footer">
	  	<el-button type="primary" @click="editDialog = false" size='mini'>保 存</el-button>
	  	<el-button @click="editDialog = false" size='mini'>取 消</el-button>
	  </span>
	</el-dialog>
    <el-dialog
    	  title="删除微服务组件"
	  :visible.sync="deleteDialog"
	  width="500px"
	  >
	  <p>确认要删除{{editcheck.processDefinitionId}}吗？</p>
	  <span slot="footer" class="dialog-footer">
	  	<el-button type="primary" icon="document" @click='deleteDialog=false' size='mini'>确 认</el-button>
	  	<el-button icon="document" @click='deleteDialog=false' size='mini'>取 消</el-button>
	  </span>
	</el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
    	  deleteDialog: false,
    	  editDialog: false,
    	  tableData:[
    	    {
    	    	  processDefinitionId: 'innnn',
    	    	  name: 'weqefffd',
    	    	  updata: '2019-09-09'
    	    }
    	  ],
    	  editcheck: '',
    	  formData: {
    	  	dev: '',
    	  	uat: '',
    	  	pro: ''
    	  }
    }
  },
  created() {
  },
  methods: {
  	indexMethod(index) {
  	  return index * 2 + 1
  	},
    handleCopy(event) {
    	  clip(this.http, event)
    	  this.dialogSuccess = false
    },
    handleCommand(command, row) {
    	  this.editcheck = row
      if (command === 'delete') {
        this.deleteDialog = true
      } else {
        this.editDialog = true
      } 
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

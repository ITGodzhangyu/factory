<template>
  <div class="app-container">
    <div class='title'>
    	  <h2>代码工程模版</h2>
    	  <el-radio-group v-model="checked">
        <el-radio-button closable v-for="item in groups" :label="item.code" :key="item.code">
        	  {{item.name}}
        	  <i v-if='item.code!=5' @click='removeGroups(item)' class='el-icon-close'></i>
        </el-radio-button>
      </el-radio-group>
      <i class='el-icon-circle-plus-outline' @click='addGroups' style='cursor:pointer;color: #24a7e3;'></i>
    </div>
    <div class='content'>
	  <el-card v-for="item in list" :key="item.code">
		  <h3>{{item.name}}</h3>
		  <p>被调用：{{item.time}}</p>
		  <el-button type="primary" size='mini' @click='goLink'>创建代码工程</el-button>
		</el-card>
	</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    	  checked: '1',
      groups: [
        {
        	  code: '1',
        	  name: '工程模版仓库1'
        },
        {
        	  code: '2',
        	  name: '工程模版仓库2'
        },
        {
        	  code: '3',
        	  name: '工程模版仓库3'
        },
        {
        	  code: '4',
        	  name: '工程模版仓库4'
        },
        {
        	  code: '5',
        	  name: '其他'
        }
      ],
      list: [
      	{
      	  name: 'Angular-UI',
      	  code: 1,
      	  time: 86
      	},
      	{
      	  name: 'Angular-UI',
      	  code: 2,
      	  time: 86
      	},
      	{
      	  name: 'Angular-UI',
      	  code: 3,
      	  time: 86
      	},
      	{
      	  name: 'Angular-UI',
      	  code: 4,
      	  time: 86
      	},
      	{
      	  name: 'Angular-UI',
      	  code: 5,
      	  time: 86
      	}
      ]
    }
  },
  methods: {
    goLink() {
    	  this.$router.push('/example/createdProject')
    },
    removeGroups(item) {
    	  this.groups.forEach((tm, index) => {
    	  	if (tm.code === item.code) {
    	  		this.groups.splice(index, 1)
    	  	}
    	  })
    },
    addGroups() {
    	  
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .app-container {
	.title {
	  position: relative;
	  h2 {
		font-size: 16px;
		padding-bottom: 15px;
		margin: 0;
		font-weight: normal;
		border-bottom: 2px solid #f1f4f6;
      }
      .el-radio-group {
      	margin-top: 10px;
      }
	}
	.content {
	  margin-left: -15px;
	  height: 300px;
	  .el-card {
	  	width: calc(25% - 15px);
	  	display: inline-block;
	  	margin-left: 15px;
	  	margin-bottom: 15px;
	  	text-align: center;
	  	&:hover {
          border-color: #24a7e3;
          cursor: pointer;
        }
	  	h3 {
	  	  font-weight: normal;
	  	  margin-top: 0;
	  	  margin-bottom: 10px;
	  	  font-size: 16px;
	  	}
	  	p {
	  	  color: #999;
	  	  margin-bottom: 20px;
	  	  font-size: 12px;
	  	}
	  	.el-button {
	  	  padding: 5px 10px;
	  	}
	  }
	}
  }
</style>


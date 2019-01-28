<template>
  <el-breadcrumb class="app-breadcrumb" separator="/">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item v-for="(item,index)  in levelList" :key="item.path" v-if="item.name">
        <router-link v-if='item.meta.golink' :to="item.redirect||item.path" class='aclick'>{{item.meta.title}}</router-link>
        <span class="no-redirect" v-else>{{item.meta.title}}</span>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script>
  export default {
    created() {
      this.getBreadcrumb()
    },
    data() {
      return {
        levelList: null
      }
    },
    watch: {
      $route() {
        this.getBreadcrumb()
      }
    },
    methods: {
      getBreadcrumb() {
        const matched = this.$route.matched.filter(item => item.name)
        const len = matched.length - 1
        if (len > -1) {
          if (matched[len].meta.url) {
            this.$store.dispatch('SetSideBarUrl', {
              name: matched[len].meta.title,
              url: matched[len].meta.url
            })
          }
        }
        for (const i in matched) {
          if (matched[i].meta.path) {
            if (matched[i].meta.parent === '数据资产统计') {
              const l = this.$route.query.project ? '专业' : '油田'
              matched[i].name = '数据资产下钻' + '-' + l
              matched[i].meta.title = '数据资产下钻' + '-' + l
            }
            const obj = {
              name: matched[i].meta.parent,
              path: matched[i].meta.path,
              meta: {
                title: matched[i].meta.parent,
                golink: true
              }
            }
            matched.splice(i, 0, obj)
          }
        }
        this.levelList = matched
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss">
  .app-breadcrumb.el-breadcrumb {
    display: inline-block;
    font-size: 14px;
    margin-left: -2px;
    .no-redirect {
      color: #333;
      cursor: text;
    }
    .aclick {
      color: #009ce3;
      font-weight: normal!important;
    }
    .aclick.router-link-active {
      color: #333!important;
    }
    .el-breadcrumb__separator {
      color: #333;
      margin: 0 5px;
    }
  }
</style>
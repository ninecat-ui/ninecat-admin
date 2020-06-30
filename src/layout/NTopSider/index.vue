<template>
  <div class="NTopSider">
    <el-tabs
      v-model="editableTabsValue"
      type="card"
      :closable="getOpenRouter.length > 1"
      @tab-remove="removeTab"
      @tab-click="tabClick"
    >
      <el-tab-pane
        v-for="item in getOpenRouter"
        :key="item.name"
        :label="item.meta.label"
        :name="item.name"
      ></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      editableTabsValue: ''
    }
  },
  computed: {
    ...mapGetters('adminSetting', ['getOpenRouter', 'getCurrectRoute'])
  },
  watch: {
    getCurrectRoute: {
      handler (getCurrectData) {
        const { name, path } = getCurrectData
        if (path !== '/') {
          this.editableTabsValue = name
        }
      },
      immediate: true
    }
  },
  methods: {
    ...mapActions('adminSetting', [
      'deleteOpenRouterAction'
    ]),
    removeTab (targetName) {
      const tabs = this.getOpenRouter
      let activeName = this.editableTabsValue
      // const routeItem = this.getOpenRouter.find(item => item.name === targetName)
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            const nextTab = tabs[index + 1] || tabs[index - 1]
            if (nextTab) {
              activeName = nextTab.name
            }
          }
        })
        this.editableTabsValue = activeName
        // this.setCurrectRouteAction(routeItem)
        this.$router.push({ name: activeName })
      }
      this.deleteOpenRouterAction(targetName)
    },
    tabClick ({ name }) {
      if (name !== this.$router.currentRoute.name) {
        this.$router.push({ name })
        // const routeItem = this.getOpenRouter.find(item => item.name === name)
        // this.setCurrectRouteAction(routeItem)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.NTopSider {
  background-color: #fff;
  min-height: 33px;
  font-size: 14px;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  ::v-deep .el-tabs__header {
    border-bottom: 0;
    margin-bottom: 0;
    .el-tabs__nav {
      border-radius: 0 !important;
      .el-tabs__item {
        font-size: 14px;
        height: 33px;
        line-height: 33px;
      }
    }
  }
}
</style>

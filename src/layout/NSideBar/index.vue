<template>
  <div
    class="NSideBar"
    :class="[active ? 'isHover' : '']"
    @mouseenter="sideBarMouseEnter"
    @mouseleave="sideBarMouseLeave"
  >
    <el-menu :default-active="defaultActive" :collapse="!active" :collapse-transition="false">
      <menuItem v-for="(item,index) in getRouterMap" :routeItem="item" :key="item.name + index"/>
    </el-menu>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import menuItem from './menuItem.vue'

export default {
  components: { menuItem },
  data () {
    return {
      active: false,
      defaultActive: ''
    }
  },
  watch: {
    getCurrectRoute: {
      handler () {
        this.defaultActive = this.getCurrectRoute.name
      },
      immediate: true
    }
  },
  computed: {
    ...mapGetters('adminSetting', ['getRouterMap', 'getCurrectRoute'])
  },
  methods: {
    sideBarMouseEnter () {
      this.active = true
    },
    sideBarMouseLeave () {
      this.active = false
    }
  }
}
</script>

<style lang="scss" scoped>
.NSideBar {
  width: 40px;
  transition: all 0.28s ease-out;
  background-color: #fff;
  box-shadow: 1px 1px 4px rgba(0, 21, 41, 0.08);
  &.isHover {
    width: 220px;
  }
  ::v-deep .el-menu {
    border: none;
    font-size: 14px;
  }
  ::v-deep .el-menu--collapse {
    width: 100%;
    .el-submenu {
      .el-submenu__title {
        padding: 0 !important;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    .el-menu-item {
      padding: 0 !important;
      .el-tooltip {
        padding: 0 !important;
        display: inline-flex !important;
        justify-content: center;
        align-items: center;
      }
    }
  }
}
</style>

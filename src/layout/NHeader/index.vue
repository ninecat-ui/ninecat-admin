<template>
  <div class="NHeader">
    <div class="leftImg">
      <img
        src="../../assets/img/header__logo.png"
        class="logo"
      />
      <span class="text">Ninecat-Admin</span>
    </div>
    <div class="rightArea">
      <el-tooltip
        v-if="enableFullScreen"
        class="centerBox icon"
        effect="dark"
        content="菜单搜索"
        placement="bottom"
      >
        <i class="el-icon-search" @click="toggleFullScreen" />
      </el-tooltip>
      <el-tooltip
        v-if="enableFullScreen"
        class="centerBox icon"
        effect="dark"
        content="全屏"
        placement="bottom"
      >
        <i class="el-icon-full-screen" @click="toggleFullScreen" />
      </el-tooltip>
      <el-tooltip
        class="centerBox icon"
        effect="dark"
        content="页面导航切换"
        placement="bottom"
      >
         <i class="el-icon-set-up"></i>
      </el-tooltip>
      <div class="centerBox userName">
        {{ getRealName }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import screenfull from 'screenfull'

export default {
  name: 'NHeader',
  data () {
    return {
      enableFullScreen: false
    }
  },
  created () {
    if (screenfull.isEnabled) {
      this.enableFullScreen = true
    }
  },
  methods: {
    toggleFullScreen () {
      if (screenfull.isFullscreen) {
        screenfull.exit()
      } else {
        screenfull.request()
      }
    }
  },
  computed: {
    ...mapGetters('userInfo', ['getRealName'])
  }
}
</script>

<style lang="scss" scoped>
.NHeader {
  min-height: 34px;
  background-color: #404040;
  display: flex;
  justify-content: space-between;
  .leftImg {
    display: flex;
    align-items: center;
    .logo {
      margin-left: 20px;
      height: 18px;
      vertical-align: top;
    }
    .text {
      color: #fff;
      display: inline-block;
      margin-left: 8px;
      font-size: 14px;
    }
  }
  .rightArea {
    display: flex;
    color: #fff;
    .centerBox {
      cursor: pointer;
      height: 100%;
      display: flex;
      align-items: center;
      &.userName {
        font-size: 14px;
        margin: 0 10px;
      }
      &.icon {
        font-size: 14px;
        margin: 0 12px;
      }
    }
  }
}
</style>

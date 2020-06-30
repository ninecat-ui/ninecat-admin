<template>
  <div class="layout">
    <n-header />
    <n-container>
      <n-side-bar />
      <div class="containerMain">
        <n-top-sider />
        <n-main>
          <keep-alive :include="getCacheName">
            <router-view :key="key" />
          </keep-alive>
        </n-main>
      </div>
    </n-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import NHeader from './NHeader/index.vue'
import NContainer from './NContainer/index.vue'
import NSideBar from './NSideBar/index.vue'
import NMain from './NMain/index.vue'
import NTopSider from './NTopSider/index.vue'

export default {
  name: 'Layout',
  components: {
    NHeader,
    NContainer,
    NSideBar,
    NMain,
    NTopSider
  },
  computed: {
    ...mapGetters('adminSetting', ['getCacheName']),
    key () {
      return this.$route.path
    }
  }
}
</script>

<style lang="scss" scoped>
.layout {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .containerMain {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
}
</style>

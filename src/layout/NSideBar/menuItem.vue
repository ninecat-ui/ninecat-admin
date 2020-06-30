<script>
import { mapActions } from 'vuex'

export default {
  name: 'menuItem',
  props: {
    routeItem: {
      type: Object,
      default () {
        return {
          name: '',
          path: '',
          meta: {
            label: '',
            icon: ''
          },
          children: []
        }
      }
    }
  },
  methods: {
    ...mapActions('adminSetting', [
      'setOpenRouterAction'
    ]),
    toPath () {
      const { name = '' } = this.routeItem
      if (name !== this.$router.currentRoute.name) {
        this.setOpenRouterAction({ ...this.routeItem })
        // this.setCurrectRouteAction({ ...this.routeItem })
        this.$router.push({ name })
      }
    }
  },
  render (h) {
    let template = ''
    if (this.routeItem.children && this.routeItem.children.length > 0) {
      template = (
        <el-submenu index={this.routeItem.name}>
          <template slot="title">
            {this.routeItem.meta.icon ? <i class={this.routeItem.meta.icon}></i> : ''}
            <span slot="title">{this.routeItem.meta.label}</span>
          </template>
          {this.routeItem.children.map(
            routeChildren => (<menu-item routeItem={routeChildren}/>)
          )}
        </el-submenu>
      )
    } else {
      template = (
        <el-menu-item index={this.routeItem.name} onClick={this.toPath}>
          {this.routeItem.meta.icon ? <i class={this.routeItem.meta.icon}></i> : ''}
          <span slot="title">{this.routeItem.meta.label}</span>
        </el-menu-item>
      )
    }
    return template
  }
}
</script>

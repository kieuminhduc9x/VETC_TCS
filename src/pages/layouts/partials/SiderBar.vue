<template>
  <a-layout-sider
    collapsible
    v-model="collapsed"
    @collapse="showSidebar"
    width="270"
    collapsedWidth="40"
    style="max-width: 300px !important;padding-top: 5px"
  >
    <!-- <div class="logo">
      <img src="@/assets/viettel_logo.jpg" alt="Viettel">
    </div> -->
    <div
      class="ant-layout-sider-trigger sider--top cl-sider--top"
      style="width: 270px;"
      @click="() => {collapsed = !collapsed; showSidebar()}"><i
        aria-label="icon: right"
        class="anticon anticon-left"
        id="icon-siderbar">
        <svg
          viewBox="64 64 896 896"
          data-icon="left"
          width="1em"
          height="1em"
          fill="currentColor"
          aria-hidden="false"
          focusable="false"
          class="">
          <path
            d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 0 0 0 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"></path>
        </svg>
      </i></div>
    <a-menu
      mode="inline"
      class="ant-menu_1"
      :defaultSelectedKeys="[currentKey]"
      :selected-keys="[currentKey]"
      :default-open-keys="[openKeys]"
      :style="{ height: '100%', borderRight: 0, paddingTop: '0', }"
    >
      <a-sub-menu key="1">
        <a slot="title"><icon name="book" width="24px" height="24px" style="margin-right: 10px"></icon><span class="title-menu">Quản lý kho thẻ</span></a>
        <a-menu-item key="1_1" >
          <router-link :to="{ name: 'inventory_deliver_voucher' }" class="title-sub-menu">
            <span>Phiếu nhập kho thẻ</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="1_2" >
          <router-link :to="{ name: 'inventory_receiving_voucher' }" class="title-sub-menu">
            <span>Phiếu xuất kho thẻ</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="1_3" >
          <router-link :to="{ name: 'deliver_voucher_management' }" class="title-sub-menu">
            <span>Quản lý phiếu nhập</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="1_4" >
          <router-link :to="{ name: 'receiving_voucher_management' }" class="title-sub-menu">
            <span>Quản lý phiếu xuất</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="1_5" >
          <router-link :to="{ name: 'card_store' }" class="title-sub-menu">
            <span>Kho thẻ</span>
          </router-link>
        </a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="2">
        <a slot="title"><icon name="book" width="24px" height="24px" style="margin-right: 10px"></icon><span class="title-menu">Quản lý kho vé</span></a>
        <a-menu-item key="2_1" >
          <router-link :to="{ name: 'ticket_import_voucher' }" class="title-sub-menu">
            <span>Phiếu nhập vé</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="2_2" >
          <router-link :to="{ name: 'ticket_export_voucher' }" class="title-sub-menu">
            <span>Phiếu xuất vé</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="2_3" >
          <router-link :to="{ name: 'ticket_import_voucher_management' }" class="title-sub-menu">
            <span>Quản lý phiếu nhập vé</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="2_4" >
          <router-link :to="{ name: 'ticket_export_voucher_management' }" class="title-sub-menu">
            <span>Quản lý phiếu xuất vé</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="2_5" >
          <router-link :to="{ name: 'ticket_store' }" class="title-sub-menu">
            <span>Kho vé</span>
          </router-link>
        </a-menu-item>
      </a-sub-menu>
      <a-menu-item key="3" >
        <router-link :to="{ name: 'card_inventory_calculator' }" class="title-menu">
          <a-icon type="project" />
          <span>Tính tồn kho</span>
        </router-link>
      </a-menu-item>
      <a-menu-item key="9" >
        <router-link :to="{ name: '' }" class="title-menu">
          <a-icon type="project" />
          <span>Báo cáo thống kê</span>
        </router-link>
      </a-menu-item>

    </a-menu>
  </a-layout-sider>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'SideBar',
  data () {
    return {
      collapsed: false
    }
  },
  computed: {
    ...mapGetters('permission', ['addRouters']),
    currentKey: function () {
      let idx = '0'
      let routeName = this.$router.currentRoute.name
      const fromSource = this.$route.query.from
      if (fromSource) {
        routeName = fromSource
      }
      switch (routeName) {
        case 'inventory_deliver_voucher':
          idx = '1_1'
          break
        case 'inventory_receiving_voucher':
          idx = '1_2'
          break
        case 'deliver_voucher_management':
          idx = '1_3'
          break
        case 'receiving_voucher_management':
          idx = '1_4'
          break
        case 'card_store':
          idx = '1_5'
          break
        case 'ticket_import_voucher':
          idx = '2_1'
          break
        case 'ticket_export_voucher':
          idx = '2_2'
          break
        case 'ticket_import_voucher_management':
          idx = '2_3'
          break
        case 'ticket_export_voucher_management':
          idx = '2_4'
          break
        case 'ticket_store':
          idx = '2_5'
          break
        case 'card_inventory_calculator':
          idx = '3'
          break
      }

      return idx
    },
    openKeys: function () {
      let k = '0'
      switch (this.$router.currentRoute.name) {
        case 'inventory_deliver_voucher':
        case 'inventory_receiving_voucher':
        case 'deliver_voucher_management':
        case 'receiving_voucher_management':
        case 'card_store':
          k = '1'
          break
        case 'ticket_import_voucher':
        case 'ticket_export_voucher':
        case 'ticket_import_voucher_management':
        case 'ticket_export_voucher_management':
        case 'ticket_store':
          k = '2'
          break
        case 'card_inventory_calculator':
          k = '3'
          break
        default:
          k = '0'
      }
      return k
    }
  },
  mounted () {
  },
  methods: {
    hasPermission (routeName) {
      /*
      if (!this.addRouters) return false
      const flag = this.addRouters.filter(item => item.name === permission)
      if (flag.length > 0) {
        return true
      }
      return true
      */
      return this.hasMenuPermission(routeName)
    },
    hasPermissions (routeNames) {
      const $this = this
      let ok = true
      routeNames.forEach(function (routeName) {
        if ($this.hasPermission(routeName) === false) {
          ok = false
        }
      })
      return ok
    },
    hasAnyPermissions (paths) {
      const $this = this
      let ok = false
      paths.forEach(function (path) {
        if ($this.hasPermission(path) === true) {
          ok = true
        }
      })
      return ok
    },
    showSidebar () {
      if (this.collapsed === true) {
        document.getElementsByClassName('sider--top')[0].style.width = '40px'
        document.getElementById('icon-siderbar').style.transform = 'rotate(180deg)'
      } else {
        document.getElementsByClassName('sider--top')[0].style.width = '270px'
        document.getElementById('icon-siderbar').style.transform = 'rotate(0deg)'
      }
    }
  }
}
</script>
<style>
.ant-layout-sider-children {
  overflow: hidden;
}

.sider--top {
  top: 0 !important;
  position: absolute !important;
}

.ant-menu_1 {
  margin-top: 40px !important;

}

.cl-sider--top {
  background-color: rgba(7, 129, 178, 0.16) !important;
}
.ant-menu-sub.ant-menu-inline .ant-menu-item-group-title {
  padding-left: 15px !important;
}
.ant-menu-sub.ant-menu-inline .ant-menu-item > a {
  height: auto !important;
  line-height: normal;
}
.title-menu{
  font-size: 16px!important;
  font-weight: 400!important;
}
.title-sub-menu{
  font-size: 14px!important;
  font-weight: 400!important;
}
.icon-menu {
  font-size: 24px!important;
}
.ant-menu-submenu-title > a{
  display: -webkit-box !important;
}
</style>

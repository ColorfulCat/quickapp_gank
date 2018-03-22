import router from '@system.router'
export default {
  props: [
    'url'
  ],
  data: {
    srcUrl: ""
  },
  onInit () {
    var self = this
    self.srcUrl = self.url
  },
  onBackPress: function(e) {
    var self = this
    var webview = this.$element('web')
    webview.canBack({
      callback: function(e){
        if(e){
          // 加载历史列表中的前一个 URL
          webview.back();
         }else{
          router.back()
         }
      }.bind(self)
    })
    return true;
  },
  onMenuPress: function(e) {
    console.log("onMenuPress")
    var self = this
    var prompt = require('@system.prompt');
    var appInfo = require('@system.app').getInfo()
    prompt.showContextMenu({
      itemList: ['重新加载'],
      success: function (ret) {
        switch (ret.index) {
          case 0:
            var webview = self.$element('web')
            webview.reload()
            break;
          default:
        }
      }
    })
  },
  onPageStart: function(e) {
    console.log("onPageStart - ", JSON.stringify(e.url))
  },
  onPageError: function(e) {
    console.log("onPageError - ", JSON.stringify(e.url))
  },
  onPageFinish: function(e) {
    console.log("onPageFinish - ", JSON.stringify(e.url))
  },
  onTitleReceive(e) {
    console.log("onTitleReceive = ", e.title)
    if (e.title !== "") {
        this.$page.setTitleBar({ text: e.title })
    }
  },
  onError(e) {
    console.log("onError - ", JSON.stringify(e))
  }

}
 
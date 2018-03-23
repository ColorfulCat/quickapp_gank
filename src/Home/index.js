import router from '@system.router'
import prompt from '@system.prompt'
import webview from '@system.webview'
import storage from '@system.storage'
import fetch from '@system.fetch'
// import device from '@system.device'

export default {
    data: {
        title: 'Gank',
        currentIndex: 0,
        tabs: [{
                "name": "前端",
                "tag": "前端"
            },
            {
                "name": "Android",
                "tag": "Android"
            },
            {
                "name": "iOS",
                "tag": "iOS"
            },
            {
                "name": "资源",
                "tag": "拓展资源"
            },
            {
                "name": "福利",
                "tag": "福利"
            }
        ]
    },
    onInit() {
        console.info("homepage init")
        var self = this


    },
    onShow() {
        console.log("onShow")
    },
    onHide() {
        console.info('onHide')
    },
    onBackPress() {
        console.info(` ~~~ onBackPress`)
    },
    onMenuPress() {
        console.info(` ~~~ onMenuPress`)
        this.$app.showMenu();
    },
    onTabChange: function(e) {
        if (e) {
            console.log("onTabChange", JSON.stringify(e.index))
            this.currentIndex = e.index
        } else {
            console.log("onTabChange")
        }

    }
}
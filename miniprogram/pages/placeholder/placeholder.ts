// placeholder.ts

Page({
  data: { needBack: false },
  onShow: function () {
    // console.log("[from onLoad onShow]");
    // // 从导航页退回的时候，就再次跳转回到之前webview的小程序页面
    // if (this.data.needBack) {
    //   wx.navigateBack();
    // }
  },
  async onLoad(event: any): Promise<void> {
    // const pages = getCurrentPages();

    // const webviewPage = pages[pages.length - 2];

    // webviewPage.setData(
    //   {
    //     shouldReattachWebview: true,
    //   },
    //   () => {
    //     wx.navigateBack();
    //   }
    // );

    console.log(event, "[event from onLoad placeholder]");
    // wx.openLocation({
    //   longitude: 121.6,
    //   latitude: 24.9,
    //   success: this.openLocationSuccess,
    //   // complete: this.openLocationSuccess
    //   // complete: () => {
    //   //   this.setData({ needBack: true });
    //   // },
    // });

    const eventChannel = this.getOpenerEventChannel();
    eventChannel.emit("acceptDataFromOpenedPage", { data: "test" });
    eventChannel.emit("someEvent", { data: "test" });
    // 监听 acceptDataFromOpenerPage 事件，获取上一页面通过 eventChannel 传送到当前页面的数据
    eventChannel.on("acceptDataFromOpenerPage", function (data) {
      console.log(data,'[data from onLoad placeholder]');
    });
  },
  openLocationSuccess(): void {
    wx.navigateBack();
    // wx.redirectTo({url: "/pages/index/index"})
    console.log("[navigateBack from onLoad placeholder]");
  },
});

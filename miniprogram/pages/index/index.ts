// index.ts
// 获取应用实例
let app = getApp<IAppOption>();

Page({
  data: {
    src: "http://localhost:8080/#/",
    shouldReattachWebview: false, // 是否需要重新 attach 一次 webview 组件
    webviewReattached: false, // 是否已经 attach 过一次 webview 了
    hideWebview: false, // 是否隐藏 webview 组件
  },
  onShow() {
    // 如果 webview 需要重新 attach
    // if (this.data.shouldReattachWebview) {
    //   this.setData(
    //     {
    //       // 隐藏 webview
    //       hideWebview: true,
    //     },
    //     () => {
    //       this.setData(
    //         {
    //           // 隐藏之后立马显示它，此时完成一次 webview 的销毁，拿到了 postMessage 中的数据
    //           hideWebview: false,
    //           webviewReattached: true,
    //         },
    //         () => {
    //           // 拿到数据之后，处理 canvasData
    //           this.handleCanvasData();
    //         }
    //       );
    //     }
    //   );
    // }
  },
  // 事件处理函数
  onMessage(event: any): void {
    console.log(event, "[event from onMessage index]");
    wx.openLocation({ longitude: 121.6, latitude: 24.9 });
  },
  onLoad(event: any): void {
    console.log(event, "[event from onLoad index]");
    // wx.navigateTo({url: '/pages/placeholder/placeholder'})
    
  },
  onShareAppMessage(): any {
    return {
      title: "xx",
      path: "pages/index",
    };
  },
});

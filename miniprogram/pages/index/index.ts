// index.ts
// 获取应用实例
const app = getApp<IAppOption>();

Page({
  data: {
    src: "http://localhost:8080/#/",
  },
  // 事件处理函数
  onMessage(event: any): void {
    console.log(event, "[event]");
    wx.openLocation({ longitude: 121.6, latitude: 24.9 });
  },
  onLoad(): void {},
  onShareAppMessage(): any {
    return {
      title: "xx",
      path: "pages/index",
    };
  },
});

// index.ts

Page({
  data: {
    src: "http://localhost:8080/#/",
  },
  // 事件处理函数
  onMessage(event: any): void {
    console.log(event, "[event from onMessage]");
    wx.openLocation({ longitude: 121.6, latitude: 24.9 });
  },
  onLoad(event: any): void {
    console.log(event, "[event from onLoad]")
  },
  onShareAppMessage(): any {
    return {
      title: "xx",
      path: "pages/index",
    };
  },
});

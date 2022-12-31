// placeholder.ts

Page({
  data: {},
  onLoad(event: any): void {
    console.log(event, "[event from onLoad placeholder]");
    wx.openLocation({ longitude: 121.6, latitude: 24.9 });
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
    wx.navigateBack();
  },
});

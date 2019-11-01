import Taro, { Component } from "@tarojs/taro";
import Index from "./pages/index";

import "./app.scss";

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {
  config = {
    pages: ["pages/calendar/index", "pages/index/index"],
    window: {
      backgroundTextStyle: "light",
      navigationBarBackgroundColor: "#fff",
      navigationBarTitleText: "WeChat",
      navigationBarTextStyle: "black"
    },
    tabBar: {
      list: [
        {
          pagePath: "pages/calendar/index",
          text: "日历",
          iconPath: "./images/tabs/ico-tab-2.png",
          selectedIconPath: "./images/tabs/ico-tab-2-active.png"
        },
        {
          pagePath: "pages/index/index",
          text: "首页",
          iconPath: "./images/tabs/ico-tab-1.png",
          selectedIconPath: "./images/tabs/ico-tab-1-active.png"
        }
        // {
        //   pagePath: "pages/cinema/index",
        //   text: "影院",
        //   iconPath: "./images/tabs/ico-tab-3.png",
        //   selectedIconPath: "./images/tabs/ico-tab-3-active.png"
        // },
        // {
        //   pagePath: "pages/schedule/index",
        //   text: "排片",
        //   iconPath: "./images/tabs/ico-tab-4.png",
        //   selectedIconPath: "./images/tabs/ico-tab-4-active.png"
        // }
      ],
      color: "#333",
      selectedColor: "#338FFF",
      backgroundColor: "#fff",
      borderStyle: "black"
    }
  };

  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return <Index />;
  }
}

Taro.render(<App />, document.getElementById("app"));

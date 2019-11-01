import Taro, { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import "./index.scss";

const weekArray = ["日", "一", "二", "三", "四", "五", "六"];

export default class Index extends Component {
  config = {
    navigationBarTitleText: "日历"
  };

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  getCurrentDate() {
    const date = new Date();
    const year = date.getFullYear(); //yy
    const month = date.getMonth() + 1; //mm
    const day = date.getDate(); //dd
    const week = date.getDay(); // ee
    // 当前月的第一天是周几 , 周日是0，1，2，3，4，5，6
    const currentMonthFirstDay = new Date(year, month - 1, 1).getDay();
    // 第一排会空出几个
    const emptyNum = currentMonthFirstDay;
    // 当月的天数
    const monthDay = this.getMonthDay(year, month);
    let arr = [];
    // 日历共有多少行
    const line = Math.ceil(monthDay / 7);
    for (let i = 0; i < line; i++) {
      let temp = [];
      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < currentMonthFirstDay) {
          temp[j] = 0;
        } else {
          temp[j] = i * 7 + j - emptyNum + 1;
          if (temp[j] > monthDay) {
            temp[j] = 0;
          }
        }
      }
      arr[i] = temp;
    }

    return arr;
  }

  getMonthDay(y, m) {
    const d = new Date(y, m, 0);
    return d.getDate();
  }

  render() {
    // this.getCurrentDate();
    const currentDateMap = this.getCurrentDate();
    console.log("currentDateMap", currentDateMap);
    return (
      <View className='calendar-wrapper'>
        <View className='calendar-wrapper-title'>
          {weekArray.map(item => (
            <View className='week-day' key={item}>
              {item}
            </View>
          ))}
        </View>
        <View>
          {currentDateMap.map(item => {
            return (
              <View className='day-row'>
                {item.map(i => {
                  return i !== 0 ? (
                    <View className='day-item'>{i}</View>
                  ) : (
                    <View className='day-item'> </View>
                  );
                })}
              </View>
            );
          })}
        </View>
      </View>
    );
  }
}

import Taro, { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import FilmSelect from "../../components/film-select";
import "./index.scss";

const mockFilmsList = [
  {
    filmCode: "1",
    filmName: "中国机长",
    filmImg:
      "http://img1.tbcdn.cn/bao/uploaded/i1/TB1mDwbgpT7gK0jSZFpXXaTkpXa_.jpg"
  },
  {
    filmCode: "2",
    filmName: "攀登者",
    filmImg:
      "http://img1.tbcdn.cn/bao/uploaded/i2/TB1yyzHe3mH3KVjSZKzXXb2OXXa_.jpg"
  },
  {
    filmCode: "3",
    filmName: "复仇者联盟4-最终之战",
    filmImg:
      "http://img1.tbcdn.cn/bao/uploaded/i4/TB1F750RSzqK1RjSZFLXXcn2XXa_.jpg"
  },
  {
    filmCode: "4",
    filmName: "大人物",
    filmImg:
      "http://img1.tbcdn.cn/bao/uploaded/i3/TB1gu94DkzoK1RjSZFlXXai4VXa_.jpg"
  },
  {
    filmCode: "5",
    filmName: "奎迪",
    filmImg:
      "http://img1.tbcdn.cn/bao/uploaded/i2/TB1.CDMywHqK1RjSZFEXXcGMXXa_.jpg"
  }
];

export default class Index extends Component {
  config = {
    navigationBarTitleText: "首页"
  };

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className='index'>
        <FilmSelect
          list={mockFilmsList}
          onOk={data => {
            console.log("data", data);
          }}
        ></FilmSelect>
      </View>
    );
  }
}

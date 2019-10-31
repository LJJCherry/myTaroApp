import Taro, { Component } from '@tarojs/taro'
import { View, Image } from "@tarojs/components";
import './style.scss';

const itemWidth = 130 + 40;
const SPACE = 300;

/*
* @param {array} list 影片列表
* @param {function} onOk 选中回调函数
* */

export default class FilmSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      translateX: 300,
      activeIndex: 0,
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { activeIndex } = this.state;
    const { list = [], onOk } = this.props;
    const { activeIndex: prevIndex } = prevState;
    if (activeIndex !== prevIndex) {
      onOk(list[activeIndex]);
    }
  }

  get minX() {
    const { list = [] } = this.props;
    const len = list.length;
    return (-itemWidth * (len - 2) + 130);
  }

  touchStart = (e) => {
    this.startX = e.changedTouches[0].pageX
  };

  touchMove = (e) => {
    const currentX = e.changedTouches[0].pageX;
    const moveX = currentX - this.startX;
    let translateX = this.state.translateX;
    const calcX = translateX + moveX / 3; // 除3防止滑动过快

    if (moveX > 0) { // 向右滑动
      translateX = calcX > SPACE ? SPACE : calcX;
    } else { // 向左滑动
      translateX = calcX < this.minX ? this.minX : calcX;
    }

    this.setState({
      translateX,
    })
  };

  touchEnd = () => {
    const { translateX, activeIndex } = this.state;
    const index = Math.round(translateX / itemWidth - SPACE / itemWidth);
    const nextMoveX = index * itemWidth + SPACE;

    if (Math.abs(index) === activeIndex && translateX === nextMoveX) {
      return;
    }

    this.setState({
      activeIndex: Math.abs(index),
      translateX: nextMoveX,
    });
  };

  clickItem = (index) => {
    this.setState({
      activeIndex: index,
      translateX: -index * itemWidth + SPACE,
    })
  };

  render () {
    const { translateX, activeIndex } = this.state;
    const { list = [] } = this.props;
    const current = list[activeIndex] || {};
    return (
      <View className='swiper-wrapper'>
        <View className='swiper-cover' style={{ backgroundImage: `url(${current.filmImg})`}} />
        <View
          className='swiper-container'
          style={{transform: `translateX(${translateX}rpx)`}}
          onTouchStart={this.touchStart}
          onTouchMove={this.touchMove}
          onTouchEnd={this.touchEnd}
        >
          { list.map((item, index) => (
            <Image
              className={`swiper-item ${index === activeIndex ? 'active' : ''}`}
              key={item.filmCode}
              onClick={() => this.clickItem(index)}
              src={item.filmImg}
            />
          ))}
        </View>
      </View>
    )
  }
}

import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Provider extends Component {
  getChildContext() {
    //返回的代表Context的对象
    return {
      store: this.props.store
    };
  }

  render() {
    //简单的把子组件渲染出来代表Provider标签之间的组件
    return this.props.children;
  }
}
//为了Provide比较通用，所以store从外部传递进来
//为了让Provider能够被React认可为一个Context提供者，需要指定Provider的childContextTypes
Provider.childContextTypes = {
  store: PropTypes.object
};


export default Provider;
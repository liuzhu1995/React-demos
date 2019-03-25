import {EventEmitter} from "events";
import AppDispatcher from '../APPDispatcher'
import * as ActionTypes from '../ActionTypes'

const CHANGE_EVENT = 'changed';
const counterValues = {
  'First': 0,
  'Second': 10,
  'Third': 30
};


/*
* emit 广播一个特定事件，第一个参数是字符串类型的事件名称
* on函数增加一个挂在这个EventEmitter对象特定事件上的处理函数
*removeListener 删除挂在这个EventEmitter对象特定事件上的处理函数
* */
const CounterStore = Object.assign({}, EventEmitter.prototype, {
  getCounterValue: function () {
    return counterValues;
  },
  emitChange: function () {
    this.emit(CHANGE_EVENT);
  },
  addChangeListener: function (callback) {
    this.on(CHANGE_EVENT, callback);
  },
  removeChangeListener: function (callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

CounterStore.dispatcherToken = AppDispatcher.register((action) => {
  if (action.type === ActionTypes.INCREMENT) {
    counterValues[action.counterCaption] ++;
    CounterStore.emitChange()
  } else if (action.type === ActionTypes.DECREMENT) {
    counterValues[action.counterCaption] --;
    CounterStore.emitChange();
  }
});



export default CounterStore















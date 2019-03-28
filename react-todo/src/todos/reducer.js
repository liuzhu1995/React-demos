import {ADD_TODO, TOGGLE_TODO, REMOVE_TODO} from './actionTypes';

//通过action更新state
let data = [
  {
    id: 99,
    text: "水水水水水水水水水水水水水水水水水水水",
    completed: false
  },
  {
    id: 99,
    text: "水水水水水水水水水水水水水水水水水水水",
    completed: false
  },
  {
    id: 99,
    text: "水水水水水水水水水水水水水水水水水水水",
    completed: false
  }

];
export default (state=data, action) => {
  switch (action.type) {
    case ADD_TODO: {
      return [
        {
          id: action.id,
          text: action.text,
          completed: action.completed
        },
        ...state
      ]
    }
    case TOGGLE_TODO: {
      return state.map((todoItem) => {
        if(todoItem.id === action.id) {
          return {...todoItem, completed: !todoItem.completed};
        }else {
          return todoItem;
        }
      })
    }
    case REMOVE_TODO: {
      return state.filter((todoItem) => {
        return todoItem.id !== action.id;
      })
    }
    default: {
      return state;
    }

  }
}
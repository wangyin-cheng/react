import React, { Component } from 'react';
import TodoListUi from "./TodoListUi";
import './style/todolist.css'
import store from './redux'
import {getList} from './services/api/todolist'


class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: store.getState().inputValue,
      list: store.getState().list
    }
  }

  componentDidMount() {
    getList({
      pageIndex: 1,
      pageSize: 10
    }).then((res)=> {
      console.log(999, res);
    })
  }

  changeInputValue(e) {
    store.dispatch({
      type: 'changeInput',
      value: e.target.value
    })
    this.setState({
      inputValue: store.getState().inputValue
    })
  }

  butClickFunc() {
    store.dispatch({
      type: 'addListItem',
      value: [...this.state.list, this.state.inputValue]
    })
    this.setState({
      list: store.getState().list,
      inputValue: ''
    })
  }

  deleteItem(index) {
    const list = this.state.list;
    list.splice(index, 1)

    store.dispatch({
      type: 'addListItem',
      value: [...list]
    })
    this.setState({
      list: store.getState().list,
    })
  }

  render() {
    return (
        <TodoListUi
            inputValue={this.state.inputValue}
            list={this.state.list}
            changeInputValue={this.changeInputValue.bind(this)}
            butClickFunc={this.butClickFunc.bind(this)}
            deleteItem={this.deleteItem.bind(this)}
        />
    )
  }
}
 
export default TodoList;
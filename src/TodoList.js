import React, { Component } from 'react';
import { Input, Button, List} from 'antd';
import './style/todolist.css'
import store from './redux'


class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: store.getState().inputValue,
      list: store.getState().list
    }
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
      <div>
        <div>
          <Input 
            style={{width: '200px'}} 
            placeholder={ '请输入' } 
            value={ this.state.inputValue }
            onChange={(e) => { this.changeInputValue(e) }}
          />
          <Button type="primary" className='but-class' onClick={() => { this.butClickFunc() }}>添加</Button>
        </div>
        <List 
          className='list-warp'
          bordered
          dataSource={this.state.list}
          renderItem={(item, index) => (
            <List.Item onClick={this.deleteItem.bind(this, index)}>
              {item}
            </List.Item>
          )}
        />
      </div>
    )
  }
}
 
export default TodoList;
import React, { Component } from 'react';
import { Input, Button, List} from 'antd';
import './style/todolist.css'
import { connect } from 'react-redux'


class TodoList extends Component {

  render() {
    return (
      <div>
        <div>
          <Input
            style={{width: '200px'}}
            placeholder={ '请输入' }
            value={ this.props.inputValue }
            onChange={ this.props.changeInputValue  }
          />
          <Button type="primary" className='but-class'
                  onClick={ this.props.butClickFunc }
          >添加</Button>
        </div>
        <List
          className='list-warp'
          bordered
          dataSource={this.props.list}
          renderItem={(item, index) => (
            <List.Item
              onClick={ () => { this.props.deleteItemFunc(index) }}
            >
              {item}
            </List.Item>
          )}
        />
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeInputValue(e) {
      const active = {
        type: 'changeInput',
        value: e.target.value
      }
      dispatch(active)
    },
    butClickFunc() {
      dispatch({
        type: 'addListItem'
      })
    },
    deleteItemFunc(index) {
      dispatch({
        type: 'deleteItem',
        value: index
      })
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoList);

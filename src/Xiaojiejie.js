import React,{Component, Fragment} from 'react'
import XiaojiejieItem from './XiaojiejieItem'

class Xiaojiejie extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: "",
      list: ['基础服务', '精油推背']
    }
  }

  inputChange(e) {
    this.setState({
      inputValue: e.target.value
    })
  }

  addList() {
    if(!this.state.inputValue) {return}
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
  }

  deleteItem(index, e) {
    const ev = e || window.event;  
    if(ev.stopPropagation) { //W3C阻止冒泡方法  
      ev.stopPropagation();  
        console.log('w3c');
    } else {  
        console.log('ie');
        ev.cancelBubble = true; //IE阻止冒泡方法  
    }
    const list = this.state.list;
    list.splice(index, 1)
    this.setState({
      list: list,
    })
  }

  deleteItemUl() {
    console.log('ui被点击了')
  }

  shouldComponentUpdate() {
    console.log('000-shouldComponentUpdate');
    return true
  }

  render () {
    return (
      <Fragment>
        <div>
          <input value={this.state.inputValue} onChange={ this.inputChange.bind(this) }/>
          <button onClick={this.addList.bind(this)}>增加服务</button>
        </div>
        <ul onClick={this.deleteItemUl.bind(this)}>
          <XiaojiejieItem 
            list={this.state.list}
            deleteItem={this.deleteItem.bind(this)}
          />
        </ul>
      </Fragment>
    )
  }
}

export default Xiaojiejie
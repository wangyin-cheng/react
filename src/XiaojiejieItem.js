import React, { Component } from 'react';

class XiaojiejieItem extends Component {
  shouldComponentUpdate(a,b,c) {
    console.log('12-shouldComponentUpdate',a, 12, b, 12, c);
    return true
  }
  render() {
    return (
      <ul>
        {
          this.props.list.map((item, index) => {
            return (
              <li 
                key={item + index}
                onClick={(e) => {
                  this.props.deleteItem(index, e)
                }}
              > 
                {item} 
              </li>
            )
          })
        }
      </ul>
    )
  }
}
 
export default XiaojiejieItem;
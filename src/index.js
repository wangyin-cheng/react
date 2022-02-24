import React from 'react'
import ReactDom from 'react-dom'
// import Xiaojiejie from './Xiaojiejie'
import TodoList from './TodoList'
import 'antd/dist/antd.css'
import { Provider } from 'react-redux'
import store from './redux'

ReactDom.render(
    <Provider store={store}>
        <TodoList />
    </Provider>,
  document.getElementById('root')
)

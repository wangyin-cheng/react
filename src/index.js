import React from 'react'
import ReactDom from 'react-dom'
// import Xiaojiejie from './Xiaojiejie'
// import TodoList from './TodoList'
import Pages from './pages'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/lib/locale/zh_CN';
import 'antd/dist/antd.css'
import { Provider } from 'react-redux'
import store from './redux'

ReactDom.render(
    <Provider store={store}>
        <ConfigProvider locale={zhCN}>
            <Pages />
        </ConfigProvider>
    </Provider>,
  document.getElementById('root')
)

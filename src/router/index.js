import React from "react";
import { HashRouter as Router, Redirect, Route, Link} from 'react-router-dom'
import Home from '../page/Home'
import ListPage from '../page/listPage'
import Hooks from '../page/hooks'

function AppRouter() {
    return (
        <Router>
            <ul>
                <li>
                    <Link to="/index">首页</Link>
                </li>
                <li>
                    <Link to="/list/123">列表</Link>
                </li>
                <li>
                    <Link to="/hooks">react hooks</Link>
                </li>
            </ul>
            <Route path="/" exact component={Home}>
                <Redirect from="/" to="index" />
            </Route>
            <Route path="/index" component={ Home }/>
            <Route path="/list/:id" component={ ListPage }/>
            <Route path="/hooks" component={ Hooks }/>
        </Router>
    )
}

export default AppRouter
// 总结： 1，动态传值 在path: url/:id ,组件中通过 this.props.match.params 拿值
// 2, push 传参 通过 this.props.history.push(url?test=12)   取值：this.props.location.search
// Redirect

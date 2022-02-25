import React, {Component} from 'react';
import { Redirect, Route, Link } from "react-router-dom";
import Demo01 from './demo02/demo01';
import Demo02 from './demo02/demo02';
import Demo03 from './demo02/demo03';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {cid: 1, title: '技术胖的个人博客'},
                {cid: 2, title: '技术胖的个人博客'},
                {cid: 3, title: '技术胖的个人博客'}
            ]
        }
    }
    goListFunc() {
        this.props.history.push('/index/demo03?name=123&id=12')
    }

    render() {
        const { list } = this.state
        return (
            <div>
                <h2 onClick={this.goListFunc.bind(this)}>jspang.com</h2>
                <ul>
                    {
                        list.map((item, index) => {
                            return (
                                <li key={index}>
                                    <Link to={'/index/demo0'+ item.cid} >
                                        {item.title}
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
                <Route path="/index" exact component={Demo01}>
                    <Redirect from="/index" to="/index/demo01" />
                </Route>
                <Route path="/index/demo01" component={Demo01} />
                <Route path="/index/demo02" component={Demo02} />
                <Route path="/index/demo03" component={Demo03} />
            </div>
        );
    }
}

export default Home;



// Routers.map((item, index) => {
//     return (
//         <Route key={index} path={item.path} exact render={
//             props =>
//                 (!item.auth ? (<item.component {...props} />) :
//                     (token ? <item.component {...props} /> :
//                         <Redirect to={ { pathname: '/login', state: { from: props.location }} }/>
//                     )
//                 )
//         } />
//     )
// })


import React, {Component} from 'react';
import {Link, Route} from "react-router-dom";
import Demo1 from './demo1'
import Demo2 from './demo2'

function Index() {
    const spanList = [
        { name: 'demo1', component: Demo1 },
        { name: 'demo2', component: Demo2 }
        // { name: 'demo3', component: 'Demo3' }
    ]
    return (
        <div>
            {
                spanList.map((item,index) => {
                    return (
                        <span key={ item.name + index}>
                            <Link to={'/hooks/' + item.name } >
                                {item.name}
                            </Link>
                            { index === spanList.length - 1 ? ' ' : ' | '}
                        </span>

                    )
                })
            }
            {
                spanList.map((item, index) => {
                    return (
                        <Route path={'/hooks/' + item.name } key={ item.name + index} render={ props=>(
                            <item.component {...props} />
                        )} />
                    )
                })
            }
        </div>
    )
}

export default Index;

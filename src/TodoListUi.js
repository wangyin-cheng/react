import React from 'react';
import {Button, Input, List} from "antd";
// ui组件，五状态组件
const TodoListUi = (props) => {
    return (
        <div>
            <div>
                <Input
                    style={{width: '200px'}}
                    placeholder={ '请输入' }
                    value={ props.inputValue }
                    onChange={(e) => { props.changeInputValue(e) }}
                />
                <Button type="primary" className='but-class' onClick={() => { props.butClickFunc() }}>添加</Button>
            </div>
            <List
                className='list-warp'
                bordered
                dataSource={props.list}
                renderItem={(item, index) => (
                    <List.Item onClick={() => { props.deleteItem(index) }}>
                        {item}
                    </List.Item>
                )}
            />
        </div>
    )
}

export default TodoListUi;
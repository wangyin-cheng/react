import React,{useState} from "react";


function Demo1() {
    const [count, setCount] = useState(0)
    return (
        <div>
            <p>计算器{count}</p>
            <button onClick={() => { setCount(count+1 ) }}>加</button>
            <button onClick={() => { setCount(count-1 ) }}>减</button>
        </div>
    )
}

export default Demo1

// 总结： 单个useState 返回一个计算值和一个设置函数

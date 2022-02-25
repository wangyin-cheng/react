import React,{useState} from "react";


function Demo2() {
    const [sex, setSex] = useState('男')
    const [age, setAge] = useState(18)
    const [work, setWork] = useState('程序员')
    return (
        <div>
            <p>jsPang今年：{age}岁</p>
            <p>性别：{sex}</p>
            <p>工作是：{work}</p>
        </div>
    )
}

export default Demo2

// 总结： 多状态 不能存在 条件语句中

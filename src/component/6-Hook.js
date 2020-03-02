import React, { useState, useEffect } from 'react';


function HookComp(props) {
    //通过useState定义函数组件的state对象
    const [count, setCount] = useState(1);
    //通过useEffect定义函数定义函数声明周期
    useEffect(() => {
        document.title = `You clicked ${count} times`;
        alert(document.title);
        return function cleanup() {
            // alert(document.title);
            console.log(document.title);

        }
    });

    useEffect(() => {
        alert("useEffect Two");
    })
    return (
        <div>
            <h1>{props.name} </h1>
            <p>this count is :{count}</p>
            <button onClick={() => setCount(count + 1)}>+</button>
        </div>
    );
}

export default HookComp;
import React from 'react';

const style = {
  "color": "red"
}

//函数式组件，如果组件没有state保存数据，则可以使用函数式组件，避免类组件复杂特性
function Hello(props) {
  return (
    <div>
      <h1 style={style}>函数式组件</h1>
      <p>Hello {props.name} ，welcome to china</p>
    </div>
  );
}

export default Hello;

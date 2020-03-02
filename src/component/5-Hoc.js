// hoc高阶组件，是通过props传递一个组件，并返回一个新的组件
import React from 'react';

function Hello(props) {
    return (
        <div>
            <h1>Hello HOC World!</h1>
            <h1>{props.tip}</h1>
        </div>
    );
}

//使用HOC做一些通用事情，或者切面工作
function HOCLog(WrappedComponent) {

    return class HOCLog extends React.Component {
        componentDidMount() {
            console.log("记录日志！");
            // debugger;
            // alert("记录日志")
        }

        render() {
            return <WrappedComponent {...this.props} tip="Im from HOC,我可以做记录日志等通用的事情" ></WrappedComponent >
        }
    }
}

let HelloHOC = HOCLog(Hello);
export default HelloHOC;




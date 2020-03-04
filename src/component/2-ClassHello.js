import React from 'react';

/*
1：UI=props + state  当props和state发生改变时，组件会更新
2：设置方式
    2.1：构造函数
    2.2：其他函数使用setState，不能直接更新this.state
*/

//1:state 构造函数里面的初始化方式
//2:其他地方更新state方式使用setState，这样可以自动更新节目


function UserGreeting(props) {
    return <h1>Welcome back {props.name}</h1>
}

function GusestGreeting(props) {
    return <h1>Plase sign up.</h1>
}

class HelloMessage extends React.Component {
    constructor(props) {
        super(props);

        // 为了在回调中使用 `this`，这个绑定是必不可少的
        this.onToggleClick = this.onToggleClick.bind(this);

        //在构造函数state初始化方式，不能使用setState
        this.state = {
            count: 0,
            isToggleOn: true,
        };

        let a = [1, 2, 3];
        let b = [5, 6, 7];
        let c = [a, b];
        console.log(c);

    }

    // 属性修改时调用
    componentWillReceiveProps(nextProps) {
        if (this.props === nextProps) {
            console.log(this.props, nextProps);
        }
    }

    shouldComponentUpdate() {
        console.log("shouldComponentUodate process")
        if (this.getSnapshotBeforeUpdate) {
            return this.getSnapshotBeforeUpdate.state.count !== this.state.count;
        }
        return true;
    }
    componentDidMount() {
        console.log("componentDidMount 组件加载！")
    }

    componentWillUpdate() {
        console.log("componentWillUpdate 执行")
    }



    componentWillUnmount() {
        console.log("componentWillUnmount 组件卸载时执行！")
    }

    onClickHandle(e) {
        //更新state的方式
        this.setState({
            count: this.state.count + 1,
        });
        // this.state.count++;//此种方式更新界面，界面不刷新
    }

    onToggleClick(e) {
        this.setState({
            isToggleOn: !this.state.isToggleOn,
        })
    }


    onLinkClick = (e) => {
        // 阻止元素默认的行为
        e.preventDefault();
        alert(this.state.count, e);
        console.log('The link was clicked.');
    }

    greeting() {
        return this.state.isToggleOn ? <UserGreeting name={this.props.name} /> : <GusestGreeting />
    }
    render() {
        return (
            <div>
                Hello {this.props.name}，click {this.state.count}
                <p>1：箭头函数绑定，箭头函数调用this.onClick函数，ES6箭头函数的this对象是声明的作用域this</p>
                <button onClick={e => this.onClickHandle(e)}>点击</button>
                <p>2：普通函数绑定事件，如果不属于bind函数绑定this，调用的this对象是button对象</p>
                {this.greeting()}
                <button onClick={this.onToggleClick}>{this.state.isToggleOn ? "ON" : "OFF"}</button>
                <p>3：箭头函数赋值为函数变量</p>
                <a href="#" onClick={this.onLinkClick}>我们的事件</a>
            </div>
        );
    }
};

export default HelloMessage;
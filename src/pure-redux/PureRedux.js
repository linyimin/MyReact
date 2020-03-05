import React, { Component } from "react";
import {
    createStore,
    combineReducers,
    bindActionCreators
} from "redux";


function run() {

    const inistate = { count: 0 };
    const inistateSec = { sum: "linyimin" };

    //reducer
    const counter = (state = inistate, action) => {
        switch (action.type) {
            case "PLUS_ONE":
                return { ...state, count: state.count + 1 };
            case "MINUS_ONE":
                return { count: state.count - 1 };
            case "CUSTOM_COUNT":
                return { count: state.count + action.count }
            default:
                return state;
        }
    };

    const todos = (state = inistateSec) => state;
    //创建store
    const store = createStore(
        combineReducers({
            todos,
            counter
        })
    );
    //const store = createStore(combineReducers(counter,todos));

    //创建action
    function plusOne() {
        return { type: "PLUS_ONE" }
    }
    function minusOne() {
        return { type: "MINUS_ONE" }
    }
    function customCount(count) {
        return {
            type: "CUSTOM_COUNT",
            count: 5
        }
    }

    // function print(){
    //     console.log(store.getState());
    // }
    // store.subscribe(print);
    store.subscribe(() => { console.log("store.subscribe订阅函数通知:", store.getState()) });

    store.dispatch(minusOne());

    // eslint-disable-next-line no-func-assign
    plusOne = bindActionCreators(plusOne, store.dispatch);


    plusOne();
    //plusOne();
    // plusOne();
    store.dispatch(customCount(5));

}

class PureRedux extends Component {

    render() {
        return (
            <div> <button onClick={run}>Run</button>
                <p>* 请打开控制台查看运行结果</p>
                {/* <p>{store.state.count}</p> */}
            </div>

        );
    }
}

export default PureRedux;
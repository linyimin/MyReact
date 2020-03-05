import React, { useReducer, useEffect, useCallback, useRef, useLayoutEffect } from 'react';

let myReduer = (state, action) => {
    if (action.type === "add") {
        return state + 1;
    }
    else if (action.type === "sub") {
        return state - 1;
    }
    else if (action.type === "init") {
        return state
    }
    return state;
}


function HookUserReducer(props) {

    const [count, dispatch] = useReducer(myReduer, 1)

    useEffect(() => {
        //dispatch({ type: "adds" })
    });
    const textRef = useRef();

    useLayoutEffect(() => {
        textRef.current = count; // 将 text 写入到 ref
    });
    const memoizedCallback = useCallback(
        () => {
            console.log(count);
        },
        [textRef],
    );

    return (
        <div>
            <div>count {count}</div>
            <button
                onClick={() => dispatch({ type: "add" })}
            >Increase</button>
            <button
                onClick={() => dispatch({ type: "sub" })}
            >Increase</button>
            <button
                onClick={memoizedCallback}
            >Update</button>
        </div>
    );
}


export default HookUserReducer;
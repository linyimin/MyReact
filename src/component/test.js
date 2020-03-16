import React,{useState,memo,useMemo,useCallback, useEffect} from 'react';

// export default function HookCounter(){
//     let [number,setNumber] = useState(0);

//     function lazy(){
//         setTimeout(() => {
//              //setNumber(number+1);
//              //这样每次执行时都会去获取一遍 state，而不是使用点击触发时的那个 state
//              setNumber(number=>number+1);
//         }, 3000);
//     }
//     return (
//         <>
//            <p>{number}</p>
//            <button onClick={()=>setNumber(number+1)}>+</button>
//            <br></br>
//            <button onClick={lazy}>lazy</button>
//         </>
//     )
// }


// export default function HookCounter(){
//     const [counter,setCounter] = useState({name:'计数器',number:0});
//     console.log('render Counter')
//     // 如果你修改状态的时候，传的状态值没有变化，则不重新渲染
//     return (
//         <>
//             <p>{counter.name}:{counter.number}</p>
//             <button onClick={()=>setCounter({...counter,number:counter.number+1})}>+</button>
//             <br></br>
//             <button onClick={()=>setCounter(counter)}>++</button>
//         </>
//     )
// }



function SubCounter({onClick,data}){
    useEffect(()=>{
        console.log('SubCounter render',data);
    })
    
    return (
        <button onClick={onClick}>{data.number}</button>
    )
}
SubCounter = memo(SubCounter);
export  default  function HookCounter(){
    console.log('Counter render');
    const [name,setName]= useState('计数器');
    const [number,setNumber] = useState(0);
    const data ={number};
    const addClick = ()=>{
        setNumber(number+1);
    };
    return (
        <>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
            <SubCounter data={data} onClick={addClick}/>
        </>
    )
}

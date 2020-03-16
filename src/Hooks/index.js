import React, { useState, useEffect } from 'react';
import HookUseMemo from './useMemo';

export default function HookShow(props){
    const [showType,setShowType]=useState(0);

    useEffect(()=>{
        setShowType(1);
        console.log("useEffect render one")
    },[]);

    useEffect(()=>{
        console.log("useEffect render",showType)
    },[showType]);

    return(
        <div>
            <button onClick={()=>setShowType(0)}>useMemo优化</button>
            <button onClick={()=>setShowType(1)}>useMemo优化</button>
            <button onClick={()=>setShowType(showType+1)}>useMemo优化</button>
            <div>
                {showType===0?<HookUseMemo/>:null}
            </div>
        </div>
    )
}


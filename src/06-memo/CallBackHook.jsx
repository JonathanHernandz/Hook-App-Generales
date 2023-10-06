import React, { useCallback, useEffect, useState } from 'react'
import { ShowIncrement } from './ShowIncrement';

export const CallBackHook = () => {
    const [counter, setCounter] = useState(10);

    const incremenetFather = useCallback(
      (value) => {
        setCounter(  (c) => c + value );
      },
      [],
    )
    
     
    // const incremenetFather = () => {
    //     setCounter(counter+1);
    // }

    return (
        <>
            <h1> useCallBack Hook: {counter} </h1>
            <hr />
            <ShowIncrement increment={incremenetFather} />
        </>
    )
}

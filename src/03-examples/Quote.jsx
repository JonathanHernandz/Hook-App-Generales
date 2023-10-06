import { useLayoutEffect, useRef, useState } from "react"

export const Quote = ({ author, quote  }) => {
    const pReft = useRef();
    const [boxsize, setBoxsize] = useState({width: 0, height: 0});
    useLayoutEffect(() => {
        const  {width, height} = pReft.current.getBoundingClientRect();
        setBoxsize({ width,height })
    }, [quote])

    return (
        <>
            <blockquote className='blockquote text-end'
                style={{ display: 'flex' }}
                >
                <p ref={pReft} className='mb-1'> {quote }</p>
                <footer className='blockquote-footer'> {author} </footer>
            </blockquote>
            {console.log(boxsize)}
            <code>{ JSON.stringify(boxsize) }</code>

        </>
  )
}

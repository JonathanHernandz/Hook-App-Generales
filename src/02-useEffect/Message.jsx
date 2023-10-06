import { useEffect, useState } from "react"

export const Message = () => {

    const [cords, setcords] = useState({x:0, y:0});
    
    useEffect(() => {
      
      const onMouseEvent = ( { x, y} ) =>{
        setcords({ x, y })
      }

      window.addEventListener( 'mousemove', onMouseEvent );
    
      return () => {
        window.removeEventListener( 'mousemove', onMouseEvent );
      }
    }, [])
    

  return (
    <>
        <h3>Usuario ya existe</h3>
        {
          JSON.stringify(cords)
        }
    </>

  )
}

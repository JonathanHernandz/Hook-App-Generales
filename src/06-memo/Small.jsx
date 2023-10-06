import {memo} from  'react'

//React.memo igual funciona asi 
export const Small = memo(({ value }) => {
    console.log('Me volvi a generar')
  return (
    <small> {value} </small>
  )
}
)

import { useFetch, useCounter } from '../hooks'
import { LoadingQuote, Quote } from '../03-examples';
 

export const Layout = () => {
  const {counter, increment, reset, decrement} = useCounter(1);

    const { data, isLoading, hasError} = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`)
    const { author, quote } = !!data && data[0];

    console.log({data, isLoading, hasError});
  return (
    <>
      <h1> Breackingbad Quotes</h1>
      <hr/>
 
      {
        isLoading ?
          <LoadingQuote/>
          :
          <Quote author={author} quote={quote} />
      }

      <button onClick={() => increment(1)}  className='btn btn-primary' disabled={isLoading}>
        Next quote {}
      </button>
    </>
  )
}

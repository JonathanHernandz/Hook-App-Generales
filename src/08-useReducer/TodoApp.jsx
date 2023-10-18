// import { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer'
import { TodoList } from './TodoList'
import { TodoAdd } from './TodoAdd'
import { useTodo } from '../hooks'

const initialState = [
    // {
    //     id: new Date().getTime(),
    //     description: 'Recolectar la piedra del alma',
    //     done: false,
    // },
]

// const init = ( ) =>{
//     return JSON.parse( localStorage.getItem('todos')) || [];
// }

export const TodoApp = () => {
     
    const { todos, handlDeleteTodo, handleToggleTodo, handleNewTodo, todosCount, pendingTodosCount } = useTodo();

    // const [todos, dispatch] = useReducer(todoReducer, initialState, init);

    // useEffect(() => {
    //     localStorage.setItem('todos',JSON.stringify(todos))
    
    // }, [todos])

    // const handleNewTodo = (todo) =>{
    //     const action = {
    //         type: '[TODO] Add Todo',
    //         payload: todo
    //     }
    //     dispatch(action); 
    // }

    // const handlDeleteTodo = (id) =>{
    //     // console.log('Toasdlkhasdklsh')
    //     dispatch({
    //         type: '[TODO] Remove Todo',
    //         payload: id
    //     });
    // }
    // const handleToggleTodo = (id)=>{
    //     console.log({id});
    //     dispatch({
    //         type: '[TODO] Toggle Todo',
    //         payload: id
    //     });
    // }
  return (
    <>
        <h1>TodoApp ({todosCount}) <small>pendientes: {pendingTodosCount}</small> </h1>
        <hr />

        <div className='row'>
            <div className='col-7'>

                <TodoList todos={todos}
                    onDeleteTodo = {handlDeleteTodo}
                    onToggleTodo = {handleToggleTodo}
                />
                {/* <ul className='list-group' >
                    {
                        todos.map( todo => (
                            //TodoItem........
                            <li key={todo.id} className='list-group-item d-flex justify-content-between'>
                                <span className='align-self-center'>Item 1 </span>
                                <button className='btn btn-danger' >Borrar</button>
                            </li>
                        ) )
                    }
                    
                </ul> */}

            </div>

            <div className='col-5'>
                <h4>Agregar TODO</h4>
                <hr />
                {/* <form>
                    <input typeof='text'
                        placeholder='¿Que hay que hacer?'
                        className='form-control'
                    />
                    <button type='submit'
                    className='btn btn-outline-primary mt-1' >
                        Agregar
                    </button>
                </form> */}
                <TodoAdd onNewTodo={handleNewTodo}  />
            </div>
        </div>
    </>
  )
}

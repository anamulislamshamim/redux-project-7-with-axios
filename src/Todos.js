import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllTodos } from './services/actions/todosActions';

const Todos = () => {
    const { isLoading, todos, error } = useSelector(state => state);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllTodos(2));
    }, [dispatch]);
    console.log(todos);
    return (
        <div>
            {isLoading && <h1>Loading...</h1>}
            {error && <h1 style={{ "color": "red" }}>{error.message}</h1>}
            <section>
                {todos.length > 0 && 
                todos.map((todo, i) => <h1 key={i}>{todo.title}</h1>)}
            </section>
        </div>
    )
}

export default Todos
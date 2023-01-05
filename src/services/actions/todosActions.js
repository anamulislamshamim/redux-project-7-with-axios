import axios from "axios";
import { GET_TODOS_FAILED, GET_TODOS_SUCCESS } from "../constants/todosConstants";

export const getAllTodos = (id=1) => async (dispatch) => {
    dispatch({ type: GET_TODOS_FAILED });
    try {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/todos/${ id }`);
        dispatch({ type: GET_TODOS_SUCCESS, payload: [res.data] });
    } catch (error) {
        dispatch({type:GET_TODOS_FAILED, payload:error});
    }
}
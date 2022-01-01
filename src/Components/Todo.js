import React, { useState } from 'react'
import { FaPen,FaTrash } from 'react-icons/fa';

const Todo = () =>{
    const [inputData,setInputData] = useState(""); 
    const [todoList,setTodoList] = useState([]);
    const [editId,setEditId] = useState(null);
    const onInputChange = (e)=>{
        setInputData(e.target.value);
    }

    const onInputSubmit = (e) => {
        e.preventDefault();
        if(editId !== null){
            var tempTodo = todoList.map(data=>{
                if(data.id === editId){
                    return {...data,name:inputData};
                }
                return data;
            })
            setTodoList(tempTodo);
            setEditId(null);
        }else{
            setTodoList([...todoList,{id:Math.random(),name:inputData}]);
            setInputData("");
        }   
    }
    const onDeleteTodo = (id) => {
        if(editId === id){
            setEditId(null);
            setInputData("");
        }
        var tempTodo = todoList.filter(data=>{
            return data.id !== id;
        })
        setTodoList(tempTodo);
    }
    const onEditTodo = (id) => {
        todoList.map(data=>{
            if(data.id === id){
                setInputData(data.name);
            }
        })
        setEditId(id);
    }

    const getButton = () => {
        if(editId !== null){
            return <button type="submit">Edit</button>
        }else{
            return <button type="submit">Add</button>
        }
    }

    const getTodoItems = () => {
       return todoList.map(data=>{
            return (
                <h1 key={data.id}>
                    {data.name}
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <FaPen className='fa-pen' onClick={()=>onEditTodo(data.id)}/>
                    &nbsp;&nbsp;
                    <FaTrash className='fa-trash' onClick={()=>onDeleteTodo(data.id)}/>
                </h1> 
            )
        })
    }

    return(
        <>
        <h1>Todo App</h1>
        <form onSubmit={onInputSubmit}>
            <input value={inputData} onChange={onInputChange} required></input>
            {getButton()}
        </form>
        {
            getTodoItems()
        }
        </>
    )
}
export default Todo;
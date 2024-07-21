// import Todo from './Todo.module.css'
import { useState } from "react";
import TodoListItems from "./TodoListItems";


export default function Todo() {
    let [todolist, settodolist] = useState([]) 


    let addTodolist = (event) => {

        let toname = event.target.toname.value; 
        // alert(toname)
        if(!todolist.includes(toname)) {        // list me value nhi hai toh true pass karo
            let finaltodolist = [...todolist,toname];  // jo data pehle se para hai or naya hai dono ko uthao store karwao finaltodolist me.
            settodolist(finaltodolist)
        }else{
            alert('Todo Name already exists....')
        }

        event.preventDefault(); // yeh page ko refress nhi hone deta hai but data save hota hai.

    }
    // this code shows the list items
    let list = todolist.map((value, index) => {
        return(
            <TodoListItems value={value} key={index} indexNum={index} 
                        todolist={todolist} settodolist={settodolist}
            />
        )
    })

    return (
        <div style={{
            margin: 'auto',
            textAlign: 'center'
        }}>
            <h1>TODO</h1>
            <form  onSubmit={addTodolist}>
                <input type="text" name="toname"/> <button>Add</button>
            </form>

            <div style={{
                width: 1170,
                margin: 'auto',
                marginTop: 50
            }}>
                <ul style={{
                    margin: 0,
                    padding: 0,
                    listStyle: 'none',
                    
                }}>
                    
                   {list}

                </ul>
            </div>
        </div>
    )
}



import { useState } from "react"
// import style from './style.module.css'
import './style.css'

export default function TodoListItems({ value, indexNum, todolist, settodolist }) {

    let [status, setStatus] = useState(false)

    let deleteRow = () => {
        let finallist = todolist.filter((val, idx) => idx !== indexNum)
        settodolist(finallist)
    }

    let checkStatus = () => {
        setStatus(!status)

    }
    return (
        <div style={{
            display: 'flex',
            width: 800,
            margin: 'auto',
            
        }} >
            {/* &times use for cross  */}
            <li onClick={checkStatus}
                className={
                    (status) ? 'completedtodo' : ''
                }

                

                style={{
                   
                    backgroundColor: 'white',
                    color: 'black',
                    position: 'relative',
                    padding: 10,
                    textAlign: "left",
                    marginBottom: 10,
                    paddingLeft: 20,
                    fontSize: 20,
                    borderRadius: 15,
                    justifyContent: "center",
                    flexBasis: 800,
                    

                    
                }}>
                
                
                {indexNum + 1 } {' '} {value}
                
                <span style={{
                    position: 'absolute',
                    right: 20,
                    cursor: "pointer",
                    backgroundColor: 'white'
                }}

                    onClick={deleteRow}
                >&times;</span></li>

        </div>
    )
}

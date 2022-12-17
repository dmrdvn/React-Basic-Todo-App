import '../App.css';
import React from 'react'

const Main = ({todos}) => {
    
    
    return(
        
        
        <div className='main'>
            <ul className='todo-list'>
                
               {

                todos.map((todo,id)=> (

                    <li key={id}>
                        <div className="view">
                            <input className='toggle' type="checkbox" />
                            <label htmlFor="">{todo.note}</label>
                            <button className='destroy'>X</button>
                        </div>
                    </li>
                
                ))

               }




                


            </ul>
        </div>
    )
}

export default Main
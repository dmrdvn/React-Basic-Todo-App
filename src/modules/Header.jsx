import '../App.css'

import React from 'react'
import { useState, useEffect } from 'react'

const Header = ({setTodos,todos}) => {

    const [form, setForm] = useState({ note: ""})

    
    useEffect(()=> {
        /* todos state i değişmişse inputları temizle */
        setForm({note: ""})
    },[todos])
    
    
    const onChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }



    /* Submit olduğunda form stateine kaydet */
    const onSubmit = (e) => {

        e.preventDefault();
        
        if(form.note === "") {
            return false
        } 
        
        setTodos([...todos, form]);
        console.log(form);
       
    }



    return(
        <div className='header'>
            
            
            <form onSubmit={onSubmit}>
                <input className='new-todo' name='note' placeholder='What needs to be done ?' value={form.note}  onChange={onChange} />
            
            </form>
            
        </div>
    )
}

export default Header
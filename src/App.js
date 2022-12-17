import './App.css';

/* Modules */
import Header from './modules/Header';
import Main from './modules/Main';
import Footer from './modules/Footer';

import { useState } from 'react';

function App() {

  const [todos,setTodos] = useState([{note:"Learn Javascript"},{note:"Learn React"},{note:"Have a life!"}]);
  /* P.S Obje tanımlarken array içinde tanımlıyoruz. [{note: ""},{note: ""}] */

  return (
    <div className="todoapp">
      <div className='container'>
            <h1>todos</h1>
            <div className='row'>
              <Header todos={todos} setTodos={setTodos}/>
              <Main todos={todos}/>
              <Footer todos={todos} setTodos={setTodos}/>
            </div>
      </div>
    </div>
  );
}

export default App;

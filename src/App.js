import React, { useState, Fragment } from "react";
import './App.css';
import NavBar from './components/navbar';
import Counters from './components/counters';
const App = ()=> {

  const [data, setData] = useState([
    {id: 1, producto:"Notebook", price:90000, value: 4},
    {id: 2, producto:"TV Led", price:70000, value: 0},
    {id: 3, producto:"Heladera", price:55000, value: 0},
    {id: 4, producto:"Play Station", price:85000 ,value: 0}
  ]);
  
  const handleIncrement = (counter) => {
  
    const index = data.indexOf(counter);
    data[index]={...counter}; 
    data[index].value++;
    setData([...data])
    
   };
   
  const handleDelete = (counterId) => {
    
    setData([...data.filter(note => note.id !== counterId)]); 

  };

  const handleReset = () => {

    const counters = data.map((c) => {
      c.value = 0;
      return c;
    });
    setData([...counters]);

  };
  
   return(
    <Fragment>
        <NavBar totalCounters={Object.keys(data).filter(c=> data[c].value>0).length}  counters = {data} /> 
        <main className="container d-flex justify-content-center">
        <Counters 
            counters={data}
            onReset={handleReset}
            onIncrement={handleIncrement}
            onDelete={handleDelete}
           />
        </main>
    </Fragment>
   )     
}
   
export default App;
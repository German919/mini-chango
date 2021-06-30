import React from "react";

const Counter = ({onDelete, onIncrement, counter}) => {
  const getBadgesClasses = () => {
      let classes = "badge m-2 p-2 badge-";
      classes += counter.value === 0 ? "warning" : "primary";
      return classes;
  }
  
  const formatCount = () => {
      const { value } = counter;
      return value === 0 ? 0 : value;
  }
  
  return (
        <div>
          <span className="product">{counter.producto} </span> 
          <span className="price"> ${counter.price}</span>  
          <span className="total"> ${formatCount() !=="Cero" ? counter.price * formatCount(): 0} </span>
          <span className= {getBadgesClasses()}>{formatCount()}</span>
          <button
              onClick={() => onIncrement(counter)}
              className="btn btn-success btn-sm button-increment"
            > Incrementar
          </button>
          <button onClick={() => onDelete(counter.id) } 
           className="btn btn-danger btn-sm m-2 button-delete">Delete</button>
        </div>
      );
  }

  export default Counter;

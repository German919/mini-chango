import React from "react";
import Counter from "./counter";
const Counters = ({counters, onReset, onIncrement, onDelete}) => {
  
  return (
      <div>
        <button
          onClick={onReset}
          className="brn btn-primary btn-sm m-2 button-reset"
        >
          Reset
        </button>
        <div className="container-titles">
          <h5>Descripción</h5>
          <h5 className="container-price">Precio</h5>
          <h5 className="container-total">Total</h5>
        </div>
        
        {Object.keys(counters).map((counter) => (
          <Counter
            key={counters[counter].id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counters[counter] }
          />
        ))}
      </div>
  );
}

export default Counters;

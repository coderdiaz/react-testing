import React from "react";

const Counter = props => {
  // Aquí definiremos el nombre con el que conoceremos el estado y la función
  // con la que modificaremos dicho estado
  const [count, setCount] = React.useState(0);

  return (
    <>
      <button className="suma" onClick={() => setCount(count + 1)}>
        Agregar uno
      </button>
      <button className="resta" onClick={() => setCount(count - 1)}>
        Menos uno
      </button>
      <p>La cuenta es: {count}</p>
    </>
  );
};

export default Counter;

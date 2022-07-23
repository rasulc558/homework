import React, { useState } from "react";
import Counter from "./counter";

const CountersList = () => {
  const initialState = [
    { id: 1, value: 0, name: "ненужная вещь", price: "200" },
    { id: 2, value: 2, name: "вилка" },
    { id: 3, value: 5, name: "ложка" },
    { id: 4, value: 0, name: "тарелка" },
    { id: 5, value: 8, name: "набор минималиста" },
  ];

  const [counters, setCounters] = useState(initialState);

  const handleDelete = (id) => {
    setCounters(counters.filter((count) => count.id !== id));
  };

  const handleInitialState = () => {
    setCounters(initialState);
  };

  return (
    <>
      {counters.map((count) => (
        <Counter
          key={count.id}
          {...count}
          onDelete={handleDelete}
          setCounters={setCounters}
        />
      ))}

      <button
        className="btn btn-sm btn-primary m-2"
        onClick={handleInitialState}
      >
        Сброс
      </button>
    </>
  );
};

export default CountersList;

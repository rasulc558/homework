import React, { useState } from "react";

const Counter = (props) => {
  const { value, setCounters, id } = props;

  const formatCount = () => {
    return value === 0 ? "empty" : value;
  };
  const getBadgeClasses = () => {
    let classes = "badge m-2 ";
    classes += value === 0 ? "bg-warning" : "bg-primary";
    return classes;
  };

  const handleIncrement = (id) => {
    setCounters((items) => {
      console.log(items);
      return items.map((item) => {
        if (item.id === id) {
          return { ...item, value: (item.value += 1) };
        } else {
          return item;
        }
      });
    });
  };

  const handleDecrement = (id) => {
    setCounters((items) => {
      console.log(items);
      return items.map((item) => {
        if (item.id === id) {
          return { ...item, value: (item.value -= 1) };
        } else {
          return item;
        }
      });
    });
  };

  return (
    <div>
      <span className="m-2">{props.name}</span>

      <span className={getBadgeClasses()}> {formatCount()} </span>

      <button
        className="btn btn-primary btn-sm m-2"
        onClick={() => handleIncrement(id)}
      >
        +
      </button>

      <button
        className="btn btn-primary btn-sm m-2"
        onClick={() => handleDecrement(id)}
      >
        -
      </button>
      <button
        className="btn btn-danger btn-sm m-2"
        onClick={() => props.onDelete(props.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default Counter;

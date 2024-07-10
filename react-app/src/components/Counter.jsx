import { useState } from "react";
import "./css.counter.scss";
import { useEffect, useRef } from "react";
const Counter = ({ children, id }) => {
  const [counter, setCounter] = useState(0);
  const [counterColor, useCounterColor] = useState("red");
  const inputRef = useRef();
  useEffect(() => {
    console.log("callback EMPTY DEPENDENCY ARRAY");
    return () => {
      console.log("cleanup EMPTY DEPENDENCY ARRAY");
    };
  }, []);
  useEffect(() => {
    console.log("callback NO DEPENDENCY ARRAY");
    return () => {
      console.log("cleanup NO DEPENDENCY ARRAY");
    };
  });

  useEffect(() => {
    if (counter % 2 === 0) {
      useCounterColor("blue");
    } else {
      useCounterColor("red");
    }
    console.log("callback ", counter, "COUNTER DEPENDENCY");
    return () => {
      console.log("cleanup ", counter), "COUNTER DEPENDENCY";
    };
  }, [counter]);

  return (
    <div className={`counterbody ${counterColor}`}>
      <p>{counter}</p>
      <div className="counterbuttonbody">
        <button
          onClick={() => {
            setCounter((prev) => prev + 1);
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            setCounter((prev) => prev - 1);
          }}
        >
          -
        </button>
      </div>
      <div>
        <input type="text" ref={inputRef} />
        <button
          onClick={() => {
            inputRef.current.focus();
          }}
        >
          Focus
        </button>
      </div>
    </div>
  );
};
export default Counter;

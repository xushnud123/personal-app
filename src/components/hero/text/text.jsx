import React, { useState, useEffect } from "react";
import { useInterval } from "react-use";
import "./text.scss";

const Text = () => {
  const [count, setCount] = useState(0);
  const reactArray = "Frontend".split("");
  const switchArray = "Web".split("");
  const [play, setPlay] = useState(true);
  const [items, setItems] = useState(reactArray);

  useInterval(
    () => {
      // animate Swift, looping
      if (count) {
        setCount(0);
        setItems(reactArray);
      }
      else{
        // animate react
        setItems(switchArray);
        setCount(count + 1);
      }
    },
    play ? 6000 : null
  );

  useEffect(() => {
    const timer = setTimeout(()=> {
        setItems(switchArray)
        setPlay(true)
    },4000)
    return clearTimeout(timer)
  }, []);

  return (
    <span className="text" >
      {items.map((item, index) => {
        return <span key={index}>{item}</span>;
      })}
    </span>
  );
};

export default Text;
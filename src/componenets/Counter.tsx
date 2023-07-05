"use client";
import { counterActions } from "@/store/slice/CounterSlice";
import { RootState } from "@/store/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  const dipatch = useDispatch();
  const counterValue = useSelector(
    (state: RootState) => state.counterSlice.value
  );
  const increment = () => dipatch(counterActions.increment());
  const decrement = () => dipatch(counterActions.decrement());
  return (
    <div className="flex gap-x-6">
      <span onClick={decrement}>Decrement</span> <span>{counterValue}</span>{" "}
      <span onClick={increment}>Increment</span>
    </div>
  );
};

export default Counter;

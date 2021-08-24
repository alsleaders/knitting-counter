import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrementRepeat,
  incrementRepeat,
  incrementByAmount,
  //incrementAsync,
  //incrementIfOdd,
  selectRepeatCount,
  clearTotal,
} from "./repeatCounterSlice";
import styles from "./Counter.module.css";

export function RepeatCounter() {
  const [showRepeat, setShowRepeat] = useState(false);
  const count = useSelector(selectRepeatCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState("1");

  const incrementValue = Number(incrementAmount) || 0;

  const toggleShow = () => setShowRepeat(!showRepeat);

  return (
    <div>
      {!showRepeat ? (
        <div>
          <div className={styles.row}>
            <button
              className={styles.button}
              aria-label="Decrement value"
              onClick={() => toggleShow()}
            >
              Show Repeat Counter
            </button>
          </div>
        </div>
      ) : null}
      {showRepeat ? (
        <div>
          <div className={styles.row}>
            <button
              className={styles.repeatButton}
              aria-label="Decrement value"
              onClick={() => dispatch(decrementRepeat())}
            >
              -
            </button>
            <span className={styles.value}>{count}</span>
            <button
              className={styles.repeatButton}
              aria-label="Increment value"
              onClick={() => dispatch(incrementRepeat())}
            >
              +
            </button>
          </div>
          <div className={styles.row}>
            <input
              className={styles.textbox}
              aria-label="Set increment amount"
              value={incrementAmount}
              onChange={(e) => setIncrementAmount(e.target.value)}
            />
            <button
              className={styles.repeatButton}
              onClick={() => dispatch(incrementByAmount(incrementValue))}
            >
              Add Repeats
            </button>
            <button
              className={styles.repeatButton}
              onClick={() => dispatch(clearTotal(incrementAmount))}
            >
              Clear Repeat Counter
            </button>
          </div>
        </div>
      ) : null}
      <div className={styles.row}>
        <p className="textbox">Repeat Counter</p>
      </div>
    </div>
  );
}

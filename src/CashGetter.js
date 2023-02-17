import { useEffect, useState } from "react";
import "./CashGetter.css";
import getCashSoundClip from "./assets/money-counter.mp3";

const moneyCounterSound = new Audio(getCashSoundClip);

export const CashGetter = () => {
  const [cashMoney, setCashMoney] = useState(0);

  const stopSound = (event) => {
      moneyCounterSound.pause();
      moneyCounterSound.currentTime = 0;
      moneyCounterSound.play();
  };

  return (
    <>
      <img className="cashGetterBackground"></img>
      <div className="theMoney">${cashMoney}</div>
      <div className="getCashButtonDiv">
        <button
          className="button-49"
          onClick={(event) => {
            setCashMoney(cashMoney + 50);
            stopSound(event);
          }}
        >
          GET CASH
        </button>
      </div>
    </>
  );
};

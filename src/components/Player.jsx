import { useRef } from "react";
import { useState } from "react";

export default function Player() {
  const playerName = useRef();
  const [userName, setUserName] = useState(null);
  // const [inputValue, setInputValue] = useState(undefined);

  function handleUserNameInput() {
    setUserName(playerName.current.value);
    playerName.current.value = ''
  }
  // function handleInputValue(e) {
  //   setInputValue(e.target.value)
  // }

  return (
    <section id="player">
      <h2>Welcome {userName ?? 'unknown entity'}</h2>
      <p>
        <input
          ref={playerName}
          // value={inputValue}
          type="text"
          // onChange={handleInputValue}
        />
        <button onClick={handleUserNameInput}>Set Name</button>
      </p>
    </section>
  );
}

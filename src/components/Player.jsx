import { useEffect, useRef } from "react";
import { useState } from "react";

export default function Player() {
  const playerName = useRef(null);
  const [userName, setUserName] = useState(null);
 
  function handleUserNameInput() {
    setUserName(playerName.current.value);
    playerName.current.value = "";
  }

  // useEffect(() => {
  //   playerName.current.focus();
  // }, []);

  return (
    <section id="player">
      <h2>Welcome {userName ?? "unknown entity"}</h2>
      <p>
        <input
          ref={playerName}
          type="text"
        />
        <button onClick={handleUserNameInput}>Set Name</button>
      </p>
    </section>
  );
}

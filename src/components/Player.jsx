import { useState } from "react";

export default function Player() {

  const [userName, setUserName] = useState('');
  const [inputValue, setInputValue] = useState(undefined);

  function handleUserNameInput() {
    setUserName(inputValue)
    setInputValue('')
  }
  function handleInputValue(e) {
    setInputValue(e.target.value)
  }

  return (
    <section id="player">
      <h2>Welcome {userName}</h2>
      <p>
        <input value={inputValue} type="text" onChange={handleInputValue}/>
        <button onClick={handleUserNameInput}>Set Name</button>
      </p>
    </section>
  );
}

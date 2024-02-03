import React from "react";
import Header from "./header";
import { useState } from "react";
import UserInput from "./components/UserInput";
import Results from "./components/Results";
function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment : 10000,
    annualInvestment: 1200,
    expectedReturn : 6 ,
    duration : 10,
  });
  function handlechange(inputiden, newValue) {
    setUserInput((prevUser) => {
      return {
        ...prevUser,
        [inputiden]: +newValue,
      };
    });
  }
  const inputValid = userInput.duration >= 1 ; 
  const investValid = userInput.initialInvestment >= 0;
  return (
    <div>
      <Header />
      <UserInput onChange = {handlechange} userInput={userInput}/>
      {inputValid && investValid && <Results input={userInput}></Results> }
      {!inputValid && <p className="center">Duration must be greater than one.</p>} 
      {!investValid && <p className="center">Investment value must be greater than 0</p>}
    </div>
  )
}

export default App;

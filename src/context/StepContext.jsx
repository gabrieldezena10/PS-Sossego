import React, { createContext, useState } from 'react'

export const multiStepContext = createContext();

function StepContextProvider({ children }) {
  const [currFormStep, setCurrFormStep] = useState(3);
  const [userData, setUserData] = useState([]);
  const [finalData, setFinalData] = useState([]);

  const submitData = () => {
    setFinalData(userData);
    setUserData("");
  }

  return (
    <div>
      <multiStepContext.Provider value={{ currFormStep, setCurrFormStep, userData, setUserData, finalData, setFinalData, submitData }}>
        { children }
      </multiStepContext.Provider>
    </div>
  )
}

export default StepContextProvider;

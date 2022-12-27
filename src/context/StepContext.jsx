import React, { createContext, useState } from 'react'

export const multiStepContext = createContext();

function StepContextProvider({ children }) {
  const [currFormStep, setCurrFormStep] = useState(0);
  const [userData, setUserData] = useState({});
  const [finalData, setFinalData] = useState({});

  const setFormValues = (values) => {
    setUserData((prevValues) => ({
      ...prevValues,
      ...values,
    }));
  };

  const submitData = () => {
    setFinalData(userData);
    setUserData("");
  }

  return (
    <div>
      <multiStepContext.Provider value={{ currFormStep, setCurrFormStep, userData, setUserData, finalData, setFinalData, setFormValues, submitData }}>
        { children }
      </multiStepContext.Provider>
    </div>
  )
}

export default StepContextProvider;

import React, { useContext, useState } from "react";
import FormRegisterDetail from "../components/Form1RegisterDetail";
import FormAddressInfo from "../components/Form2AddressInfo";
import FormPersonalText from "../components/Form3PersonalText";
import Sucess from "../components/Form4Sucess";
import { multiStepContext } from "../context/StepContext";

function UserForm() {
  const { currFormStep } = useContext(multiStepContext)

  const showStep = (step) => {
    switch(step){
      case 0:
        return <FormRegisterDetail />
      case 1:
        return <FormAddressInfo />
      case 2:
        return <FormPersonalText />
      case 3:
        return <Sucess />
    }
  }

  return(
    <main>
      {showStep(currFormStep)}
    </main>
  )
}

export default UserForm;

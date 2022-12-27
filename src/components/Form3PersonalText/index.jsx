import { FileText, House, UserCircle } from "phosphor-react";
import React, { useContext } from "react";
import { multiStepContext } from "../../context/StepContext";
import { ButtonContainer, ButtonStyle, Container, FormContainer, HeaderContent, HeaderSteps, ImagesContent, InputContainer, MainContainer } from './styles'

function FormPersonalText() {
  const { setCurrFormStep, submitData } = useContext(multiStepContext);

  const submitForm = () => {
    submitData();
    setCurrFormStep(3);
  }

  return(
    <Container>
      <MainContainer>
        
          <HeaderContent>
            <h1>Criação de usuário</h1>
            <HeaderSteps>
              <ImagesContent>
                <div>
                  <UserCircle size={32} color="#00AE63" />
                </div>
                <li>Identificação de Usuário</li>
              </ImagesContent>
              <ImagesContent>
                <div>
                  <House size={32} color="#00AE63" />
                </div>
                <li>Endereço do usuário</li>
              </ImagesContent>
              <ImagesContent>
                <div>
                  <FileText size={32} color="#5357B1" />
                </div>
                <li>Sobre você</li>
              </ImagesContent>
            </HeaderSteps>
          </HeaderContent>
        <FormContainer>
          <InputContainer>
            <div>
              <label htmlFor="about">Nos conte mais sobre você</label>
              <textarea id="about"/>
            </div>
          </InputContainer>
          <ButtonContainer>
            <ButtonStyle
              className="anterior"
              onClick={ () => {setCurrFormStep(1)} }
            >
              Anterior
            </ButtonStyle>
            <ButtonStyle
              onClick={ () => { submitForm() } } 
            >
              Próximo passo
            </ButtonStyle>
          </ButtonContainer>
        </FormContainer>
      </MainContainer>
    </Container>
  )
}

export default FormPersonalText;

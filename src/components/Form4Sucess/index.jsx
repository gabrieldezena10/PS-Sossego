import React, { useContext } from "react";
import { multiStepContext } from "../../context/StepContext";
import { Container, HeaderContent, MainContainer, FormContainer, ItemsContainer, ButtonStyle, ItemsContainerExtended } from './styles'

function Sucess() {

  const { finalData, setCurrFormStep } = useContext(multiStepContext);

  return(
    <Container>
      <MainContainer>
        <HeaderContent>
          <h1>Usuário criado!</h1>
        </HeaderContent>
        <FormContainer>
          <ItemsContainer>
            <span>Nome</span>
            <p>{finalData.name}</p>
          </ItemsContainer>
          <ItemsContainer>
            <span>Email</span>
            <p>{finalData.email}</p>
          </ItemsContainer>
          <div style={{borderBottom: 'solid #F0F2F6 1px', padding: '0.5rem' } }></div>
          <ItemsContainerExtended>
            <div>
              <span>Rua</span>
              <p>{finalData.rua}</p>
            </div>
            <div>
              <span>Número</span>
              <p>{finalData.numero}</p>
            </div>
          </ItemsContainerExtended>
          <ItemsContainer>
            <span>CEP</span>
            <p>{finalData.cep}</p>
          </ItemsContainer>
        </FormContainer>
        <ButtonStyle
        onClick={() => setCurrFormStep(0) }
        >Novo usuário
        </ButtonStyle>
      </MainContainer>
    </Container>
  )
}

export default Sucess;

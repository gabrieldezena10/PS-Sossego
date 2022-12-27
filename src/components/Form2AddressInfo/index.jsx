import { FileText, House, UserCircle } from "phosphor-react";
import React, { useContext, useRef } from "react";
import { multiStepContext } from "../../context/StepContext";
import { ButtonContainer, ButtonStyle, Container, FormContainer, HeaderContent, HeaderSteps, ImagesContent, InputContainer, InputContainerExtended, InputStyle, MainContainer } from './styles'

function FormAddressInfo() {

  const { setCurrFormStep, userData, setUserData } = useContext(multiStepContext);

  const cepRef = useRef();
  const streetRef = useRef()
  const streetNumberRef = useRef()

  const dataRef = () => {
    setUserData(
      {
        ...userData,
        cep: cepRef.current.value,
        rua: streetRef.current.value,
        numero: streetNumberRef.current.value
      }
    );
    setCurrFormStep(2);
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
                <House size={32} color="#5357B1" />
              </div>
              <li>Endereço do usuário</li>
            </ImagesContent>
            <ImagesContent>
              <div>
                <FileText size={32} color="#8C98A9" />
              </div>
              <li>Sobre você</li>
            </ImagesContent>
          </HeaderSteps>
        </HeaderContent>
        <FormContainer>
          <InputContainer>
            <div>
              <label htmlFor="cep">CEP</label>
              <InputStyle 
                id="cep" 
                ref={cepRef}
              />
            </div>
            <div>
              <label htmlFor="rua">Rua</label>
              <InputStyle
              id="rua" 
              type="text"
              ref={streetRef}
              />
            </div>
          </InputContainer>

          <InputContainerExtended>
            <div>
              <label htmlFor="num">Número</label>
              <InputStyle 
                id="num" 
                name="numero"
                type="number"
                ref={streetNumberRef}
              />
            </div>
            <div>
              <label htmlFor="bairro">Bairro</label>
              <InputStyle 
                id="bairro"
                name="bairro"
                type="text"
              />
            </div>
            <div>
              <label htmlFor="cidade">Cidade</label>
              <InputStyle 
                id="cidade" 
                type="text"
                name="cidade"
              />
            </div>
          </InputContainerExtended>
          <InputContainer>
            <div>
              <label htmlFor="ponto">Ponto de Referência</label>
              <InputStyle 
                id="ponto" 
                type="text"
                name="ponto"
              />
            </div>
          </InputContainer>
          <ButtonContainer>
            <ButtonStyle
              onClick={ () => {setCurrFormStep(0)} } 
              className="anterior"
              >Anterior
            </ButtonStyle>
            <ButtonStyle 
              onClick={ () => {dataRef()} } 
              >Próximo passo
            </ButtonStyle>
          </ButtonContainer>
        </FormContainer>
      </MainContainer>
    </Container>
  )
}

export default FormAddressInfo;

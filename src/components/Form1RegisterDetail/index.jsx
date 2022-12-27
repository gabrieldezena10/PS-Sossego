import { FileText, House, UserCircle } from "phosphor-react";
import React, { useContext, useRef } from "react";
import { multiStepContext } from "../../context/StepContext";
import { z } from 'zod'
import { Container, HeaderContent, MainContainer, HeaderSteps, FormContainer, InputStyle, ButtonStyle, InputContainer, ImagesContent } from "./styles";


function FormRegisterDetail() {

  const { setCurrFormStep, userData, setUserData } = useContext(multiStepContext);

  const nomeRef = useRef();
  const emailRef = useRef()

  const dataRef = () => {
    setUserData(
      {
        ...userData,
        nome: nomeRef.current.value,
        email: emailRef.current.value,
      }
    );
    setCurrFormStep(1);
  }

  // const validateSchema = z
  //   .object({
  //     name: z.string().min(2, "Insira um nome com pelo menos 2 caracteres"),
  //     email: z.string().email(),
  //     password: z.string().min(6, "Insira uma senha com pelo menos 6 dígitos"),
  //     confirmPassword: z.string().min(6, "A confirmação da senha deve possuir a mesma quantidade de caracteres que o campo da senha"),
  //   })
  //   .refine((data) => data.password === data.confirmPassword, {
  //     message: "Confirmação de senha não confere",
  //     path: ["confirmpassword"]
  //   });

  return(
    <Container>
      <MainContainer >
        <HeaderContent>
          <h1>Criação de usuário</h1>
          <HeaderSteps>
            <ImagesContent>
              <div>
                <UserCircle size={32} color="#5357B1" />
              </div>
              <li>Identificação de Usuário</li>
            </ImagesContent>
            <ImagesContent>
              <div>
                <House size={32} color="#8C98A9" />
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
              <label htmlFor="name">Nome</label>
              <InputStyle id="name" 
                name="name" 
                type='text'
                ref={nomeRef}
              />
            </div>
          </InputContainer>
          <InputContainer>
            <div>
              <label htmlFor="pass">Senha</label>
              <InputStyle 
                name="password"
                id="pass" 
                type='password'
              />
            </div>
            <div>
              <label htmlFor="pass-confirm">Confirmar Senha</label>
              <InputStyle 
                id="pass-confirm" 
                name="confirmPassword"
                type='password'
              />
            </div>
          </InputContainer>
          <InputContainer>
            <div>
              <label htmlFor="emailId">Email</label>
              <InputStyle 
              id="emailId" 
              type='email'
              ref={emailRef}
              />
            </div>
            <div>
              <label htmlFor="birthday">Data de Nascimento</label>
              <InputStyle 
              id="birthday"
              name="birthDate"
              mask="99/99/9999"
              />
            </div>
          </InputContainer>
        </FormContainer>
        <ButtonStyle 
          onClick={ () => dataRef() } 
          >Próximo passo
        </ButtonStyle>
      </MainContainer>
    </Container>
  )
}

export default FormRegisterDetail;

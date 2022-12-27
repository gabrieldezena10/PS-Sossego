import { FileText, House, UserCircle } from "phosphor-react";
import React, { useContext, useRef } from "react";
import { multiStepContext } from "../../context/StepContext";
import { Container, HeaderContent, MainContainer, HeaderSteps, FormContainer, InputStyle, ButtonStyle, InputContainer, ImagesContent, ButtonContainer } from "./styles";
import { useForm } from "react-hook-form";
import InputMask from "react-input-mask";


function FormRegisterDetail() {

  const { setCurrFormStep, setFormValues } = useContext(multiStepContext);
  const { handleSubmit, formState: { errors }, register, watch } = useForm({ mode: "all" });

  const nomeRef = useRef()

  const dataRef = (values) => {
    setFormValues(values)
    setCurrFormStep(1);
  }

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
        <FormContainer onSubmit={handleSubmit(dataRef)}>
          <InputContainer>
            <div>
              <label htmlFor="name">Nome</label>
              <InputStyle 
                id="name" 
                name="name" 
                type='text'
                required
                {...register("name", {
                  required: true,
                })}
              />
              {errors.name && (
                <p style={{ color: "red"}}>Digite seu nome</p>
              )}
            </div>
          </InputContainer>
          <InputContainer>
            <div>
              <label htmlFor="pass">Senha</label>
              <InputStyle 
                name="password"
                id="pass" 
                type='password'
                required
                {...register("password", {
                  required: true,
                  minLength: {
                    value: 6,
                    message: "Senha precisa ter no mínimo 6 dígitos"
                  }
                })}
              />
              {errors.password && (
                <p style={{ color: "red"}}>{errors.password.message}</p>
              )}
            </div>
            <div>
              <label htmlFor="pass-confirm">Confirmar Senha</label>
              <InputStyle 
                id="pass-confirm" 
                name="confirmPassword"
                type='password'
                required
                {...register("confirmPassword", {
                  required: true,
                  validate: (value) => {
                    if(watch('password') != value) return "Senhas incompatíveis"
                  }
                })}
              />
                {errors.confirmPassword && (
                <p style={{ color: "red"}}>{errors.confirmPassword.message}</p>
              )}
            </div>
          </InputContainer>
          <InputContainer>
            <div>
              <label htmlFor="emailId">Email</label>
              <InputStyle 
              id="emailId"
              name="email"
              type="email"
              required
              {...register("email", {
                required: true,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Email inválido"
                }
              })}
              />
              {errors.email && (
                <p style={{ color: "red"}}>{errors.email.message}</p>
              )}
            </div>
            <div>
              <label htmlFor="birthday">Data de Nascimento</label>
              <InputMask 
                mask="99/99/9999"
                className="inputStyle"
                id="birthday"
                name="birthDate"
                type="text"
                placeholder=""
                {...register("birthDate", {
                  required: "Data é necessária"
                })}
              />
              {errors.birthDate && (
                <p style={{ color: "red"}}>{errors.birthDate.message}</p>
              )}
            </div>
          </InputContainer>
          <ButtonContainer>
            <ButtonStyle 
              type='submit'
                >Próximo passo
            </ButtonStyle>
          </ButtonContainer>

        </FormContainer>
      </MainContainer>
    </Container>
  )
}

export default FormRegisterDetail;

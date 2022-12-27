import { FileText, House, UserCircle } from "phosphor-react";
import React, { useContext } from "react";
import { multiStepContext } from "../../context/StepContext";
import { ButtonContainer, ButtonStyle, Container, FormContainer, HeaderContent, HeaderSteps, ImagesContent, InputContainer, MainContainer } from './styles'
import { useForm } from "react-hook-form";

function FormPersonalText() {

  const { setCurrFormStep, submitData, setFormValues } = useContext(multiStepContext);
  const { handleSubmit, formState: { errors }, register, watch } = useForm({ mode: "all" });

  const submitForm = (values) => {
    setFormValues(values)
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
        <FormContainer onSubmit={handleSubmit(submitForm)}>
          <InputContainer>
            <div>
              <label htmlFor="about">Nos conte mais sobre você</label>
              <textarea 
              id="about"
              name="about"
              required
              {...register("about", {
                required: "Campo necessário",
                minLength: {
                  value: 50,
                  message: 'Necessário uma descrição de pelo menos 50 caracteres' 
                }
              })}
              />
              {errors.about && (
                <p style={{ color: "red"}}>{errors.about.message}</p>
              )}
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
            type="submit"
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

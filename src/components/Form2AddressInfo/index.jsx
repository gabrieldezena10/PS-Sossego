import { FileText, House, UserCircle } from "phosphor-react";
import React, { useContext } from "react";
import { multiStepContext } from "../../context/StepContext";
import { ButtonContainer, ButtonStyle, Container, FormContainer, HeaderContent, HeaderSteps, ImagesContent, InputContainer, InputContainerExtended, InputStyle, MainContainer } from './styles'
import { useForm } from "react-hook-form";
import InputMask from "react-input-mask";

function FormAddressInfo() {

  const { setCurrFormStep, setFormValues } = useContext(multiStepContext);
  const { handleSubmit, formState: { errors }, register, watch } = useForm({ mode: "all" });


  const dataRef = (values) => {
    setFormValues(values)
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
        <FormContainer onSubmit={handleSubmit(dataRef)}>
          <InputContainer>
            <div>
              <label htmlFor="cep">CEP</label>
              <InputMask 
                className="inputStyle"
                mask="99999-999"
                id="cep" 
                name="cep"
                required
                {...register("cep", {
                  required: true,
                  pattern: {
                    value: /^[0-9]{5}-[0-9]{3}$/,
                    message: "CEP inválido"
                  }
                })}
              />
              {errors.cep && (
                <p style={{ color: "red"}}>{errors.cep.message}</p>
              )}
            </div>
            <div>
              <label htmlFor="rua">Rua</label>
              <InputStyle
              id="rua" 
              type="text"
              name="rua"
              required
              {...register("rua", {
                required: "Campo necessário",
              })}
              />
              {errors.rua && (
                <p style={{ color: "red"}}>{errors.rua.message}</p>
              )}
            </div>
          </InputContainer>

          <InputContainerExtended>
            <div>
              <label htmlFor="num">Número</label>
              <InputStyle 
                id="num" 
                name="numero"
                type="number"
                required
                {...register("numero", {
                  required: "Campo necessário",
                })}
                />
                {errors.numero && (
                  <p style={{ color: "red"}}>{errors.numero.message}</p>
                )}
            </div>
            <div>
              <label htmlFor="bairro">Bairro</label>
              <InputStyle 
                id="bairro"
                name="bairro"
                type="text"
                required
                {...register("bairro", {
                  required: "Campo necessário",
                })}
                />
                {errors.bairro && (
                  <p style={{ color: "red"}}>{errors.bairro.message}</p>
                )}
            </div>
            <div>
              <label htmlFor="cidade">Cidade</label>
              <InputStyle 
                id="cidade" 
                type="text"
                name="cidade"
                required
                {...register("cidade", {
                  required: "Campo necessário",
                })}
                />
                {errors.cidade && (
                  <p style={{ color: "red"}}>{errors.cidade.message}</p>
                )}
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
              type='submit'
                >Próximo passo
            </ButtonStyle>
          </ButtonContainer>
        </FormContainer>
      </MainContainer>
    </Container>
  )
}

export default FormAddressInfo;

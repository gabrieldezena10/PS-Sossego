import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const MainContainer = styled.section`
  width: 60%;
  height: 46rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

export const HeaderContent = styled.header`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 2.5rem;
  padding: 3rem;

  & ul{
    display: flex;
    justify-content: space-around;
  }

  & h1{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 54px;
  }
`;

export const HeaderSteps = styled.ul`
  display: flex;
  list-style-type: none;
  justify-content: space-between;
`

export const ImagesContent = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  & div {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #F0F2F6;
    display: flex;
    align-items: center;
    justify-content: center;
    
  }
`

export const FormContainer = styled.form`
  display: grid;
  width: 100%;
  padding: 2rem 3rem 1rem;
  gap: 1rem;
`

export const InputContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;

  & div{

    & label {
      display: flex;
      margin: 0.7rem 0;
    }
    & input{
      width: 90%;
    }
    & input[name=ponto]{
      width: 190%;
    }
  }
`

export const InputContainerExtended = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 2fr;
  grid-template-rows: auto;

    & label {
      display: flex;
      margin: 0.7rem 0;
    }
    & input[name=numero]{
      width: 90%;
    }
    & input[name=bairro]{
      width: 80%;
    }
    & input[name=cidade]{
      width: 90%;
    }
`

export const InputStyle = styled.input`
  background: #F0F2F6;
  border-radius: 4px;
  height: 44px;
  border: none;
  text-align: right;
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 0 -3rem 0 0;

  &  .anterior { 
    background-color: #8C98A9;
  }
`

export const ButtonStyle = styled.button`
  display: flex;
  width: 12rem;
  align-self: flex-end;
  justify-content: center;
  align-items: center;
  background:#5357B1;
  border: none;
  border-radius: 4px;
  height: 54px;
  color: #FFFFFF;
  padding: 1rem;
  margin: 3rem 3rem 0 0;
`

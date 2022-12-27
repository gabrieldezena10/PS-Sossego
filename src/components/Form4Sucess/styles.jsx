import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const MainContainer = styled.section`
  width: 30%;
  height: 46rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2rem;

  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

export const HeaderContent = styled.header`
  padding: 3rem 0 0;
  & h1 {

    font-family: Poppins;
    font-size: 36px;
    font-weight: 500;
    line-height: 54px;
    letter-spacing: 0em;
  }
`

export const FormContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 80%;
`
export const ItemsContainerExtended = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: auto;
    padding: 1rem 0;
    gap: 0.5rem;
    
    & span {
      margin: 0.7rem 0;
      font-size: 16px;
      line-height: 24px;
      color: #8C98A9;
    }
    & p{
      width: 90%;
      font-weight: 400;
      font-size: 24px;
      line-height: 36px;
    }
`

export const ItemsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    
    & span {
      display: flex;
      margin: 0.7rem 0;
      font-size: 16px;
      line-height: 24px;
      color: #8C98A9;
    }
    & p{
      width: 90%;
      font-weight: 400;
      font-size: 24px;
      line-height: 36px;
    }
`

export const ButtonStyle = styled.button`
  display: flex;
  width: 80%;
  align-self: center;
  justify-content: center;
  align-items: center;
  background:#5357B1;
  border: none;
  border-radius: 4px;
  height: 54px;
  color: #FFFFFF;
  padding: 1rem;
  margin: 5rem ;
`
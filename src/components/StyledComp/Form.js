import styled from "styled-components";

const AddScoreForm = styled.form`
  width: auto;
  display: flex;
  flex-direction: column;
  height: 14rem;
  padding: 1.1rem;
`

const ScoreNameInput = styled.input`
    width: 100%;
    height: 3rem;
    margin-top: 1rem;
    border-radius: .5rem;
    padding: 1rem;
    font-size: 1.2rem;
    border: none;
    background-color: rgb(229, 229, 229);
    &:focus {
        border: none;
    }
`

export {AddScoreForm, ScoreNameInput}
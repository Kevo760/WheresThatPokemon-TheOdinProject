import styled from "styled-components";

const AddScoreForm = styled.form`
  width: auto;
  display: flex;
  flex-direction: column;
  height: 13rem;
  padding: 1.5rem;
`

const ScoreNameInput = styled.input`
    width: 100%;
    margin-top: 1rem;
    height: 3rem;
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
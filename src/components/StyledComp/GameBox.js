import styled from "styled-components";

const GameBox = styled.div`
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 23rem;
    height: 23rem;
    padding: 2rem;
    color: rgb(20, 33, 61);
    background-color: rgb(255, 255, 255);
    border-radius: .5rem;
    text-align: center;
    box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
`

const ScoreBox = styled(GameBox)`
    width: 23rem;
    height: fit-content;
    overflow: hidden;
    padding: 0;
    gap: 0;
`

const ScoreBoxSections = styled.div`
    width: 100%;
    height: 3rem;
    display: grid;
    grid-template-columns: 1.5fr .5fr;
    border-bottom: 1px solid rgb(229, 229, 229);
    padding: 1rem ;
    text-align: left;
    & div:last-child {
    border-bottom: none;
  }
    &:hover {
    background-color: rgb(229, 229, 229);
  }
`

const ScoreBoxHeadSection = styled(ScoreBoxSections)`
    background-color: rgb(252, 163, 17);
    color: white;
    &:hover {
    background-color: rgb(252, 163, 17);
  }
`

const ScoreBoxLoading = styled(ScoreBoxSections)`
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: white;
  }
`

const AddScoreBoxHead = styled(ScoreBoxSections)`
  background-color: rgb(252, 163, 17);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: rgb(252, 163, 17);
  }
`

const MessageBox = styled.div`
  width: 14rem;
  height: 3rem;
  position: fixed;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: .5rem;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
`

const FoundMessageBox = styled(MessageBox)`
  background-color: green;
`

const WrongMessageBox = styled(MessageBox)`
  background-color: Tomato;
`







export {GameBox, ScoreBox, ScoreBoxSections, ScoreBoxHeadSection, ScoreBoxLoading, AddScoreBoxHead, WrongMessageBox, FoundMessageBox}
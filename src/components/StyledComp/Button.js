import styled from "styled-components";

const Button = styled.button`
    
    padding: 1rem;
    font-family: inherit;
    border-radius: 0.5rem;
    border: none;
    font-weight: bold;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    cursor: pointer;
`


const StartButton = styled(Button)`
    color: rgb(255, 255, 255);
    background-color: rgb(252, 163, 17);
    font-size: 1.2rem;
    padding: 1rem 2rem;
    margin-top: auto;
    &:hover {
        background-color: rgb(20, 33, 61);
    };
    &:active {
        background-color: rgb(252, 163, 17);
    };
`

const SubmitScoreBtn = styled(Button)`
    padding: 0;
    height: 3rem;
    width: 100%;
    margin-bottom: auto;
    margin-top: .5rem;
    font-size: 1.2rem;
    background-color: rgb(252, 163, 17);
    color: white;
    &:hover {
        background-color: rgb(20, 33, 61);
    };
    &:active {
        background-color: rgb(252, 163, 17);
    };
    &:disabled {
        background-color: rgb(229, 229, 229);
    }
`

const HeaderBtn = styled(Button)`
    background-color: rgb(20, 33, 61);
    color: white;
    margin-left: auto;
    font-weight: 400;
    width: 6,2rem;
    padding: .8rem;
    box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
    &:hover {
        background-color: rgb(252, 163, 17);
    };
    &:active {
        background-color: rgb(20, 33, 61);
        color: white;
    };
`

export {Button, StartButton, SubmitScoreBtn, HeaderBtn}
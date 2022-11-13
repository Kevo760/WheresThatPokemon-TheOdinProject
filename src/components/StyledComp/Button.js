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
    &:hover {
        background-color: rgb(20, 33, 61);
    };
    &:active {
        background-color: rgb(252, 163, 17);
    };
`

export {Button, StartButton}
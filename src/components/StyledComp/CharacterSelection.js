import styled from "styled-components";

const CharacterSelectionBox = styled.div`
    height: fit-content;
    width: 9rem;
    background-color: rgb(20, 33, 61);
    color: white;
    border-radius: .2rem;
    overflow: auto;
    border: 1px solid black;
    position: absolute;
    translate: ${props => props.xInput || '0px' } ${props => props.yInput || '0px'};
`

const SelectCharacter = styled.div`
    width: 100%;
    height: 2.5rem;
    display: flex;
    padding: .5rem;
    align-items: center;
    overflow: hidden;
    flex-direction: row;
    justify-content: space-between;
    &:not(:last-of-type) {
        border-bottom: black .1rem solid;
    };
    &:hover {
        background-color: rgb(252, 163, 17);
        cursor: pointer;
    }
`

const CharacterBoxImg = styled.img`
    width: 60%;
`



export {CharacterSelectionBox, SelectCharacter, CharacterBoxImg}
import styled from "styled-components";

const CharactersBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`

const CharaterProfile = styled.div`
    display: flex;
    flex-direction: column;
`

const CharaterLeftImg = styled.img`
    width: 4rem;
    margin: 0;
    padding: 0;
    opacity: ${props => props.found ? '50%' : '100%'};
`

export {CharactersBox, CharaterProfile, CharaterLeftImg}
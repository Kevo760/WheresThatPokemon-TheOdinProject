import styled from "styled-components"

const Header = styled.header`
    position: fixed;
    display: flex;
    flex-direction: row;
    align-items: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 4.5rem;
    color: rgb(20, 33, 61);
    background-color: rgb(255, 255, 255);
    padding: 1rem .5rem;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    z-index: 2;
`

export default Header
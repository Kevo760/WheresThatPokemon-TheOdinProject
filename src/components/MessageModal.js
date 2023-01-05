import React from 'react'
import { FoundMessageBox, WrongMessageBox} from './StyledComp/GameBox'

function FoundMessage() {
  return (
    <FoundMessageBox>
        <span>You found the pokemon!</span>
    </FoundMessageBox>
  )
}

function WrongMessage() {
    return (
    <WrongMessageBox>
        <span>Wrong Pokemon.</span>
    </WrongMessageBox>
    )
}

export {FoundMessage, WrongMessage}
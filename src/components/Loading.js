import React from 'react'
import { LoadingBox } from './StyledComp/LoadingBox'
import LoadingImg from './StyledComp/LoadingImg'
import loading from '../images/loading.gif'

function Loading() {
  return (
    <LoadingBox>
        <LoadingImg src={loading}/>
        <b>Loading...</b>
    </LoadingBox>
  )
}

export default Loading
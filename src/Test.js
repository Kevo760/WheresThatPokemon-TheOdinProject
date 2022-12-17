import React, { useEffect, useState } from 'react'
import { getDocs, serverTimestamp, updateDoc, addDoc, doc } from 'firebase/firestore'
import { db } from './lib/init-firebase'

function Test() {

    const timeRef = doc(db, 'Time', 'startTime')
    const time = new Date

    const seconds = Math.floor(time.getTime() / 1000)

    console.log(seconds)


  return (
    <div>

    </div>
  )
}

export default Test
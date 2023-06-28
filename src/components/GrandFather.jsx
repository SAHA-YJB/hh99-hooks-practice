import React from 'react'
import Father from './Father'
import { FamilyContext } from '../context/FamilyContext'

//gf가 차일드한테 어떤 정보를 알려주고 차일드가 출력하도록
function GrandFather() {
  const houseName = 'sparta'
  const poketMoeny = 10000

  return (
    <FamilyContext.Provider value={{
      houseName,
      poketMoeny
    }}>
      <Father/>
    </FamilyContext.Provider>
   
  )
}

export default GrandFather
import React from 'react'
import { Contacts } from './Contacts'
import Experience from './Experience'
import PersonalInfo from './PersonalInfo'

const UserCv = () => {
  return (
    <div>
      <PersonalInfo/>
      <Experience/>
      <Contacts/>
    </div>
  )
}

export default UserCv

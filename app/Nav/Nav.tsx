import React from 'react'
import SignIn from '../sign-up/signIn'
import SignUp from '../sign-up/signUp'

const Nav = () => {
  return (
    <div className='home_style'>
        <h2 >Welcome To AASJAS</h2>
        <SignIn />
        <SignUp/>
        </div>
  )
}

export default Nav
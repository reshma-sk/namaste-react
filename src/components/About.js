import React from 'react'
import User from './User'
import UserClass from './UserClass'


function About() {
  return (
    <div>   
        <h1>About</h1>
        <h4>This is Namaste React web series</h4>
        <User name = {"Reshma"} location = {"Dublin"}/>
        <UserClass name = {"Reshma"}/>
    </div>
  )
}

export default About
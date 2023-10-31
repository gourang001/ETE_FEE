import React from 'react'

import Main from './Main'
import Courses from './Courses'
import Coursesno from './Coursesno'
import Navbar from './Navbar'


const HomePage = (props) => {
  return (
    <>
      <Navbar login={props.login} logout={props.logout} bool={true}/>
      <Main/>
      <Courses/>
      <Coursesno/>

    </>
  )
}

export default HomePage
import React from 'react'
import { NavLink } from 'react-router-dom'
import "../../App.css"

const SideNav = () => {
  return (
    <div className='bg-violet-100 p-7 flex flex-col justify-center gap-10 h-screen'>
        <NavLink to="/"><p className='text-xl font-bold'>Contacts</p></NavLink>
        <NavLink to="/dashboard"><p className='text-xl font-bold'>Maps and Charts</p></NavLink>

        <p className='text-xl font-bold'>SideBar</p>
    </div>
  )
}

export default SideNav
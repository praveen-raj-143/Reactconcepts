import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='navbar'>
        <div><NavLink to='/' className='logo' ><h1 >REACT CONCEPTS </h1></NavLink></div>
        <div className='navitems'>
            <NavLink to='/' className={({isActive})=>(isActive ? 'active-class' : 'notactive-class')}><h2 className='navitemschild'>HOME</h2></NavLink>
            <NavLink to='/hooks' className={({isActive})=>(isActive ? 'active-class' : 'notactive-class')}><h2 className='navitemschild'>HOOKS</h2></NavLink>
            <NavLink to='/redux' className={({isActive})=>(isActive ? 'active-class' : 'notactive-class')}><h2 className='navitemschild'>REDUX</h2></NavLink>
            <NavLink to='/datatransfer' className={({isActive})=>(isActive ? 'active-class' : 'notactive-class')}><h2 className='navitemschild'>DATA TRANSFER</h2></NavLink>
            <NavLink to='/components' className={({isActive})=>(isActive ? 'active-class' : 'notactive-class')}><h2 className='navitemschild'>COMPONENTS</h2></NavLink>
        </div>
    </div>
  )
}

export default Navbar
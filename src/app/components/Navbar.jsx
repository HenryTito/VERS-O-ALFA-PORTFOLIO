import React from 'react'
import Link from 'next/link'
import NavLink from './NavLink'

const navLinks = [
    {
        title:"Sobre",
        path:"#about"
    },
    {
        title:"Projetos",
        path:"#projects"
        
    },
    {
        title:"LinkedIn",
        path:"https://www.linkedin.com/in/henry-tito-989b4b354/"
    }
   

]

const Navbar = () => {
  return (
    <nav className='border-b border-white top-0 left-0 right-0 z-10 '>
        <div className='flex flex-wrap items-center justify-end mx-auto p-8'>
            
            <div className='menu hidden md:block md:w-auto' id="navbar">
                <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
                    {
                        navLinks.map((link, index) =>(
                        <li key = {index}>
                            <NavLink href={link.path} title={link.title} />
                        </li>
                        ))
                    }
                </ul>
            </div>
            </div>
        </nav>
  )
}

export default Navbar
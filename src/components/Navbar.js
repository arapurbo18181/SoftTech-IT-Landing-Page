import React from 'react'
import {HashLink as  Link } from 'react-router-hash-link'

const nav_menu = [
    {
        name: "Home",
        link: ""
    },
    {
        name: "Websites",
        link: "websites"
    },
    {
        name: "Facebook Pages",
        link: "pages"
    },
    {
        name: "Facebook Groups",
        link: "groups"
    }
]

const Navbar = () => {
  return (
    <section className='flex justify-between items-center py-6 px-10 sticky top-0 right-0 left-0 bg-white shadow-md z-10'>
        <div>
            <img src='logo.png' alt='SoftTech-IT Logo' />
        </div>
        <ul className="flex justify-between space-x-12">
        {nav_menu.map((item) => (
            <li
                key={item.name}
                className="text-xl font-semibold text-gray-700 transition-all hover:-translate-y-1 hover:text-sky-500 hover:underline hover:underline-offset-[10px] cursor-pointer"
            >
                <Link to={`#${item.link}`} smooth duration={500} >{item.name}</Link>
            </li>
        ))}
    </ul>
    </section>
  )
}

export default Navbar
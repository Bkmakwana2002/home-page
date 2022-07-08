import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { Link } from 'react-router-dom';

const Navbar = () => {

  let Links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/" },
    { name: "Authors Center", link: "/" },
    { name: "Programme", link: "/" },
    { name: "Important Dates", link: "/" },
    { name: "Registration", link: "/" },
    { name: "Practical Info", link: "/" },
    { name: "Contact Us", link: "/" }

  ];
  let [open, setOpen] = useState(false);

  return (
    <div className='shadow-md w-full fixed top-0 left-0 z-20'>
      <div className='md:flex items-center justify-between bg-blue-500 py-4 md:px-10 px-7'>
        <div className='font-bold text-4xl cursor-pointer flex items-center font-[Poppins] 
       text-white'>
          IIT Ropar
        </div>

        <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer lg:hidden'>
          <GiHamburgerMenu name={open ? 'close' : 'menu'} className='text-white'></GiHamburgerMenu>
        </div>

        <ul className={`lg:flex lg:items-center lg:pb-0 pb-12 absolute lg:static bg-blue-500 lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ' : 'top-[-490px]'}`}>
          {
            Links.map((link) => (
              <li key={link.name} className='lg:ml-8 text-xl lg:my-0 my-7'>
                <Link to={link.link} className='text-2xl hover:border-b-2 hover:border-yellow-200 text-white hover:text-yellow-200 duration-500'>{link.name}</Link>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default Navbar
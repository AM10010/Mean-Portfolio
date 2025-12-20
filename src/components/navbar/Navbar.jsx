import React, { useState } from 'react'
import { Link } from "react-scroll";
import {logo} from "../../assets/index"
import { navLinksdata } from '../../constants';

const Navbar = () => {
  const [showMenu, setShowMenu]=useState(false)
  return (
    <div className="w-full h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600">

<div className='flex justify-between items-center gap-4 ml-4'>
  <div className="w-[80px] h-[80px] rounded-full overflow-hidden flex items-center justify-center">
  <img
    src={logo}
    alt="logo"
    className="w-full h-full object-contain"
  />
</div>
  <h2 className="text-2xl font-bold">AM</h2>
  </div>



      <div>
        <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
              key={_id}
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
        <span
          onClick={() => setShowMenu(!showMenu)}
          className="text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer"
        >
          
        </span>
      </div>
    </div>
  );
}

export default Navbar
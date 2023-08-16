import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import toggle from './../../assets/next.png';
import startLogo from './../../assets/home.svg'
import channelsLogo from './../../assets/hashtag.svg'


const Header = () => {
    const [open, setOpen] = useState(true);
    return (
        <div className={`${open ? 'w-96' : 'w-32'} px-6 duration-300 pt-8 h-screen bg-zinc-100 relative`}>
            <img src={toggle} onClick={() => setOpen(!open)} className={`absolute cursor-pointer -right-3 top-9 w-7 h-7 rounded-full text-cyan-500 ${!open && 'rotate-180'}`} />
            <h1 className='text-center font-bold text-xl'>Chatsmart.</h1>
            <Link className='w-60 h-12' to="/start">
                <div className={`flex gap-x-4 border-2 px-6 py-3 rounded-lg hover:bg-[#F5F5EA] ${!open && 'justify-center'}`}>
                    <img src={startLogo} alt="" />
                    <p className={`font-semibold origin-left duration-300 ${!open && 'hidden'} `}>Start</p>
                </div>
            </Link>
            <Link to="/channels">
                <div className='flex gap-x-4 pl-6 items-center border-2'>
                    <img src={channelsLogo} alt="" />
                    <h2 className={`text-xl origin-left duration-300 ${!open && 'hidden'} `}>Channels</h2>
                </div>
            </Link>
            <Link to="/automations">
                <div className='flex gap-x-4 pl-6 items-center border-2'>
                    <img src={startLogo} alt="" />
                    <h2 className={`text-xl origin-left duration-300 ${!open && 'hidden'} `}>Automations</h2>
                </div>
            </Link>
            <Link to="/conversations">
                <div className='flex gap-x-4 pl-6 items-center border-2'>
                    <img src={startLogo} alt="" />
                    <h2 className={`text-xl origin-left duration-300 ${!open && 'hidden'} `}>Convarsations</h2>
                </div>
            </Link>
            <Link to="/statistics">
                <div className='flex gap-x-4 pl-6 items-center border-2'>
                    <img src={startLogo} alt="" />
                    <h2 className={`text-xl origin-left duration-300 ${!open && 'hidden'} `}>Statistics</h2>
                </div>
            </Link>
            <Link to="/settings">
                <div className='flex gap-x-4 pl-6 items-center border-2'>
                    <img src={startLogo} alt="" />
                    <h2 className={`text-xl origin-left duration-300 ${!open && 'hidden'} `}>Settings</h2>
                </div>
            </Link>
        </div>

    );
};

export default Header;




{/* <div className='pt-6'>
    <NavLink to='/' className={({ isActive }) => isActive ? "active" : ""}> Home </NavLink>
    <NavLink to='/login' className={({ isActive }) => isActive ? "active" : ""}> Login </NavLink>
    <NavLink to='/signup' className={({ isActive }) => isActive ? "active" : ""}> Signup </NavLink>
</div> */}
import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className='flex devide-x'>
            <Header></Header>
            <div className='w-full mt-96'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Main;
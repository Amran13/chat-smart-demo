import React from 'react';
import keyImg from './../../assets/key.svg';
import smsImg from './../../assets/sms.svg'
import { Link } from 'react-router-dom';

const Login = () => {

    return (
        <>
            <div className="hero min-h-screen w-92">
                <div className="card flex-shrink-0 w-full max-w-md">
                    <form className="card-body">
                        <h2 className='font-semibold text-3xl'>chatsmart.</h2>
                        <h1 className='font-semibold text-3xl mt-14'>Hey, Hello👋</h1>
                        <p className='text-[#656565] font-medium leading-7 mt-3'>Enter the information you entered while Registering.</p>
                        <div>
                            <label htmlFor="email" className="block text-md text-left my-3 font-semibold">
                                Email
                            </label>
                            <div className="relative">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                    <img src={keyImg} alt="" />
                                </span>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="pl-10 p-2 w-full rounded-md input placeholder:text-[#656565] text-sm bg-[#F0F0F2]"
                                    placeholder="Type your Email"
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-md text-left my-3 font-semibold">
                                Password
                            </label>
                            <div className="relative">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                    <img src={smsImg} alt="" />
                                </span>

                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    className="pl-10 p-2 w-full rounded-md input placeholder:text-[#656565] text-sm bg-[#F0F0F2]"
                                    placeholder="Type your Password"
                                    required
                                />
                            </div>
                        </div>
                        <div className="flex items-center my-2 ml-2">
                            <input
                                type="checkbox"
                                id="rememberMe"
                                name="rememberMe"
                                className="mr-2 border-gray-300 w-6 h-4"
                            />
                            <label htmlFor="rememberMe" className="text-sm text-gray-700 font-medium">
                                Remember me
                            </label>
                        </div>
                        <div className="form-control">
                            <button type='submit' className="btn bg-[#87FE71] hover:bg-[#87FE71] text-sm font-semibold normal-case">Login</button>
                        </div>
                    </form>
                    <p>I dont have any account!<Link className='ml-1 underline' to="/signup">SignUp</Link></p>
                </div>
            </div>
        </>
    );
};

export default Login;
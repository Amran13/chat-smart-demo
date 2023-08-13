import React from 'react';
import key from './../../assets/key.svg';

const Login = () => {
    return (
        <>
            <div className="hero min-h-screen">
                <div className="card flex-shrink-0 w-full max-w-sm">
                    <form className="card-body">
                        <h2 className='font-semibold text-3xl'>chatsmart.</h2>
                        <h1 className='font-semibold text-3xl mt-14'>Hey, Hello👋</h1>
                        <p className='text-[#656565] font-medium leading-7 mt-3'>Inter the information you entered while Registering.</p>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Type your Email"
                                className="input placeholder:text-[#656565] text-sm bg-[#F0F0F2]"
                                required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium">Password</span>
                            </label>
                            <input
                                type="password"
                                id='password'
                                name='password'
                                placeholder="Type your Password"
                                className="input placeholder:text-[#656565] text-sm bg-[#F0F0F2]"
                                required />
                        </div>
                        <div className="flex items-center my-2">
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
                </div>
            </div>
        </>
    );
};

export default Login;
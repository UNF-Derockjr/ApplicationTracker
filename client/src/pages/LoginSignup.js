import React from "react";
import { useNavigate } from "react-router-dom";
const LoginSignup = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate("/app");
    };
    return (
        <div className="relative font-lexend flex items-center justify-center bg-slate-800 w-screen h-screen">
            <div className="relative w-2/6 h-3/4 text-white rounded-s-[100px] bg-slate-500 flex flex-col items-center justify-center px-32" id="login">
                <p className="mb-20 ml-10 text-5xl w-96">Welcome back</p>
                <div className="bg-slate-600 w-96 h-1/2 p-10 rounded-3xl flex items-left justify-evenly flex-col">
                    <label>Email: </label>
                    <input className="my-2 mb-7 bg-slate-700 rounded-lg border-2 border-slate-500 focus:border-slate-300 focus:outline-none shadow-md" />
                    <label>Password:</label>
                    <input className="mt-2 mb-10 bg-slate-700 rounded-lg border-2 border-slate-500 focus:border-slate-300 focus:outline-none shadow-md" />
                    <button className="bg-slate-500 w-24 h-10 rounded-lg self-center" onClick={handleLogin}>Login</button>
                </div>
                {/* <div class="loginDim"className="absolute inset-0 bg-black opacity-75 pointer-events-none rounded-s-[100px]"></div> */}
            </div>

            <div className="relative w-2/6 h-3/4 text-white rounded-e-[100px] bg-slate-700 flex flex-col items-center justify-center px-32" id="signup">
                <p className="mb-10 ml-10 text-5xl w-96">Create account</p>
                <div className="bg-slate-600 w-96 h-3/4 p-10 rounded-3xl flex items-left justify-evenly flex-col">
                    <label>Username: </label>
                    <input className="my-2 mb-7 bg-slate-700 rounded-lg border-2 border-slate-500 focus:border-slate-300 focus:outline-none shadow-md" />
                    <label>Email: </label>
                    <input className="my-2 mb-7 bg-slate-700 rounded-lg border-2 border-slate-500 focus:border-slate-300 focus:outline-none shadow-md" />
                    <label>Password:</label>
                    <input className="mt-2 mb-10 bg-slate-700 rounded-lg border-2 border-slate-500 focus:border-slate-300 focus:outline-none shadow-md" />
                    <label>Confirm Password:</label>
                    <input className="mt-2 mb-10 bg-slate-700 rounded-lg border-2 border-slate-500 focus:border-slate-300 focus:outline-none shadow-md" />
                    <button className="bg-slate-500 w-24 h-10 rounded-lg self-center" onClick={handleLogin}>Login</button>
                </div>
                {/* <div class="signupDim" className="absolute inset-0 bg-black opacity-50 rounded-e-[100px]" onClick=""></div> */}
            </div>

        </div>
    );
}

export default LoginSignup;
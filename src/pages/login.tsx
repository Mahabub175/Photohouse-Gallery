import React, { useState } from 'react';
import CustomInput from '../components/UI/CustomInput';

const Login = () => {
    const [loading, setLoading] = useState(false)
    const handleSubmit = (e: any) => {
        e.preventDefault()
    }
    const handleChange = (e: any) => {
        console.log(e.target.value)
    }
    return (
        <main className=" py-12 min-h-[100vh] px-[10%] text-xl">
            <form onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 md:gap-6 gap-2">
                    <CustomInput
                        type="email"
                        placeholder=""
                        label="Email"
                        name="email"
                        onChange={handleChange}
                    />
                    <CustomInput
                        type="password"
                        placeholder=""
                        label="Password"
                        name="password"
                        onChange={handleChange}
                    />
                </div>
                <div className="flex justify-center mt-5">
                    <button type="submit" className="btn-blue px-12 rounded-md " disabled={loading}>
                        {loading ? <span className="animate-pulse">Loading...</span> : "Submit"}
                    </button>
                </div>
            </form>
        </main>
    );
};

export default Login;
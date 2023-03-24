import { useRouter } from 'next/router';
import React, { useState } from 'react';
import CustomInput from '../components/UI/CustomInput';

const Login = () => {
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    // const [Email, setEmail] = useState("photohouseMagazine2023@gmail.com")
    // const [Pass, setPass] = useState("&3Yev7jUcEtK8g#37l8l")
    const [Email, setEmail] = useState("")
    const [Pass, setPass] = useState("")
    const handleSubmit = (e: any) => {
        e.preventDefault()
        if (["ThomasPagel", "SabbirAshraf"].includes(Email.trim()) && Pass === "photohousemagazine22@gofc") {
            localStorage.setItem("isAshrafPagel", JSON.stringify(true))
            router.push("/dashboard")
        } else {
            alert("Wrong user credential!")
        }
    }
    const handleChange = (e: any) => {
        console.log(e.target.value)
    }
    return (
        <main className=" py-12 min-h-[100vh] px-[10%] text-xl">
            <form onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 md:gap-6 gap-2">
                    <CustomInput
                        type="text"
                        placeholder=""
                        value={Email}
                        label="Username"
                        name="email"
                        onChange={(e: any) => setEmail(e.target.value)}
                    />
                    <CustomInput
                        type="password"
                        placeholder=""
                        value={Pass}
                        label="Password"
                        name="password"
                        onChange={(e: any) => setPass(e.target.value)}
                    />
                </div>
                <div className="flex justify-center mt-5">
                    <button type="submit" className="btn-blue px-12 rounded-md " disabled={loading}>
                        {loading ? <span className="animate-pulse">Loading...</span> : "Login"}
                    </button>
                </div>
            </form>
        </main>
    );
};

export default Login;
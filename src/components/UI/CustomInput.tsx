import React from 'react';
import styles from "./Input.module.css"

const CustomInput = (props: any) => {
    const { type, name, value, label, placeholder, onChange, required } = props

    return (
        <div className="relative z-0 mb-6 w-full " >
            <input
                required={required}
                onChange={onChange}
                value={value}
                type={type}
                name={name}
                className="block py-2.5 px-0 w-full text-md  bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-cyan-400 peer"
                placeholder={placeholder}
            />
            <label
                htmlFor='Email'
                className="peer-focus:font-medium absolute text-sm text-gray-300 duration-300 transform -translate-y-6 scale-75 top-5 z-20 origin-[0] peer-focus:left-0 peer-focus:text-cyan-400  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 "
            >
                {label}
            </label>
        </div>
    );
};

export default CustomInput;
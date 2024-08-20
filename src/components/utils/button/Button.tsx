"use client"

import React from "react";

interface ButtonProps {
    type?: 'button' | 'submit' | 'reset' | undefined;
    isPrimary?: boolean;
    fullWidth: boolean;
    children?: React.ReactNode;
    onClick?: () => void;
    id?: string;
    disable?: boolean;
}

const Button: React.FC<ButtonProps> = ({ type = 'button', isPrimary = false, children, onClick, disable = false, fullWidth }) => {
    return (
        <button className={
            `${fullWidth && 'w-full'} ${isPrimary ? 'bg-blue-500 hover:bg-blue-700' : 'bg-gray-700 hover:bg-gray-800'} ${disable && 'cursor-not-allowed'} text-white  focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`
        }
            onClick={onClick} type={type} disabled={disable}
        >
            {children}
        </button>
    )
}

export default Button;
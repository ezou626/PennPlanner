'use client';
import React from "react";

type ButtonProps = {
    color: string;
    onClick: () => void;
    children: React.ReactNode;
};

const Button: React.FunctionComponent<ButtonProps> = ({ color, onClick, children }) => {
    let settings: string = 'text-md rounded px-2 py-2 text-white font-bold ';
    settings += `bg-${color}-500 hover:bg-${color}-700`
    return <button className={settings} onClick={onClick}>{children}</button>
}

export default Button;
'use client';

import React from "react";

type ButtonProps = {
    color: string;
    onClick: () => void;
    children: React.ReactNode;
  };

const Button: React.FunctionComponent<ButtonProps> = ({ color, onClick, children }) => {
    let settings: string = 'text-md rounded px-2 py-2 text-white font-bold ';
    switch (color) {
        case 'green':
            settings += 'bg-green-500 hover:bg-green-700';
            break;
        case 'red':
            settings += 'bg-red-500 hover:bg-red-700';
            break;
        default:
            settings += 'bg-blue-500 hover:bg-blue-700';
    }
    return <button className={settings} onClick={onClick}>{children}</button>
}

export default Button;
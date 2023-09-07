'use client';

import React from "react";

const buttonSettings = {
    'blue': 'bg-blue-500 hover:bg-blue-700',
    'green': 'bg-green-500 hover:bg-green-700',
    'red': 'bg-red-500 hover:bg-red-700'
}

type ButtonProps = {
    color: string;
    onClick: () => void;
    children: React.ReactNode;
  };

const Button: React.FunctionComponent<ButtonProps> = ({ color, onClick, children }) => {
    let settings: string = 'text-md rounded px-2 py-2 text-white font-bold ';
    switch (color) {
        case 'green':
            settings += buttonSettings.green;
            break;
        case 'red':
            settings += buttonSettings.red;
            break;
        default:
            settings += buttonSettings.blue;
    }
    return <button className={settings} onClick={onClick}>{children}</button>
}

export default Button;
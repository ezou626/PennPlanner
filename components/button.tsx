'use client';
import '../app/globals.css'
import React from 'react';

const colors = {
  'blue': 'bg-blue-500 hover:bg-blue-700',
  'red': 'bg-red-500 hover:bg-red-700',
  'green': 'bg-green-500 hover:bg-green-700'
}

type ButtonProps = {
  color: string;
  onClick: () => void;
  children: React.ReactNode;
};

const Button: React.FunctionComponent<ButtonProps> = 
  ({ color, onClick, children }: {color: string, onClick: () => void, children: React.ReactNode}) => {
  let settings = 'text-md rounded px-2 py-2 text-white font-bold '
  if (color in colors) {
    const castedColor = color as 'red' | 'blue' | 'green';
    settings += colors[castedColor];
    return <button className={settings} onClick={onClick}>
      {children}
      </button>;
  } else {
    settings += 'bg-yellow-500 hover:bg-yellow-700';
  }
  return <button className={settings} onClick={onClick}>
    {children}
    </button>;
}

export default Button;
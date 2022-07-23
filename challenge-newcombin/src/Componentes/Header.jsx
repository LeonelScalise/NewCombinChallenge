import React from 'react';
import { useNavigate } from "react-router-dom";

export function Header() {
    const navigate = useNavigate();

    const irAOtraPagina = () => {
        navigate("/OtherPage");
    };

    return (
        <div className='flex absolute top-0 justify-between h-16 w-full'>
            <button className='items-center bg-green-400 w-1/2 border-gray-500 border-r-2' onClick={() => navigate('/')}>
                Home
            </button>
            <button className='items-center bg-green-400 w-1/2' onClick={irAOtraPagina}>
                Other page
            </button>
        </div>
    );
}
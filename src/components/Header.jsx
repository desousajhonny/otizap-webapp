import React from 'react';
import logo from '../assets/logo.png';

const Header = () => {
    return (
        <header className="w-full absolute top-0 left-0 z-10 py-6">
            <div className="max-w-7xl mx-auto px-4 flex justify-center md:justify-between items-center">
                <img src={logo} alt="Otizap Logo" className="h-12 md:h-10" />
                <button className="hidden md:block bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors">
                    Testar por 14 dias grátis
                </button>
            </div>
        </header>
    );
};

export default Header;

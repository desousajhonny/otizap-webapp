import React from 'react';
import logo from '../assets/logo.png';

const Header = () => {
    return (
        <header className="w-full flex justify-center py-6 bg-transparent absolute top-0 left-0 z-10">
            <img src={logo} alt="Otizap Logo" className="h-16 md:h-24" />
        </header>
    );
};

export default Header;

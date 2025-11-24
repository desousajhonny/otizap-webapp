import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`w-full fixed top-0 left-0 z-50 py-4 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-black/40'}`}
        >
            <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
                <img
                    src={isScrolled ? '/logo_icon.png' : logo}
                    alt="Otizap Logo"
                    className={`transition-all duration-300 ${isScrolled ? 'h-10 w-10' : 'h-12 md:h-10'}`}
                />
                <button
                    className="px-4 py-2 md:px-6 font-medium text-white transition-transform hover:scale-105 text-sm md:text-base"
                    style={{
                        borderRadius: '100px',
                        border: '2px solid #84FE7B',
                        background: 'linear-gradient(81deg, rgba(62, 152, 1, 0.35) 23.07%, rgba(21, 50, 16, 0.35) 84.49%)'
                    }}
                >
                    <span className="md:hidden">
                        {isScrolled ? 'Testar grátis no meu negócio' : 'Teste Grátis'}
                    </span>
                    <span className="hidden md:inline">
                        {isScrolled ? 'Testar grátis no meu negócio' : 'Testar por 14 dias grátis'}
                    </span>
                </button>
            </div>
        </header>
    );
};

export default Header;

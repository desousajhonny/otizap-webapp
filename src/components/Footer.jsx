import React from 'react';
import { MessageCircle } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-50 py-12 px-6 border-t border-gray-100">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                    <h3 className="font-bold text-gray-900 text-xl mb-2">Otizap</h3>
                    <p className="text-gray-500 text-sm">© 2024 Otizap AI. Todos os direitos reservados.</p>
                </div>

                <div className="flex gap-6 text-sm text-gray-500">
                    <a href="#" className="hover:text-gray-900">Termos</a>
                    <a href="#" className="hover:text-gray-900">Privacidade</a>
                    <a href="#" className="hover:text-gray-900">Contato</a>
                </div>
            </div>

        </footer>
    );
};

export default Footer;

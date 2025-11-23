import React from 'react';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen bg-white text-gray-800 font-sans overflow-x-hidden">
            <main className="w-full relative bg-white shadow-sm min-h-screen flex flex-col">
                {children}
            </main>
        </div>
    );
};

export default Layout;

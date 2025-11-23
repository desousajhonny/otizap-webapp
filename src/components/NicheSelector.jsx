import React from 'react';
import { motion } from 'framer-motion';
import { niches } from '../data/niches';
import { Check } from 'lucide-react';

const NicheSelector = ({ currentNicheId, onSelectNiche }) => {
    // Filter out 'default' from the selection list
    const nicheList = Object.values(niches).filter(n => n.id !== 'default');

    return (
        <section id="niche-selector" className="py-16 px-6 bg-gray-50">
            <div className="max-w-3xl mx-auto text-center mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                    Qual é o seu negócio?
                </h2>
                <p className="text-gray-500">
                    Selecione para personalizar a experiência.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
                {nicheList.map((niche) => {
                    const Icon = niche.icon;
                    const isSelected = currentNicheId === niche.id;

                    return (
                        <motion.button
                            key={niche.id}
                            whileHover={{ y: -5 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => onSelectNiche(niche.id)}
                            className={`relative flex flex-col items-center p-6 rounded-2xl border-2 transition-all duration-300 ${isSelected
                                    ? 'border-primary bg-white shadow-lg ring-4 ring-primary/10'
                                    : 'border-transparent bg-white shadow-sm hover:border-gray-200'
                                }`}
                        >
                            {isSelected && (
                                <div className="absolute top-3 right-3 bg-primary text-white p-1 rounded-full">
                                    <Check size={12} />
                                </div>
                            )}

                            <div className={`p-4 rounded-full mb-4 ${isSelected ? 'bg-primary/10 text-primary' : 'bg-gray-100 text-gray-400'}`}>
                                <Icon size={32} />
                            </div>

                            <h3 className={`font-bold text-lg ${isSelected ? 'text-primary-dark' : 'text-gray-700'}`}>
                                {niche.name}
                            </h3>
                        </motion.button>
                    );
                })}
            </div>
        </section>
    );
};

export default NicheSelector;

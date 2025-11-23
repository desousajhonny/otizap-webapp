import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const FinalCTA = () => {
    return (
        <section className="py-24 px-6 bg-white text-center">
            <div className="max-w-2xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    A IA que trabalha enquanto você vende.
                </h2>
                <p className="text-lg text-gray-600 mb-10">
                    Teste grátis por 14 dias. Sem cartão de crédito.
                </p>

                <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full md:w-auto bg-gray-900 text-white font-bold py-4 px-8 rounded-full text-lg shadow-xl hover:bg-black transition-all flex items-center justify-center"
                    >
                        Começar agora
                        <ArrowRight className="ml-2" size={20} />
                    </motion.button>

                    <button className="text-gray-500 hover:text-gray-900 font-medium py-2 px-4">
                        Falar com especialista
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FinalCTA;

import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Bot, TrendingUp } from 'lucide-react';

const HowItWorks = ({ niche }) => {
    const steps = niche.howItWorks || [];

    return (
        <section className="py-20 px-6" style={{ backgroundColor: '#003A2C' }}>
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Como funciona?
                    </h2>
                    <p className="text-green-100">
                        Simples, rápido e automático.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="flex flex-col"
                        >
                            <h3 className="text-xl font-bold text-white mb-6 text-center">
                                {step.title}
                            </h3>

                            <div className="bg-gray-50 rounded-2xl border border-gray-100 p-4 flex flex-col space-y-4 shadow-sm h-fit">
                                {step.messages.map((msg, i) => (
                                    <div key={i} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                                        <div
                                            className={`max-w-[85%] p-3 rounded-xl text-sm ${msg.type === 'user'
                                                ? 'bg-white border border-gray-100 text-gray-600 rounded-tr-none'
                                                : 'bg-[#E3FFDD] border border-green-100 text-gray-800 rounded-tl-none'
                                                }`}
                                        >
                                            {msg.text}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
                <div className="mt-16 text-center">
                    <p className="text-xl text-white mb-8 font-medium">
                        Enquanto a Otizap agenda seus clientes, você foca no que importa.
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="font-bold py-4 px-8 text-lg shadow-lg shadow-black/20 transition-all text-white btn-shimmer"
                        style={{
                            borderRadius: '100px',
                            border: '2px solid #84FE7B',
                            background: 'linear-gradient(81deg, rgba(62, 152, 1, 0.35) 23.07%, rgba(21, 50, 16, 0.35) 84.49%)'
                        }}
                    >
                        Ativar meu assistente agora
                    </motion.button>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;

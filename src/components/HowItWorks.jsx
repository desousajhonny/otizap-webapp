import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Bot, TrendingUp } from 'lucide-react';

const HowItWorks = ({ niche }) => {
    const icons = [MessageSquare, Bot, TrendingUp];

    return (
        <section className="py-20 px-6 bg-white">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Como funciona?
                    </h2>
                    <p className="text-gray-500">
                        Simples, rápido e automático.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {niche.steps.map((step, index) => {
                        const Icon = icons[index];
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="flex flex-col items-center text-center p-6"
                            >
                                <div className="w-16 h-16 bg-[#E3FFDD] rounded-2xl flex items-center justify-center text-[#104F03] mb-6">
                                    <Icon size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    {step.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {step.desc}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;

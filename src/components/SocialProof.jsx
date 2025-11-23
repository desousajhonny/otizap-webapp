import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const SocialProof = ({ niche }) => {
    return (
        <section className="py-20 px-6 bg-gray-900 text-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
                <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-secondary rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-3xl mx-auto relative z-10 text-center">
                <div className="flex justify-center mb-8 text-yellow-400 space-x-1">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} size={24} fill="currentColor" />
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mb-10"
                >
                    <Quote size={48} className="text-gray-700 mx-auto mb-6 opacity-50" />
                    <h3 className="text-2xl md:text-4xl font-bold leading-tight mb-6">
                        "{niche.testimonial.quote}"
                    </h3>
                </motion.div>

                <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
                    <div className="text-center">
                        <p className="font-bold text-lg">{niche.testimonial.author}</p>
                        <p className="text-gray-400 text-sm">{niche.testimonial.role}</p>
                    </div>
                    <div className="hidden md:block w-px h-12 bg-gray-700"></div>
                    <div className="text-center">
                        <p className="font-bold text-3xl text-primary">{niche.testimonial.metric}</p>
                        <p className="text-gray-400 text-sm">Resultado comprovado</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SocialProof;

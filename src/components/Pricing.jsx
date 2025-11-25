import React from 'react';
import { Check } from 'lucide-react';

const Pricing = ({ niche }) => {
    const plans = niche.pricing || [];

    return (
        <section className="py-20 px-6 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Planos para {niche.name}
                    </h2>
                    <p className="text-gray-500">
                        Escolha o plano ideal para o seu negócio.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative p-8 rounded-3xl transition-all duration-300 flex flex-col h-full ${plan.highlight
                                ? 'bg-white shadow-2xl border-2 border-primary scale-105 z-10'
                                : 'bg-white shadow-sm border border-gray-100 hover:shadow-md'
                                }`}
                        >
                            {plan.highlight && (
                                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wide whitespace-nowrap">
                                    Recomendado
                                </div>
                            )}

                            <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>

                            <div className="mb-6">
                                <div className="flex items-baseline">
                                    <span className="text-4xl font-extrabold text-gray-900">{plan.price}</span>
                                    <span className="text-gray-500 ml-1 text-sm">{plan.period}</span>
                                </div>
                                <p className="text-xs text-green-600 font-medium mt-1">
                                    {plan.annualDiscount}
                                </p>
                                <p className="text-xs text-gray-400 mt-1">
                                    {plan.normalPrice}
                                </p>
                            </div>

                            <ul className="space-y-4 mb-8 flex-grow">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start text-gray-600 text-sm">
                                        <Check size={18} className="text-primary mr-2 flex-shrink-0 mt-0.5" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button
                                className="w-full py-3 px-6 font-bold transition-all mt-auto text-white btn-shimmer hover:scale-105"
                                style={{
                                    borderRadius: '100px',
                                    border: '2px solid #84FE7B',
                                    background: '#07654E',
                                    '--shimmer-delay': `${index * 0.5}s`
                                }}
                            >
                                {plan.buttonText}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;

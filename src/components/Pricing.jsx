import React from 'react';
import { Check } from 'lucide-react';

const Pricing = () => {
    const plans = [
        {
            name: 'Start',
            price: 'R$ 149',
            period: '/mês',
            features: ['1 número de WhatsApp', 'Atendimento automático', 'Agendamento básico'],
            highlight: false,
            buttonText: 'Começar Grátis'
        },
        {
            name: 'Grow',
            price: 'R$ 299',
            period: '/mês',
            features: ['2 números de WhatsApp', 'IA treinada no seu nicho', 'Integração com Agenda Google', 'Suporte prioritário'],
            highlight: true,
            buttonText: 'Testar Grow'
        },
        {
            name: 'Scale',
            price: 'R$ 499',
            period: '/mês',
            features: ['Números ilimitados', 'API aberta', 'Gerente de conta dedicado', 'Relatórios avançados'],
            highlight: false,
            buttonText: 'Falar com Vendas'
        }
    ];

    return (
        <section className="py-20 px-6 bg-gray-50">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Planos simples, sem surpresas.
                    </h2>
                    <p className="text-gray-500">
                        Comece grátis por 14 dias. Cancele quando quiser.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative p-8 rounded-3xl transition-all duration-300 ${plan.highlight
                                    ? 'bg-white shadow-2xl border-2 border-primary scale-105 z-10'
                                    : 'bg-white shadow-sm border border-gray-100 hover:shadow-md'
                                }`}
                        >
                            {plan.highlight && (
                                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wide">
                                    Recomendado
                                </div>
                            )}

                            <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                            <div className="flex items-baseline mb-6">
                                <span className="text-4xl font-extrabold text-gray-900">{plan.price}</span>
                                <span className="text-gray-500 ml-1">{plan.period}</span>
                            </div>

                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start text-gray-600 text-sm">
                                        <Check size={18} className="text-primary mr-2 flex-shrink-0" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button
                                className={`w-full py-3 px-6 rounded-xl font-bold transition-colors ${plan.highlight
                                        ? 'bg-primary hover:bg-primary-dark text-white shadow-lg shadow-primary/30'
                                        : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                                    }`}
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

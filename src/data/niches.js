import { Home, Scissors, Stethoscope, GraduationCap, ShoppingBag, Briefcase, MoreHorizontal } from 'lucide-react';

export const niches = {
    default: {
        id: 'default',
        name: 'Geral',
        icon: Briefcase,
        headline: 'A IA que responde seus clientes e vende pra você.',
        subhead: 'Converse, agende e organize tudo pelo WhatsApp.',
        heroImage: 'default_chat.png', // Placeholder
        steps: [
            { title: 'Cliente chama', desc: 'Seu cliente manda mensagem no WhatsApp.' },
            { title: 'IA responde', desc: 'A Otizap tira dúvidas e agenda horários.' },
            { title: 'Você lucra', desc: 'Receba o pedido ou agendamento pronto.' }
        ],
        howItWorks: [
            {
                title: "1. Cliente chama",
                messages: [
                    { type: 'user', text: "Olá, gostaria de saber mais sobre os serviços." },
                    { type: 'bot', text: "Olá! Claro, como posso ajudar você hoje? 😊" }
                ]
            },
            {
                title: "2. IA responde",
                messages: [
                    { type: 'user', text: "Quais são os horários de atendimento?" },
                    { type: 'bot', text: "Atendemos de segunda a sexta, das 9h às 18h. Quer agendar um horário?" }
                ]
            },
            {
                title: "3. Você lucra",
                messages: [
                    { type: 'bot', text: "Horário agendado com sucesso! Te esperamos na segunda às 10h. 😉" }
                ]
            }
        ],
        testimonial: {
            quote: "Fecho 2x mais vendas com a Otizap.",
            author: "Carlos M.",
            role: "Empreendedor",
            metric: "+1.200 conversas/mês"
        },
        pricing: [
            {
                name: "Inicial",
                price: "R$119",
                period: "/mês",
                annualDiscount: "pagando anualmente — 20% off",
                normalPrice: "ou R$149/mês (pagamento mensal)",
                features: ["Automação de respostas no WhatsApp", "Agendamentos automáticos", "Relatório semanal simplificado"],
                highlight: false,
                buttonText: "Testar Inicial"
            },
            {
                name: "Profissional",
                price: "R$239",
                period: "/mês",
                annualDiscount: "pagando anualmente — 20% off",
                normalPrice: "ou R$299/mês (pagamento mensal)",
                features: ["Tudo do Inicial", "IA adaptada ao negócio", "Integração Google Agenda", "Relatórios avançados", "Suporte prioritário"],
                highlight: true,
                buttonText: "Testar Profissional"
            },
            {
                name: "Avançado",
                price: "R$399",
                period: "/mês",
                annualDiscount: "pagando anualmente — 20% off",
                normalPrice: "ou R$499/mês (pagamento mensal)",
                features: ["Tudo do Profissional", "Dashboard inteligente", "Reengajamento automático", "Atendimento em equipe", "Suporte premium"],
                highlight: false,
                buttonText: "Testar Avançado"
            }
        ]
    },
    real_estate: {
        id: 'real_estate',
        name: 'Imobiliária',
        icon: Home,
        headline: 'Venda mais imóveis pelo WhatsApp',
        subhead: 'Agende visitas e tire dúvidas de inquilinos automaticamente.',
        heroImage: 'real_estate_chat.png',
        steps: [
            { title: 'Lead entra', desc: 'Interessado pergunta sobre um imóvel.' },
            { title: 'IA qualifica', desc: 'Otizap coleta dados e agenda a visita.' },
            { title: 'Visita feita', desc: 'Corretor recebe o agendamento pronto.' }
        ],
        howItWorks: [
            {
                title: "1. O cliente chama no WhatsApp",
                messages: [
                    { type: 'user', text: "Oi, vi um apartamento na Rua das Flores. Tá disponível?" },
                    { type: 'bot', text: "Olá! Esse imóvel está disponível sim 😊 Você procura pra comprar ou alugar?" }
                ]
            },
            {
                title: "2. A Otizap resolve em segundos",
                messages: [
                    { type: 'user', text: "Pra comprar." },
                    { type: 'bot', text: "Perfeito! Posso te mandar as fotos e agendar uma visita?" }
                ]
            },
            {
                title: "3. Você recebe o agendamento pronto",
                messages: [
                    { type: 'bot', text: "Visita confirmada! 🏡 Amanhã às 15h na Rua das Flores. Você receberá um lembrete automático 😉" }
                ]
            }
        ],
        testimonial: {
            quote: "Minha equipe não perde mais nenhum lead de portal.",
            author: "Ana Souza",
            role: "Corretora de Imóveis",
            metric: "+45 visitas agendadas/mês"
        },
        pricing: [
            {
                name: "Inicial",
                price: "R$119",
                period: "/mês",
                annualDiscount: "pagando anualmente — 20% off",
                normalPrice: "ou R$149/mês (pagamento mensal)",
                features: ["Resposta instantânea no WhatsApp", "Agendamento automático de visitas", "Relatório semanal simplificado"],
                highlight: false,
                buttonText: "Testar Inicial"
            },
            {
                name: "Profissional",
                price: "R$239",
                period: "/mês",
                annualDiscount: "pagando anualmente — 20% off",
                normalPrice: "ou R$299/mês (pagamento mensal)",
                features: ["Tudo do Inicial", "Listagem de imóveis com fotos e links", "Portfólio profissional integrado", "Segmentação de leads", "Relatório semanal avançado"],
                highlight: true,
                buttonText: "Testar Profissional"
            },
            {
                name: "Avançado",
                price: "R$399",
                period: "/mês",
                annualDiscount: "pagando anualmente — 20% off",
                normalPrice: "ou R$499/mês (pagamento mensal)",
                features: ["Tudo do Profissional", "Dashboard de resultados", "Adição de imóveis via WhatsApp", "Assistente de conversão inteligente", "Suporte prioritário"],
                highlight: false,
                buttonText: "Testar Avançado"
            }
        ]
    },
    beauty: {
        id: 'beauty',
        name: 'Salão & Beleza',
        icon: Scissors,
        headline: 'Nunca mais esqueça um cliente',
        subhead: 'Preencha sua agenda automaticamente enquanto você trabalha.',
        heroImage: 'beauty_chat.png',
        steps: [
            { title: 'Cliente pede', desc: 'Pergunta horários disponíveis.' },
            { title: 'IA agenda', desc: 'Otizap mostra a agenda e marca.' },
            { title: 'Salão cheio', desc: 'Você foca apenas em atender.' }
        ],
        howItWorks: [
            {
                title: "1. O cliente chama no WhatsApp",
                messages: [
                    { type: 'user', text: "Tem horário pra corte e barba hoje?" },
                    { type: 'bot', text: "Oi! Tenho horário livre às 16h e às 18h. Qual prefere? ✂️" }
                ]
            },
            {
                title: "2. A Otizap sugere horários e confirma",
                messages: [
                    { type: 'user', text: "Pode ser às 18h." },
                    { type: 'bot', text: "Combinado! Seu corte está agendado para hoje às 18h." }
                ]
            },
            {
                title: "3. Você recebe o agendamento pronto",
                messages: [
                    { type: 'bot', text: "Lembrete: Seu corte é daqui a 1 hora! Te esperamos. 💈" }
                ]
            }
        ],
        testimonial: {
            quote: "Reduzi as faltas em 80% com os lembretes automáticos.",
            author: "Juliana R.",
            role: "Dona de Salão",
            metric: "Agenda 100% preenchida"
        },
        pricing: [
            {
                name: "Inicial",
                price: "R$119",
                period: "/mês",
                annualDiscount: "pagando anualmente — 20% off",
                normalPrice: "ou R$149/mês (pagamento mensal)",
                features: ["Respostas automáticas no WhatsApp", "Confirmação e lembrete de horários", "Relatório semanal simplificado"],
                highlight: false,
                buttonText: "Testar Inicial"
            },
            {
                name: "Profissional",
                price: "R$239",
                period: "/mês",
                annualDiscount: "pagando anualmente — 20% off",
                normalPrice: "ou R$299/mês (pagamento mensal)",
                features: ["Tudo do Inicial", "IA treinada para salões", "Agenda inteligente integrada ao Google", "Segmentação de clientes", "Relatório semanal avançado"],
                highlight: true,
                buttonText: "Testar Profissional"
            },
            {
                name: "Avançado",
                price: "R$399",
                period: "/mês",
                annualDiscount: "pagando anualmente — 20% off",
                normalPrice: "ou R$499/mês (pagamento mensal)",
                features: ["Tudo do Profissional", "Dashboard de resultados", "Reativação automática de clientes", "Assistente de fidelização", "Suporte prioritário"],
                highlight: false,
                buttonText: "Testar Avançado"
            }
        ]
    },
    health: {
        id: 'health',
        name: 'Consultório',
        icon: Stethoscope,
        headline: 'Seu consultório no piloto automático',
        subhead: 'Confirmação de consultas e triagem inicial sem secretária.',
        heroImage: 'health_chat.png',
        steps: [
            { title: 'Paciente chama', desc: 'Busca marcar consulta ou retorno.' },
            { title: 'IA tria', desc: 'Coleta dados e verifica disponibilidade.' },
            { title: 'Agenda lotada', desc: 'Médico recebe o paciente confirmado.' }
        ],
        howItWorks: [
            {
                title: "1. O paciente chama no WhatsApp",
                messages: [
                    { type: 'user', text: "Olá, gostaria de marcar uma consulta com o Dr. Paulo." },
                    { type: 'bot', text: "Olá! É primeira vez ou retorno? 🩺" }
                ]
            },
            {
                title: "2. A Otizap organiza e confirma a consulta",
                messages: [
                    { type: 'user', text: "É retorno." },
                    { type: 'bot', text: "Certo. Temos vaga para quinta às 14h. Pode ser?" }
                ]
            },
            {
                title: "3. Você recebe o agendamento pronto",
                messages: [
                    { type: 'bot', text: "Agendado! Quinta-feira às 14h. Enviarei um lembrete no dia anterior. ✅" }
                ]
            }
        ],
        testimonial: {
            quote: "Meus pacientes adoram a rapidez no agendamento.",
            author: "Dr. Paulo",
            role: "Dentista",
            metric: "Zero atrasos na agenda"
        },
        pricing: [
            {
                name: "Inicial",
                price: "R$119",
                period: "/mês",
                annualDiscount: "pagando anualmente — 20% off",
                normalPrice: "ou R$149/mês (pagamento mensal)",
                features: ["Agendamento automático no WhatsApp", "Confirmação e lembrete de consultas", "Relatório semanal simplificado"],
                highlight: false,
                buttonText: "Testar Inicial"
            },
            {
                name: "Profissional",
                price: "R$239",
                period: "/mês",
                annualDiscount: "pagando anualmente — 20% off",
                normalPrice: "ou R$299/mês (pagamento mensal)",
                features: ["Tudo do Inicial", "IA treinada para atendimento médico", "Integração Google Agenda", "Segmentação de pacientes", "Relatório semanal avançado"],
                highlight: true,
                buttonText: "Testar Profissional"
            },
            {
                name: "Avançado",
                price: "R$399",
                period: "/mês",
                annualDiscount: "pagando anualmente — 20% off",
                normalPrice: "ou R$499/mês (pagamento mensal)",
                features: ["Tudo do Profissional", "Dashboard de desempenho", "Adição rápida de consultas via WhatsApp", "Assistente de confirmação e follow-up", "Suporte prioritário"],
                highlight: false,
                buttonText: "Testar Avançado"
            }
        ]
    },
    other: {
        id: 'other',
        name: 'Outro',
        icon: MoreHorizontal,
        headline: 'A IA que responde seus clientes e vende pra você.',
        subhead: 'Converse, agende e organize tudo pelo WhatsApp.',
        heroImage: 'default_chat.png',
        steps: [
            { title: 'Cliente chama', desc: 'Seu cliente manda mensagem no WhatsApp.' },
            { title: 'IA responde', desc: 'A Otizap tira dúvidas e agenda horários.' },
            { title: 'Você lucra', desc: 'Receba o pedido ou agendamento pronto.' }
        ],
        howItWorks: [
            {
                title: "1. Cliente chama",
                messages: [
                    { type: 'user', text: "Olá, gostaria de um orçamento." },
                    { type: 'bot', text: "Oi! Com certeza. Para qual serviço você precisa de orçamento? 💼" }
                ]
            },
            {
                title: "2. IA responde",
                messages: [
                    { type: 'user', text: "Consultoria financeira." },
                    { type: 'bot', text: "Ótimo! Vou te enviar nosso portfólio e preços agora mesmo." }
                ]
            },
            {
                title: "3. Você lucra",
                messages: [
                    { type: 'bot', text: "Proposta enviada! Quando podemos marcar uma reunião para fechar? 🤝" }
                ]
            }
        ],
        testimonial: {
            quote: "A automação transformou meu atendimento.",
            author: "Maria S.",
            role: "Empresária",
            metric: "Mais tempo livre"
        },
        pricing: [
            {
                name: "Inicial",
                price: "R$119",
                period: "/mês",
                annualDiscount: "pagando anualmente — 20% off",
                normalPrice: "ou R$149/mês (pagamento mensal)",
                features: ["Automação de respostas no WhatsApp", "Agendamentos automáticos", "Relatório semanal simplificado"],
                highlight: false,
                buttonText: "Testar Inicial"
            },
            {
                name: "Profissional",
                price: "R$239",
                period: "/mês",
                annualDiscount: "pagando anualmente — 20% off",
                normalPrice: "ou R$299/mês (pagamento mensal)",
                features: ["Tudo do Inicial", "IA adaptada ao negócio", "Integração Google Agenda", "Relatórios avançados", "Suporte prioritário"],
                highlight: true,
                buttonText: "Testar Profissional"
            },
            {
                name: "Avançado",
                price: "R$399",
                period: "/mês",
                annualDiscount: "pagando anualmente — 20% off",
                normalPrice: "ou R$499/mês (pagamento mensal)",
                features: ["Tudo do Profissional", "Dashboard inteligente", "Reengajamento automático", "Atendimento em equipe", "Suporte premium"],
                highlight: false,
                buttonText: "Testar Avançado"
            }
        ]
    }
};

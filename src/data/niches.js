import { Home, Scissors, Stethoscope, GraduationCap, ShoppingBag, Briefcase } from 'lucide-react';

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
        testimonial: {
            quote: "Fecho 2x mais vendas com a Otizap.",
            author: "Carlos M.",
            role: "Empreendedor",
            metric: "+1.200 conversas/mês"
        }
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
        testimonial: {
            quote: "Minha equipe não perde mais nenhum lead de portal.",
            author: "Ana Souza",
            role: "Corretora de Imóveis",
            metric: "+45 visitas agendadas/mês"
        }
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
        testimonial: {
            quote: "Reduzi as faltas em 80% com os lembretes automáticos.",
            author: "Juliana R.",
            role: "Dona de Salão",
            metric: "Agenda 100% preenchida"
        }
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
        testimonial: {
            quote: "Meus pacientes adoram a rapidez no agendamento.",
            author: "Dr. Paulo",
            role: "Dentista",
            metric: "Zero atrasos na agenda"
        }
    }
};

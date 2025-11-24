import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const TypingText = ({ text }) => {
    const [displayedText, setDisplayedText] = React.useState('');

    React.useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setDisplayedText(text.slice(0, i + 1));
            i++;
            if (i > text.length) clearInterval(interval);
        }, 50);
        return () => clearInterval(interval);
    }, [text]);

    return <p className="text-[#104F03] font-medium">{displayedText}</p>;
};

const TypewriterCycle = ({ words, period = 2000 }) => {
    const [index, setIndex] = React.useState(0);
    const [subIndex, setSubIndex] = React.useState(0);
    const [reverse, setReverse] = React.useState(false);
    const [blink, setBlink] = React.useState(true);

    // Blinking cursor
    React.useEffect(() => {
        const timeout2 = setTimeout(() => {
            setBlink((prev) => !prev);
        }, 500);
        return () => clearTimeout(timeout2);
    }, [blink]);

    // Typing effect
    React.useEffect(() => {
        if (index >= words.length) {
            setIndex(0);
            return;
        }

        if (subIndex === words[index].length + 1 && !reverse) {
            const timeout = setTimeout(() => {
                setReverse(true);
            }, period);
            return () => clearTimeout(timeout);
        }

        if (subIndex === 0 && reverse) {
            setReverse(false);
            setIndex((prev) => (prev + 1) % words.length);
            return;
        }

        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (reverse ? -1 : 1));
        }, reverse ? 75 : 150);

        return () => clearTimeout(timeout);
    }, [subIndex, index, reverse, words, period]);

    return (
        <span className="text-[#E3FFDD]">
            {words[index].substring(0, subIndex)}
            <span className={`${blink ? 'opacity-100' : 'opacity-0'} ml-1`}>|</span>
        </span>
    );
};

const TypingIndicator = () => (
    <div className="bg-[#E3FFDD] p-3 rounded-tr-xl rounded-bl-xl rounded-br-xl shadow-sm border border-green-100 inline-block">
        <div className="flex space-x-1">
            <motion.div
                className="w-2 h-2 bg-green-600 rounded-full"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut", delay: 0 }}
            />
            <motion.div
                className="w-2 h-2 bg-green-600 rounded-full"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
            />
            <motion.div
                className="w-2 h-2 bg-green-600 rounded-full"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
            />
        </div>
    </div>
);

const Hero = ({ niche, onScrollToNiche }) => {
    const actionWords = ["vende", "aluga", "agenda", "atende"];
    const [chatStep, setChatStep] = React.useState(0); // 0: empty, 1: user msg, 2: typing, 3: bot msg

    React.useEffect(() => {
        const t1 = setTimeout(() => setChatStep(1), 800);   // User message appears
        const t2 = setTimeout(() => setChatStep(2), 2000);  // Typing starts
        const t3 = setTimeout(() => setChatStep(3), 4000);  // Bot message appears

        return () => {
            clearTimeout(t1);
            clearTimeout(t2);
            clearTimeout(t3);
        };
    }, []);

    return (
        <section
            className="relative w-full pt-32 md:pt-32 min-h-[85vh] md:min-h-[80vh] overflow-hidden flex flex-col items-center"
            style={{
                background: 'linear-gradient(160deg, #00231B 4.76%, #07654E 42.8%, #098A6B 50.83%, #055C47 58.86%, #004837 92.67%)'
            }}
        >
            <div className="w-full max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between flex-grow">
                {/* Left Column: Text & CTA (Desktop) */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full md:w-1/2 max-w-2xl z-10 text-center md:text-left mb-6 md:mb-0 md:pl-10 lg:pl-20"
                >
                    <div className="mb-2"></div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4">
                        A IA que responde seus clientes e <TypewriterCycle words={actionWords} /> para você.
                    </h1>

                    <p className="text-lg text-green-50 mb-6 max-w-lg mx-auto md:mx-0 leading-relaxed">
                        {niche.subhead}
                    </p>

                    {/* Desktop Button */}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={onScrollToNiche}
                        className="hidden md:block font-bold py-4 px-8 text-lg shadow-lg shadow-black/20 transition-all w-full md:w-auto text-white btn-shimmer"
                        style={{
                            borderRadius: '100px',
                            border: '2px solid #84FE7B',
                            background: 'linear-gradient(81deg, rgba(62, 152, 1, 0.35) 23.07%, rgba(21, 50, 16, 0.35) 84.49%)'
                        }}
                    >
                        Escolher meu nicho
                    </motion.button>
                </motion.div>

                {/* Right Column: Chat Simulation & Mobile CTA */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="w-full md:w-1/2 flex flex-col items-center md:items-end md:pr-10 lg:pr-20 relative z-10"
                >
                    <div className="w-full max-w-xs md:max-w-sm bg-gray-50 rounded-2xl border border-gray-100 shadow-2xl p-4 transform md:rotate-[-2deg] hover:rotate-0 transition-transform duration-500 mb-8 md:mb-0">
                        <div className="flex items-center space-x-3 mb-4 border-b border-gray-100 pb-2">
                            <div className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden bg-[#012D23] p-1">
                                <img src="/logo_icon.png" alt="Otizap Icon" className="w-full h-full object-cover" />
                            </div>
                            <div className="text-left">
                                <p className="text-sm font-bold text-gray-800">Otizap</p>
                                <p className="text-xs text-green-600 flex items-center gap-1">
                                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                    Online
                                </p>
                            </div>
                        </div>
                        <div className="space-y-4 text-left text-sm min-h-[120px]">
                            {/* User Message */}
                            {chatStep >= 1 && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex justify-end"
                                >
                                    <div className="bg-white p-3 rounded-tl-xl rounded-tr-xl rounded-bl-xl shadow-sm border border-gray-100 inline-block max-w-[90%]">
                                        <p className="text-gray-600">Como o Otizap pode me ajudar?</p>
                                    </div>
                                </motion.div>
                            )}

                            {/* Typing Indicator */}
                            {chatStep === 2 && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex justify-start"
                                >
                                    <TypingIndicator />
                                </motion.div>
                            )}

                            {/* Bot Message */}
                            {chatStep >= 3 && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex justify-start"
                                >
                                    <div className="bg-[#E3FFDD] p-3 rounded-tr-xl rounded-bl-xl rounded-br-xl shadow-sm border border-green-100 inline-block max-w-[90%]">
                                        <TypingText text="Olá! Posso automatizar seu atendimento e aumentar suas vendas! 🚀" />
                                    </div>
                                </motion.div>
                            )}
                        </div>
                    </div>

                    {/* Mobile Button (Below Chat) */}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={onScrollToNiche}
                        className="md:hidden font-bold py-4 px-8 text-lg shadow-lg shadow-black/20 transition-all w-full text-white mb-12 btn-shimmer"
                        style={{
                            borderRadius: '100px',
                            border: '2px solid #84FE7B',
                            background: 'linear-gradient(81deg, rgba(62, 152, 1, 0.35) 23.07%, rgba(21, 50, 16, 0.35) 84.49%)'
                        }}
                    >
                        Escolher meu nicho
                    </motion.button>
                </motion.div>
            </div>

            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hidden md:block"
            >
                <ArrowDown size={24} />
            </motion.div>
        </section>
    );
};

export default Hero;

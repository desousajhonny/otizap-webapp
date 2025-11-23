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

const Hero = ({ niche, onScrollToNiche }) => {
    const actionWords = ["vende", "aluga", "agenda", "atende"];

    return (
        <section className="relative flex flex-col md:flex-row items-center justify-between px-6 py-12 pt-20 md:pt-32 min-h-[85vh] md:min-h-[80vh] bg-gradient-to-b from-[#013B2B] to-[#00241a] overflow-hidden">

            {/* Left Column: Text & CTA */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full md:w-1/2 max-w-2xl z-10 text-center md:text-left mb-12 md:mb-0 md:pl-10 lg:pl-20"
            >
                <div className="mb-2"></div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
                    A IA que responde seus clientes e <TypewriterCycle words={actionWords} /> para você.
                </h1>

                <p className="text-lg text-green-50 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
                    {niche.subhead}
                </p>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onScrollToNiche}
                    className="bg-[#E3FFDD] hover:bg-white text-primary-dark font-bold py-4 px-8 rounded-full text-lg shadow-lg shadow-black/20 transition-all w-full md:w-auto"
                >
                    Escolher meu nicho
                </motion.button>
            </motion.div>

            {/* Right Column: Chat Simulation */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="w-full md:w-1/2 flex justify-center md:justify-end md:pr-10 lg:pr-20 relative z-10"
            >
                <div className="w-full max-w-xs md:max-w-sm bg-gray-50 rounded-2xl border border-gray-100 shadow-2xl p-4 transform md:rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
                    <div className="flex items-center space-x-3 mb-4 border-b border-gray-100 pb-2">
                        <div className="w-10 h-10 bg-[#104F03] rounded-full flex items-center justify-center text-white text-xs font-bold">
                            Oti
                        </div>
                        <div className="text-left">
                            <p className="text-sm font-bold text-gray-800">Otizap</p>
                            <p className="text-xs text-green-600 flex items-center gap-1">
                                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                Online
                            </p>
                        </div>
                    </div>
                    <div className="space-y-4 text-left text-sm">
                        {/* User Message */}
                        <div className="flex justify-end">
                            <div className="bg-white p-3 rounded-tl-xl rounded-tr-xl rounded-bl-xl shadow-sm border border-gray-100 inline-block max-w-[90%]">
                                <p className="text-gray-600">Como o Otizap pode me ajudar?</p>
                            </div>
                        </div>

                        {/* Bot Message with Typing Effect */}
                        <div className="flex justify-start">
                            <div className="bg-[#E3FFDD] p-3 rounded-tr-xl rounded-bl-xl rounded-br-xl shadow-sm border border-green-100 inline-block max-w-[90%]">
                                <TypingText text="Olá! Posso automatizar seu atendimento e aumentar suas vendas! 🚀" />
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

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

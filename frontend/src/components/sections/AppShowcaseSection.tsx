import React from "react";
import { motion } from "framer-motion";
import { FiSmartphone, FiTrendingUp, FiAlertCircle } from "react-icons/fi";
import StatChip from "../ui/StatChip";

const AppShowcaseSection: React.FC = () => {
    return (
        <section id="showcase" className="relative py-8 px-6">
            <div className="mx-auto max-w-7xl">
                <div className="grid items-center gap-12 lg:grid-cols-2">
                    {/* Left: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="mb-6 text-4xl font-bold tracking-tight text-slate-50 sm:text-5xl">
                            La App Más{" "}
                            <span className="bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">
                                Completa
                            </span>
                            <br />
                            del Mercado
                        </h2>
                        <p className="mb-8 text-lg leading-relaxed text-slate-400">
                            StructureScan combina visión por computadora, inteligencia artificial
                            y conocimiento experto para darte el mejor análisis estructural móvil.
                        </p>

                        {/* Features List */}
                        <div className="mb-8 space-y-4">
                            {[
                                { icon: FiSmartphone, text: "Interfaz intuitiva y fácil de usar" },
                                { icon: FiTrendingUp, text: "Análisis en tiempo real con IA" },
                                { icon: FiAlertCircle, text: "Alertas de riesgo personalizadas" },
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                                    className="flex items-center gap-3"
                                >
                                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-pink-500/20 to-orange-500/20 text-pink-400">
                                        <item.icon className="h-5 w-5" />
                                    </div>
                                    <span className="text-slate-300">{item.text}</span>
                                </motion.div>
                            ))}
                        </div>

                        {/* Stats */}
                        <div className="flex flex-wrap gap-4">
                            <StatChip value="98%" label="Precisión" />
                            <StatChip value="50k+" label="Usuarios" />
                            <StatChip value="4.9★" label="Rating" />
                        </div>
                    </motion.div>

                    {/* Right: Phone Mockup */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="relative mx-auto w-full max-w-sm">
                            {/* Glow Effect */}
                            <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-pink-500/30 to-orange-500/30 blur-3xl" />

                            {/* Phone Frame */}
                            <div className="relative overflow-hidden rounded-[3rem] border-[8px] border-slate-900 bg-slate-950 shadow-2xl">
                                <div className="relative aspect-[9/19] bg-slate-900">
                                    {/* Notch */}
                                    <div className="absolute left-1/2 top-0 z-20 h-6 w-32 -translate-x-1/2 rounded-b-[1.2rem] bg-slate-900 shadow-sm" />

                                    {/* Screen Image */}
                                    <img 
                                        src="/images/iman.jpeg" 
                                        alt="StructureScan App"
                                        className="h-full w-full object-cover object-center"
                                    />
                                    
                                    {/* Inner shadow/ring for realistic screen border */}
                                    <div className="pointer-events-none absolute inset-0 rounded-[2.2rem] shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] ring-1 ring-inset ring-white/10" />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AppShowcaseSection;

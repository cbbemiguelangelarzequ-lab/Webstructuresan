import React from "react";
import { motion } from "framer-motion";
import { FiSmartphone, FiTrendingUp, FiAlertCircle } from "react-icons/fi";
import StatChip from "../ui/StatChip";

const AppShowcaseSection: React.FC = () => {
    return (
        <section id="showcase" className="relative py-24 px-6">
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
                            <div className="relative overflow-hidden rounded-[3rem] border-8 border-slate-900 bg-slate-950 shadow-2xl">
                                <div className="aspect-[9/19] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6">
                                    {/* Notch */}
                                    <div className="mx-auto mb-6 h-6 w-32 rounded-full bg-slate-950" />

                                    {/* Screen Content */}
                                    <div className="space-y-4">
                                        <div className="h-12 rounded-2xl bg-gradient-to-r from-pink-500/20 to-orange-500/20 backdrop-blur-sm" />
                                        <div className="h-64 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 p-4">
                                            <div className="mb-3 h-4 w-24 rounded bg-slate-700" />
                                            <div className="space-y-2">
                                                <div className="h-3 w-full rounded bg-slate-700/50" />
                                                <div className="h-3 w-4/5 rounded bg-slate-700/50" />
                                                <div className="h-3 w-3/4 rounded bg-slate-700/50" />
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-2 gap-3">
                                            <div className="h-20 rounded-xl bg-gradient-to-br from-sky-500/20 to-blue-500/20" />
                                            <div className="h-20 rounded-xl bg-gradient-to-br from-violet-500/20 to-purple-500/20" />
                                        </div>
                                    </div>
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

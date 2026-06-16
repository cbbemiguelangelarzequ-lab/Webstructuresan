import React from "react";
import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";

const FinalCTASection: React.FC = () => {
    return (
        <section id="final-cta" className="relative py-8 px-6">
            <div className="mx-auto max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative overflow-hidden rounded-3xl border border-slate-800/50 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-12 text-center shadow-2xl md:p-16"
                >
                    {/* Background Glow Effects */}
                    <div className="pointer-events-none absolute -left-32 -top-32 h-64 w-64 rounded-full bg-gradient-to-br from-sky-500/30 to-violet-500/30 blur-3xl" />
                    <div className="pointer-events-none absolute -bottom-32 -right-32 h-64 w-64 rounded-full bg-gradient-to-br from-pink-500/30 to-orange-500/30 blur-3xl" />

                    {/* Content */}
                    <div className="relative z-10">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="mb-6 text-4xl font-bold tracking-tight text-slate-50 sm:text-5xl lg:text-6xl"
                        >
                            Protege Tu Patrimonio{" "}
                            <span className="bg-gradient-to-r from-sky-400 via-violet-400 to-pink-400 bg-clip-text text-transparent">
                                Hoy Mismo
                            </span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-slate-300"
                        >
                            Únete a miles de usuarios que ya están usando StructureScan para
                            detectar problemas estructurales antes de que sea demasiado tarde.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
                        >
                            <a 
                                href="/downloads/structurescan.apk"
                                download="StructureScan.apk"
                                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-sky-500 via-violet-500 to-pink-500 px-8 py-4 font-semibold text-white shadow-lg shadow-sky-500/30 transition-all hover:scale-105 hover:shadow-xl hover:shadow-sky-500/40"
                            >
                                <FiDownload className="relative z-10 h-5 w-5" />
                                <span className="relative z-10">Descargar Gratis</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-sky-600 via-violet-600 to-pink-600 opacity-0 transition-opacity group-hover:opacity-100" />
                            </a>
                        </motion.div>

                        {/* Removed Trust Indicators */}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default FinalCTASection;

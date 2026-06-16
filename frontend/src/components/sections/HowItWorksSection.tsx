import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Timeline from "../ui/Timeline";

const steps = [
    {
        number: "01",
        title: "Descarga la App",
        description: "Disponible para Android. Instalación rápida y gratuita.",
    },
    {
        number: "02",
        title: "Reporta el Daño",
        description: "Sube fotos y describe el problema.",
    },
    {
        number: "03",
        title: "Conecta con Expertos",
        description: "Un ingeniero certificado toma tu caso.",
    },
    {
        number: "04",
        title: "Inspección Física",
        description: "Evaluación experta en el lugar.",
    },
    {
        number: "05",
        title: "Informe por IA",
        description: "Recibe tu diagnóstico oficial al instante.",
    },
];

const HowItWorksSection: React.FC = () => {
    return (
        <section id="how-it-works" className="relative py-8 px-6 bg-slate-900/30">
            <div className="mx-auto max-w-7xl">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <h2 className="mb-4 text-4xl font-bold tracking-tight text-slate-50 sm:text-5xl">
                        ¿Cómo{" "}
                        <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                            Funciona?
                        </span>
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-slate-400">
                        Cinco pasos simples para proteger tu hogar o edificio
                    </p>
                </motion.div>

                {/* Timeline */}
                <Timeline steps={steps} accent="emerald" />

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-12 text-center"
                >
                    <Link to="/auth/register" className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 px-8 py-3 font-semibold text-white shadow-lg shadow-emerald-500/30 transition-all hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/40">
                        <span className="relative z-10">Comenzar Ahora</span>
                        <svg
                            className="relative z-10 h-5 w-5 transition-transform group-hover:translate-x-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M13 7l5 5m0 0l-5 5m5-5H6"
                            />
                        </svg>
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-cyan-600 opacity-0 transition-opacity group-hover:opacity-100" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default HowItWorksSection;

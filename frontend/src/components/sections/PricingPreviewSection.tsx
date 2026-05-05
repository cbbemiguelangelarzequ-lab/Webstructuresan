import React from "react";
import { motion } from "framer-motion";
import { FiCheck } from "react-icons/fi";

const plan = {
    name: "Acceso Total",
    price: "Gratis",
    description: "StructureScan es completamente gratuito. Disfruta de la experiencia Pro y Enterprise sin ningún costo.",
    features: [
        "Escaneos de estructuras ilimitados",
        "Análisis por IA avanzado",
        "Chat con asistente especializado",
        "Reportes profesionales",
        "Historial completo de evaluaciones",
        "Exportación a PDF",
    ],
    gradient: "from-sky-500 to-violet-500",
};

const PricingPreviewSection: React.FC = () => {
    return (
        <section id="pricing" className="relative py-24 px-6">
            <div className="mx-auto max-w-4xl">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <h2 className="mb-4 text-4xl font-bold tracking-tight text-slate-50 sm:text-5xl">
                        Una Sola Versión.{" "}
                        <span className="bg-gradient-to-r from-sky-400 to-violet-400 bg-clip-text text-transparent">
                            Todo Incluido.
                        </span>
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-slate-400">
                        Creemos en el acceso universal a la seguridad estructural.
                    </p>
                </motion.div>

                {/* Single Pricing Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="relative overflow-hidden rounded-3xl border border-sky-500/30 bg-gradient-to-br from-slate-900 to-slate-950 p-8 shadow-2xl shadow-sky-500/10 md:p-12 text-center"
                >
                    {/* Badge */}
                    <div className="absolute right-0 top-0 hidden md:block">
                        <div className="bg-gradient-to-r from-sky-500 to-violet-500 px-12 py-2 shadow-lg transform rotate-45 translate-x-10 translate-y-6">
                            <span className="text-xs font-bold text-white tracking-widest uppercase">Gratis</span>
                        </div>
                    </div>

                    {/* Plan Info */}
                    <div className="mb-8">
                        <h3 className="mb-4 text-3xl font-bold text-slate-100">
                            {plan.name}
                        </h3>
                        <p className="mx-auto max-w-md text-slate-400">{plan.description}</p>
                    </div>

                    {/* Price */}
                    <div className="mb-10">
                        <span className="text-6xl font-bold text-slate-50">
                            {plan.price}
                        </span>
                    </div>

                    {/* Features Grid */}
                    <div className="mb-10 grid gap-4 text-left sm:grid-cols-2 max-w-2xl mx-auto">
                        {plan.features.map((feature, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <div className={`flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${plan.gradient}`}>
                                    <FiCheck className="h-4 w-4 text-white" />
                                </div>
                                <span className="text-slate-300 font-medium">{feature}</span>
                            </div>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <button className="w-full sm:w-auto rounded-full bg-gradient-to-r from-sky-500 to-violet-500 px-12 py-4 font-bold text-white shadow-lg shadow-sky-500/30 transition-all hover:scale-105 hover:shadow-xl hover:shadow-sky-500/40">
                        Comenzar Ahora
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default PricingPreviewSection;

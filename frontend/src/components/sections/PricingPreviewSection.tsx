import React from "react";
import { motion } from "framer-motion";
import { FiCheck } from "react-icons/fi";

const plans = [
    {
        name: "Básico",
        price: "Gratis",
        description: "Perfecto para propietarios individuales",
        features: [
            "5 escaneos por mes",
            "Análisis IA básico",
            "Chat con asistente",
            "Reportes simples",
        ],
        gradient: "from-slate-700 to-slate-800",
        popular: false,
    },
    {
        name: "Pro",
        price: "$9.99",
        period: "/mes",
        description: "Ideal para profesionales y administradores",
        features: [
            "Escaneos ilimitados",
            "Análisis IA avanzado",
            "Chat prioritario 24/7",
            "Reportes profesionales",
            "Historial completo",
            "Exportación PDF",
        ],
        gradient: "from-sky-500 to-violet-500",
        popular: true,
    },
    {
        name: "Enterprise",
        price: "Contactar",
        description: "Para empresas y constructoras",
        features: [
            "Todo lo de Pro",
            "API personalizada",
            "Soporte dedicado",
            "Integración con sistemas",
            "Capacitación del equipo",
        ],
        gradient: "from-amber-500 to-orange-500",
        popular: false,
    },
];

const PricingPreviewSection: React.FC = () => {
    return (
        <section id="pricing" className="relative py-24 px-6">
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
                        Planes Para{" "}
                        <span className="bg-gradient-to-r from-sky-400 to-violet-400 bg-clip-text text-transparent">
                            Cada Necesidad
                        </span>
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-slate-400">
                        Comienza gratis y escala cuando lo necesites
                    </p>
                </motion.div>

                {/* Pricing Cards */}
                <div className="grid gap-8 md:grid-cols-3">
                    {plans.map((plan, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.2 } }}
                            className={`relative overflow-hidden rounded-2xl border p-8 transition-all ${plan.popular
                                    ? "border-sky-500/50 bg-gradient-to-br from-slate-900 to-slate-950 shadow-xl shadow-sky-500/20"
                                    : "border-slate-800/50 bg-gradient-to-br from-slate-900/50 to-slate-950/50 hover:border-slate-700/50"
                                }`}
                        >
                            {/* Popular Badge */}
                            {plan.popular && (
                                <div className="absolute right-6 top-6">
                                    <span className="rounded-full bg-gradient-to-r from-sky-500 to-violet-500 px-3 py-1 text-xs font-semibold text-white shadow-lg">
                                        Popular
                                    </span>
                                </div>
                            )}

                            {/* Plan Name */}
                            <h3 className="mb-2 text-2xl font-bold text-slate-100">
                                {plan.name}
                            </h3>
                            <p className="mb-6 text-sm text-slate-400">{plan.description}</p>

                            {/* Price */}
                            <div className="mb-6">
                                <span className="text-5xl font-bold text-slate-50">
                                    {plan.price}
                                </span>
                                {plan.period && (
                                    <span className="text-lg text-slate-400">{plan.period}</span>
                                )}
                            </div>

                            {/* Features */}
                            <ul className="mb-8 space-y-3">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <div
                                            className={`mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${plan.gradient}`}
                                        >
                                            <FiCheck className="h-3 w-3 text-white" />
                                        </div>
                                        <span className="text-sm text-slate-300">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* CTA Button */}
                            <button
                                className={`w-full rounded-full py-3 font-semibold transition-all ${plan.popular
                                        ? "bg-gradient-to-r from-sky-500 to-violet-500 text-white shadow-lg shadow-sky-500/30 hover:scale-105 hover:shadow-xl hover:shadow-sky-500/40"
                                        : "border border-slate-700 bg-slate-800/50 text-slate-100 hover:bg-slate-800"
                                    }`}
                            >
                                {plan.price === "Contactar" ? "Contactar Ventas" : "Comenzar"}
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PricingPreviewSection;

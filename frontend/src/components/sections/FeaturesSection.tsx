import React from "react";
import { motion } from "framer-motion";
import { FiCheckCircle, FiCamera, FiZap, FiShield } from "react-icons/fi";

const features = [
    {
        icon: FiCamera,
        title: "Escaneo Inteligente",
        description: "Captura fotos de grietas, humedad o daños y obtén un análisis preliminar al instante.",
        gradient: "from-sky-500 to-blue-600",
    },
    {
        icon: FiZap,
        title: "IA Especializada",
        description: "Asistente con conocimiento en ingeniería estructural para responder tus dudas 24/7.",
        gradient: "from-violet-500 to-purple-600",
    },
    {
        icon: FiShield,
        title: "Prevención Proactiva",
        description: "Detecta problemas antes de que se conviertan en emergencias costosas.",
        gradient: "from-emerald-500 to-teal-600",
    },
    {
        icon: FiCheckCircle,
        title: "Reportes Profesionales",
        description: "Genera informes detallados para compartir con ingenieros o aseguradoras.",
        gradient: "from-orange-500 to-red-600",
    },
];

const FeaturesSection: React.FC = () => {
    return (
        <section id="features" className="relative py-24 px-6">
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
                        Características{" "}
                        <span className="bg-gradient-to-r from-sky-400 to-violet-400 bg-clip-text text-transparent">
                            Innovadoras
                        </span>
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-slate-400">
                        Tecnología de punta para proteger tu patrimonio y tomar decisiones informadas
                    </p>
                </motion.div>

                {/* Features Grid */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            whileHover={{ y: -8, transition: { duration: 0.2 } }}
                            className="group relative overflow-hidden rounded-2xl border border-slate-800/50 bg-gradient-to-br from-slate-900/50 to-slate-950/50 p-6 backdrop-blur-sm transition-all hover:border-slate-700/50 hover:shadow-xl hover:shadow-sky-500/10"
                        >
                            {/* Icon */}
                            <div
                                className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${feature.gradient} text-white shadow-lg`}
                            >
                                <feature.icon className="h-6 w-6" />
                            </div>

                            {/* Content */}
                            <h3 className="mb-2 text-xl font-semibold text-slate-100">
                                {feature.title}
                            </h3>
                            <p className="text-sm leading-relaxed text-slate-400">
                                {feature.description}
                            </p>

                            {/* Hover Glow Effect */}
                            <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br from-sky-500/20 to-violet-500/20 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;

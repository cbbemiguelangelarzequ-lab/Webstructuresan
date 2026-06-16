import React from "react";
import { motion } from "framer-motion";
import { FiStar } from "react-icons/fi";

const testimonials = [
    {
        name: "María González",
        role: "Propietaria de Casa",
        avatar: "MG",
        rating: 5,
        text: "Detecté una grieta preocupante y la app me ayudó a entender que era urgente. Llamé a un ingeniero a tiempo y evité un problema mayor.",
        gradient: "from-pink-500 to-rose-500",
    },
    {
        name: "Carlos Ramírez",
        role: "Administrador de Edificio",
        avatar: "CR",
        rating: 5,
        text: "Uso StructureScan para inspecciones mensuales. Los reportes son profesionales y me ahorran tiempo y dinero.",
        gradient: "from-blue-500 to-cyan-500",
    },
    {
        name: "Ana Martínez",
        role: "Ingeniera Civil",
        avatar: "AM",
        rating: 5,
        text: "Recomiendo esta app a mis clientes para que hagan un triaje inicial. La IA es sorprendentemente precisa.",
        gradient: "from-violet-500 to-purple-500",
    },
];

const TestimonialsSection: React.FC = () => {
    return (
        <section id="testimonials" className="relative py-8 px-6 bg-slate-900/30">
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
                        Lo Que Dicen{" "}
                        <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                            Nuestros Usuarios
                        </span>
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-slate-400">
                        Miles de personas confían en StructureScan para proteger su patrimonio
                    </p>
                </motion.div>

                {/* Testimonials Grid */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {testimonials.map((testimonial, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            whileHover={{ y: -8, transition: { duration: 0.2 } }}
                            className="group relative overflow-hidden rounded-2xl border border-slate-800/50 bg-gradient-to-br from-slate-900/80 to-slate-950/80 p-6 backdrop-blur-sm transition-all hover:border-slate-700/50 hover:shadow-xl hover:shadow-amber-500/10"
                        >
                            {/* Stars */}
                            <div className="mb-4 flex gap-1">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <FiStar
                                        key={i}
                                        className="h-4 w-4 fill-amber-400 text-amber-400"
                                    />
                                ))}
                            </div>

                            {/* Quote */}
                            <p className="mb-6 text-sm leading-relaxed text-slate-300">
                                "{testimonial.text}"
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-3">
                                <div
                                    className={`flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br ${testimonial.gradient} text-sm font-bold text-white shadow-lg`}
                                >
                                    {testimonial.avatar}
                                </div>
                                <div>
                                    <p className="font-semibold text-slate-100">
                                        {testimonial.name}
                                    </p>
                                    <p className="text-xs text-slate-400">{testimonial.role}</p>
                                </div>
                            </div>

                            {/* Hover Glow */}
                            <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br from-amber-500/20 to-orange-500/20 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;

import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowRight, FiSmartphone } from "react-icons/fi";
import StatChip from "../ui/StatChip";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
  viewport: { once: true, amount: 0.4 },
});

const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Video de fondo */}
      <div className="absolute inset-0 -z-10">
        <video
          className="h-full w-full object-cover"
          src="/videos/hero-structurescan.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-slate-950/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/40 to-slate-950/90" />
      </div>

      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-8 sm:px-6 md:flex-row md:items-center lg:px-8">
        {/* Texto */}
        <div className="relative z-10 flex-1 space-y-8">
          <motion.div {...fadeUp(0)}>
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-400/40 bg-slate-900/70 px-3 py-1 text-xs font-medium text-sky-200 shadow-sm shadow-sky-500/30">
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Beta gratuita para propietarios
            </span>
          </motion.div>

          <motion.div {...fadeUp(0.1)} className="space-y-4">
            <h1 className="text-balance text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl lg:text-5xl xl:text-6xl">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-cyan-300 to-indigo-300">
                Detecta problemas estructurales
              </span>
              <span className="block mt-1">
                antes de que sea demasiado tarde.
              </span>
            </h1>
            <p className="max-w-xl text-sm text-slate-200 sm:text-base">
              StructureScan conecta propietarios con ingenieros expertos para
              realizar un triaje inteligente de edificaciones, usando IA para
              priorizar riesgos y generar informes profesionales en minutos.
            </p>
          </motion.div>

          <motion.div
            {...fadeUp(0.2)}
            className="flex flex-col gap-5"
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/auth/register"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-sky-500/40 hover:from-sky-400 hover:to-indigo-400 transition-all hover:-translate-y-0.5 whitespace-nowrap"
              >
                Registrarme como Propietario
                <FiArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/auth/register?role=profesional"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-600 bg-slate-900/50 px-8 py-3.5 text-sm font-semibold text-slate-100 hover:border-slate-400 hover:bg-slate-800/80 hover:text-white transition-all hover:-translate-y-0.5 whitespace-nowrap"
              >
                Soy Profesional
              </Link>
            </div>
            <p className="text-sm text-slate-300/80">
              Sin costo por ahora. La app móvil se integra con las mismas credenciales.
            </p>
          </motion.div>

          <motion.div
            {...fadeUp(0.3)}
            className="grid max-w-xl grid-cols-3 gap-3 text-xs text-slate-200 sm:text-[0.8rem]"
          >
            <StatChip label="Inspecciones guiadas" value="Paso a paso" />
            <StatChip label="Informes IA" value="En minutos" />
            <StatChip label="Profesionales" value="Certificados" />
          </motion.div>
        </div>

        {/* Mockup app */}
        <motion.div
          {...fadeUp(0.2)}
          className="relative flex flex-1 items-center justify-center md:justify-end"
        >
          <div className="relative h-[380px] w-[210px] rounded-[2.5rem] border border-white/15 bg-gradient-to-b from-slate-900/90 via-slate-900/70 to-slate-950/90 p-3 shadow-[0_25px_80px_rgba(0,0,0,0.85)] sm:h-[420px] sm:w-[230px]">
            <div className="mx-auto mb-2 h-1.5 w-16 rounded-full bg-slate-700/80" />
            <div className="h-full overflow-hidden rounded-[1.8rem] bg-slate-900/80">
              <div className="flex h-full flex-col justify-between p-4">
                <div className="space-y-2">
                  <p className="text-[0.7rem] font-medium text-sky-300">
                    Perfil de Vulnerabilidad
                  </p>
                  <p className="text-[0.72rem] text-slate-200">
                    Vivienda multifamiliar · Zona urbana
                  </p>
                  <div className="mt-2 h-2 rounded-full bg-slate-800">
                    <div className="h-2 w-4/5 rounded-full bg-gradient-to-r from-amber-400 via-orange-500 to-red-500" />
                  </div>
                  <p className="mt-1 text-[0.7rem] text-amber-300">
                    Riesgo moderado-alto
                  </p>
                </div>

                <div className="space-y-2 rounded-2xl bg-slate-900/90 p-3">
                  <p className="text-[0.68rem] font-medium text-slate-100">
                    Síntomas registrados
                  </p>
                  <ul className="space-y-1 text-[0.65rem] text-slate-300">
                    <li>• Grieta diagonal en muro portante</li>
                    <li>• Manchas de humedad en losa</li>
                    <li>• Puertas que no cierran correctamente</li>
                  </ul>
                  <button className="mt-2 w-full rounded-full bg-sky-500/90 py-1.5 text-[0.7rem] font-semibold text-white">
                    Enviar a ingeniero
                  </button>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20, x: 10 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="absolute -right-4 top-8 rounded-2xl bg-slate-950/90 px-4 py-2 text-xs text-slate-100 shadow-xl shadow-sky-500/30 ring-1 ring-white/10 sm:-right-10"
          >
            <p className="font-medium">+65% más rápido</p>
            <p className="text-[0.65rem] text-slate-400">
              en generación de informes
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20, x: -10 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="absolute -bottom-4 left-0 rounded-2xl bg-sky-500/15 px-3 py-2 text-[0.68rem] text-sky-100 shadow-lg shadow-sky-500/40 ring-1 ring-sky-500/40"
          >
            <p className="flex items-center gap-1">
              <FiSmartphone className="h-3 w-3" />
              IA activa para triaje estructural
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

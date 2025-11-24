import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="relative border-t border-white/5 bg-slate-950/95 py-6">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p>© {new Date().getFullYear()} StructureScan. Todos los derechos reservados.</p>
        <div className="flex flex-wrap items-center gap-4">
          <Link to="/terms" className="hover:text-sky-300">Términos</Link>
          <Link to="/privacy" className="hover:text-sky-300">Privacidad</Link>
          <Link to="/contact" className="hover:text-sky-300">Ayuda</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

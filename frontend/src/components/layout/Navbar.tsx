import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight, FiUser, FiLogOut } from "react-icons/fi";
import { useAuth } from "../../contexts/AuthContext";

const Navbar: React.FC = () => {
  const { user, signOut } = useAuth();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  return (
    <header className="relative z-20 border-b border-white/5 bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <img 
            src="/images/structurescan_logo.png" 
            alt="StructureScan Logo" 
            className="h-10 w-10 rounded-full object-cover shadow-sm"
          />
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold tracking-[0.15em] text-sky-300">
              STRUCTURESCAN
            </span>
            <span className="text-xs text-slate-300">Triaje estructural con IA</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-200 md:flex">
          <button onClick={() => scrollToSection("features")} className="hover:text-sky-300 transition-colors">
            Características
          </button>
          <button onClick={() => scrollToSection("pricing")} className="hover:text-sky-300 transition-colors">
            Precios
          </button>
          <button onClick={() => scrollToSection("about")} className="hover:text-sky-300 transition-colors">
            Acerca de
          </button>
          <button onClick={() => scrollToSection("contact")} className="hover:text-sky-300 transition-colors">
            Contacto
          </button>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          {user ? (
            <>
              <div className="flex items-center gap-2 px-3 py-1.5 text-sm text-slate-300">
                <FiUser className="h-4 w-4" />
                <span>{user.user_metadata?.full_name || user.email}</span>
              </div>
              <button
                onClick={handleSignOut}
                className="inline-flex items-center gap-2 rounded-full border border-slate-600 px-4 py-1.5 text-sm font-medium text-slate-100 hover:border-red-400 hover:text-red-300 transition-colors"
              >
                <FiLogOut className="h-4 w-4" />
                Salir
              </button>
            </>
          ) : (
            <>
              <Link
                to="/auth/login"
                className="rounded-full border border-slate-600 px-4 py-1.5 text-sm font-medium text-slate-100 hover:border-sky-400 hover:text-sky-300"
              >
                Iniciar sesión
              </Link>
              <Link
                to="/auth/register"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 px-4 py-1.5 text-sm font-semibold text-white shadow-lg shadow-sky-500/30 hover:from-sky-400 hover:to-indigo-400"
              >
                Registrarme Gratis
                <FiArrowRight className="h-4 w-4" />
              </Link>
            </>
          )}
        </div>

        <div className="flex md:hidden">
          <span className="text-xs text-slate-400">Menú</span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

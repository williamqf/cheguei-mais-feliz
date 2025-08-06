import { useState } from "react";
import { Menu, X, Baby, LogIn } from "lucide-react";
import { Link } from "react-router-dom";
import babyMascot from "@/assets/baby-mascot.jpg";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Como funciona", href: "#como-funciona" },
    { label: "Recursos", href: "#recursos" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "Dúvidas", href: "#duvidas" },
    { label: "Contato", href: "#contato" }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container-fluid">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#top" className="flex items-center gap-3 group">
            <img 
              src={babyMascot} 
              alt="Cheguei Família" 
              className="w-10 h-10 rounded-full group-hover:scale-105 transition-transform"
            />
            <div className="text-xl font-bold text-primary font-serif group-hover:text-primary/90 transition-colors">Cheguei Família</div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Link to="/login" className="btn-secondary flex items-center gap-2 px-6 py-3">
              <LogIn className="w-4 h-4" />
              Entrar
            </Link>
            <Link to="/criar-cha" className="btn-hero flex items-center gap-2 px-6 py-3">
              <Baby className="w-4 h-4" />
              Criar chá grátis
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-neutral/50 transition-colors"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-background border-t border-border">
            <div className="py-6 space-y-4">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="block text-muted-foreground hover:text-primary transition-colors font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 space-y-3">
                <Link to="/login" className="btn-secondary w-full flex items-center justify-center gap-2 py-3">
                  <LogIn className="w-4 h-4" />
                  Entrar
                </Link>
                <Link to="/criar-cha" className="btn-hero w-full flex items-center justify-center gap-2 py-3">
                  <Baby className="w-4 h-4" />
                  Criar chá grátis
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
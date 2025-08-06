import { Heart, Instagram, Facebook, Mail } from "lucide-react";
import babyMascot from "@/assets/baby-mascot.jpg";

const Footer = () => {
  return (
    <footer id="contato" className="bg-neutral/50 border-t border-border">
      <div className="container-fluid">
        {/* Main footer */}
        <div className="py-12 grid md:grid-cols-4 gap-8">
          {/* Brand section */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={babyMascot} 
                alt="Cheguei Família" 
                className="w-12 h-12 rounded-full"
              />
              <div>
                <div className="text-xl font-bold text-foreground">Cheguei Família</div>
                <div className="text-sm text-muted-foreground">A celebração que fica pra sempre</div>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
              Transformamos chás de bebê em experiências emocionantes e inesquecíveis. 
              Simples, bonito e cheio de carinho.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center 
                hover:bg-primary hover:text-primary-foreground transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center 
                hover:bg-secondary hover:text-secondary-foreground transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center 
                hover:bg-accent hover:text-accent-foreground transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Recursos</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Como funciona</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Exemplos de chás</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">CheguinhoBot</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Caixa de memórias</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Suporte</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Central de ajuda</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contato</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Termos de uso</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacidade</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="py-6 border-t border-border flex flex-col md:flex-row 
          justify-between items-center gap-4">
          <div className="text-muted-foreground text-sm">
            © 2025 Cheguei Família. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <span>Feito com</span>
            <Heart className="w-4 h-4 text-primary fill-primary" />
            <span>para famílias especiais</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
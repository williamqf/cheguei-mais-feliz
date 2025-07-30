import { Bot, Video, Gift, BarChart3, Heart, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import giftsImage from "@/assets/gifts-illustration.jpg";
import communityImage from "@/assets/community-illustration.jpg";
import useTilt from "@/hooks/useTilt";
import useParallax from "@/hooks/useParallax";

const differentials = [
  {
    icon: Video,
    title: "Recados em vídeo e áudio",
    description: "Emoção em tempo real com mensagens que ficam para sempre",
    color: "primary"
  },
  {
    icon: Bot,
    title: "Assistente inteligente",
    description: "CheguinhoBot ajuda você em cada passo da criação",
    color: "secondary"
  },
  {
    icon: Gift,
    title: "Caixa de memórias",
    description: "Guarde cada carinho em uma coleção especial",
    color: "accent"
  },
  {
    icon: BarChart3,
    title: "Design leve, sem complicações",
    description: "Interface fluida e moderna, pensada para emocionar",
    color: "primary"
  }
];

const DifferentialsSection = () => {
  const tiltRef = useTilt({ max: 10, scale: 1.02 });
  const parallaxRef = useParallax(0.2);

  return (
    <section id="recursos" className="section-padding bg-background scroll-animate" ref={parallaxRef}>
      <div className="container-fluid">
        {/* Header da seção */}
        <div className="text-center mb-16 fade-scale">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-primary animate-pulse-soft" />
            <span className="text-primary font-medium">Nossos Diferenciais</span>
            <Sparkles className="w-6 h-6 text-primary animate-pulse-soft" />
          </div>
          <h2 className="text-section-title mb-4">O que nos torna especiais?</h2>
          <p className="text-subtitle max-w-3xl mx-auto">
            Vá além do básico com recursos únicos que transformam seu chá de bebê 
            em uma experiência inesquecível
          </p>
        </div>

        {/* Grid principal */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Lado esquerdo - Diferenciais */}
          <div className="space-y-8">
            {differentials.map((item, index) => {
              const Icon = item.icon;
              return (
                <div 
                  key={index}
                  className="flex items-start gap-6 group scroll-animate"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0
                    transition-all duration-300 group-hover:scale-110 breathing magnetic-hover card-3d
                    ${item.color === 'primary' ? 'bg-primary/10 text-primary' : 
                      item.color === 'secondary' ? 'bg-secondary/10 text-secondary' : 
                      'bg-accent/10 text-accent'}`}>
                    <Icon className="w-7 h-7 gradient-shift hover-scale" />
                  </div>
                  
                  <div>
                    <h3 className={`text-xl font-semibold mb-2 transition-colors
                      ${item.color === 'primary' ? 'text-primary' : 
                        item.color === 'secondary' ? 'text-secondary' : 'text-accent'}`}>
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Lado direito - Imagem */}
          <div className="relative scroll-animate slide-reveal">
            <div className="relative" ref={tiltRef}>
              <img 
                src={giftsImage} 
                alt="Presentes especiais" 
                className="w-full h-auto rounded-3xl shadow-lg hover-lift card-3d"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl"></div>
            </div>
            
            {/* Badge flutuante */}
            <div className="absolute -top-4 -left-4 bg-primary/90 text-primary-foreground 
              px-4 py-2 rounded-full text-sm font-medium breathing magnetic-hover">
              ✨ Exclusivo ChegueiApp
            </div>
          </div>
        </div>

        {/* Seção de destaque - Timeline do Chá */}
        <div className="bg-gradient-to-r from-secondary/10 via-accent/10 to-primary/10 
          rounded-3xl p-8 md:p-12 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Heart className="w-8 h-8 text-primary animate-pulse-soft" />
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              Timeline do Chá Interativa
            </h3>
            <Heart className="w-8 h-8 text-primary animate-pulse-soft" />
          </div>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Acompanhe o progresso do seu evento com gamificação suave: 
            20% dos presentes arrecadados, 30 pessoas confirmadas, e muito mais!
          </p>
          
          {/* Barra de progresso visual */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-primary rounded-full animate-pulse-soft"></div>
              <span className="text-sm text-muted-foreground">Lista criada</span>
            </div>
            <div className="w-8 h-0.5 bg-primary/30"></div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-secondary rounded-full animate-pulse-soft delay-300"></div>
              <span className="text-sm text-muted-foreground">20% arrecadado</span>
            </div>
            <div className="w-8 h-0.5 bg-secondary/30"></div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-accent rounded-full animate-pulse-soft delay-500"></div>
              <span className="text-sm text-muted-foreground">Convidados confirmados</span>
            </div>
          </div>
          
          <Link to="/recursos" className="btn-accent">
            Ver todos os recursos
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
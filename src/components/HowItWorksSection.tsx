import { Gift, Users, MessageCircle, CreditCard } from "lucide-react";
import { Link } from "react-router-dom";
import useTilt from "@/hooks/useTilt";

const steps = [
  {
    icon: Gift,
    title: "Crie sua lista de presentes",
    description: "Monte sua lista virtual com itens categorizados e valores variados",
    color: "primary"
  },
  {
    icon: Users,
    title: "Compartilhe com amigos e familiares", 
    description: "Envie convites via WhatsApp, e-mail ou link personalizado",
    color: "secondary"
  },
  {
    icon: MessageCircle,
    title: "Receba mensagens, áudios e vídeos",
    description: "Coleção especial de recadinhos que ficam para sempre",
    color: "accent"
  },
  {
    icon: CreditCard,
    title: "Converta presentes em apoio financeiro",
    description: "Receba via Pix de forma segura e transparente",
    color: "primary"
  }
];

const HowItWorksSection = () => {
  const tiltRef = useTilt({ max: 15, scale: 1.05 });

  return (
    <section id="como-funciona" className="py-20 md:py-24 bg-neutral/30 scroll-animate">
      <div className="container-fluid">
        <div className="text-center mb-16 fade-scale">
          <h2 className="text-section-title mb-4 text-foreground">Como funciona?</h2>
          <p className="text-subtitle max-w-2xl mx-auto text-foreground/80">
            Em poucos passos você cria uma experiência única para o seu chá de bebê
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div 
                key={index} 
                className="card-floating text-center group min-h-[280px] flex flex-col justify-start p-6"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center magnetic-hover
                  ${step.color === 'primary' ? 'bg-primary/10' : 
                    step.color === 'secondary' ? 'bg-secondary/10' : 'bg-accent/10'}`}>
                  <Icon className={`w-8 h-8 hover-scale
                    ${step.color === 'primary' ? 'text-primary' : 
                      step.color === 'secondary' ? 'text-secondary' : 'text-accent'}`} />
                </div>
                
                <div className={`text-lg font-semibold mb-4 
                  ${step.color === 'primary' ? 'text-primary' : 
                    step.color === 'secondary' ? 'text-secondary' : 'text-accent'}`}>
                  {step.title}
                </div>
                
                <p className="text-foreground/90 leading-relaxed text-sm flex-grow">
                  {step.description}
                </p>
                
                {/* Número do passo */}
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-primary rounded-full 
                  flex items-center justify-center text-primary-foreground text-sm font-bold
                  opacity-0 group-hover:opacity-100 transition-opacity">
                  {index + 1}
                </div>
              </div>
            );
          })}
        </div>
        
        {/* CTA adicional */}
        <div className="text-center mt-20">
          <p className="text-foreground/70 mb-6">Simples assim! Pronto para começar?</p>
          <Link to="/criar-cha" className="btn-hero">
            Criar meu chá de bebê agora
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
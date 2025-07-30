import { TrendingUp, Users, Heart, DollarSign } from "lucide-react";
import { useEffect, useState } from "react";
import useTilt from "@/hooks/useTilt";

const SocialProofSection = () => {
  const tiltRef = useTilt({ max: 10, scale: 1.02 });
  const [counters, setCounters] = useState({
    events: 0,
    families: 0,
    raised: 0,
    messages: 0
  });

  // Animate counters when component mounts
  useEffect(() => {
    const targets = { events: 1234, families: 856, raised: 2500000, messages: 5834 };
    const duration = 2000; // 2 seconds
    const steps = 60; // 60 steps for smooth animation
    const stepDuration = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      
      setCounters({
        events: Math.floor(targets.events * progress),
        families: Math.floor(targets.families * progress),
        raised: Math.floor(targets.raised * progress),
        messages: Math.floor(targets.messages * progress)
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounters(targets);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, []);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };

  const formatNumber = (value: number) => {
    return new Intl.NumberFormat('pt-BR').format(value);
  };

  return (
    <section className="py-16 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 scroll-animate">
      <div className="container-fluid">
        <div className="text-center mb-12 fade-scale">
          <div className="inline-flex items-center gap-2 bg-primary/20 px-4 py-2 rounded-full mb-4">
            <TrendingUp className="w-4 h-4 text-primary" />
            <span className="text-primary font-medium text-sm">Esta semana</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Números que emocionam
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Famílias reais criando momentos únicos e recebendo muito amor através do ChegueFamília
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {/* Chás criados */}
          <div className="text-center group scroll-animate" ref={tiltRef}>
            <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4 
              group-hover:scale-110 transition-transform breathing card-3d magnetic-hover">
              <Heart className="w-8 h-8 text-primary gradient-shift" fill="currentColor" />
            </div>
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2 typewriter">
              {formatNumber(counters.events)}+
            </div>
            <div className="text-sm text-muted-foreground">
              Chás criados
            </div>
          </div>

          {/* Famílias felizes */}
          <div className="text-center group scroll-animate" style={{ animationDelay: '200ms' }}>
            <div className="w-16 h-16 bg-secondary/20 rounded-2xl flex items-center justify-center mx-auto mb-4 
              group-hover:scale-110 transition-transform breathing card-3d magnetic-hover">
              <Users className="w-8 h-8 text-secondary gradient-shift" />
            </div>
            <div className="text-3xl md:text-4xl font-bold text-secondary mb-2 typewriter">
              {formatNumber(counters.families)}+
            </div>
            <div className="text-sm text-muted-foreground">
              Famílias felizes
            </div>
          </div>

          {/* Total arrecadado */}
          <div className="text-center group scroll-animate" style={{ animationDelay: '400ms' }}>
            <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-4 
              group-hover:scale-110 transition-transform breathing card-3d magnetic-hover">
              <DollarSign className="w-8 h-8 text-accent gradient-shift" />
            </div>
            <div className="text-2xl md:text-3xl font-bold text-accent mb-2 typewriter">
              {formatCurrency(counters.raised)}
            </div>
            <div className="text-sm text-muted-foreground">
              Total arrecadado
            </div>
          </div>

          {/* Mensagens de carinho */}
          <div className="text-center group scroll-animate" style={{ animationDelay: '600ms' }}>
            <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4 
              group-hover:scale-110 transition-transform breathing card-3d magnetic-hover">
              <Heart className="w-8 h-8 text-primary gradient-shift" />
            </div>
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2 typewriter">
              {formatNumber(counters.messages)}+
            </div>
            <div className="text-sm text-muted-foreground">
              Mensagens de amor
            </div>
          </div>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-8 mt-12 pt-8 border-t border-border/50">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span>100% Seguro</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
            <span>LGPD Compliance</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
            <span>Grátis para sempre</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <div className="w-3 h-3 bg-pink-500 rounded-full animate-pulse"></div>
            <span>Suporte 24/7</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
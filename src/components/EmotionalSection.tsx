import { Heart } from "lucide-react";

const EmotionalSection = () => {
  return (
    <section className="pt-8 md:pt-12 pb-16 md:pb-20 bg-gradient-to-r from-primary/10 via-secondary/8 to-accent/10 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-morphing-gradient"></div>
        <div className="absolute bottom-10 right-1/4 w-48 h-48 bg-secondary/5 rounded-full blur-3xl animate-morphing-gradient" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container-fluid relative z-10">
        <div className="max-w-4xl mx-auto text-center scroll-animate">
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center animate-pulse-soft breathing hover-scale card-3d">
              <Heart className="w-8 h-8 text-primary" fill="currentColor" />
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8 font-serif leading-tight animate-text-reveal">
            Seu momento especial merece ser celebrado com <span className="gradient-shift bg-clip-text text-transparent">amor</span>
          </h2>
          
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed max-w-2xl mx-auto fade-scale">
            Cada detalhe do seu chá de bebê é pensado para criar memórias únicas 
            e conectar todos que amam você e seu bebê.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EmotionalSection;
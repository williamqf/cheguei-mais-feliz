import { Heart } from "lucide-react";

const EmotionalSection = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5">
      <div className="container-fluid">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center animate-pulse-soft">
              <Heart className="w-8 h-8 text-primary" fill="currentColor" />
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8 font-serif leading-tight">
            Seu momento especial merece ser celebrado com amor
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Cada detalhe do seu chá de bebê é pensado para criar memórias únicas 
            e conectar todos que amam você e seu bebê.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EmotionalSection;
import { ArrowRight, Sparkles, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-baby-illustration.jpg";
import babyMascot from "@/assets/baby-mascot.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-hero flex items-center justify-center overflow-hidden pt-16">
      {/* Background decorativo */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5"></div>
      
      {/* Elementos flutuantes */}
      <div className="absolute top-20 left-10 animate-float">
        <Heart className="w-8 h-8 text-primary/30" />
      </div>
      <div className="absolute top-40 right-20 animate-float delay-1000">
        <Sparkles className="w-6 h-6 text-secondary/40" />
      </div>
      <div className="absolute bottom-32 left-20 animate-gentle-bounce">
        <Heart className="w-6 h-6 text-accent/30" />
      </div>
      
      <div className="container-fluid relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Conteúdo textual */}
          <div className="text-center lg:text-left animate-slide-up">
            <div className="flex items-center justify-center lg:justify-start mb-6">
              <img 
                src={babyMascot} 
                alt="ChegueiApp Mascote" 
                className="w-16 h-16 rounded-full mr-4 animate-pulse-soft"
              />
              <span className="text-lg font-medium text-primary">ChegueiApp</span>
            </div>
            
            <h1 className="text-hero mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              A nova forma de celebrar o chá de bebê
            </h1>
            
            <p className="text-subtitle mb-8 max-w-xl mx-auto lg:mx-0">
              Organize, compartilhe, emocione e receba apoio com um toque. 
              <strong className="text-primary"> Tudo num só lugar.</strong>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/criar-cha" className="btn-hero group">
                Crie seu chá de bebê grátis
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <a href="#como-funciona" className="btn-secondary">
                Ver como funciona
              </a>
            </div>
            
            <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse-soft"></div>
                <span>100% gratuito</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-secondary rounded-full animate-pulse-soft delay-200"></div>
                <span>Sem complicações</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-accent rounded-full animate-pulse-soft delay-400"></div>
                <span>Super fácil</span>
              </div>
            </div>
          </div>
          
          {/* Imagem principal */}
          <div className="relative animate-fade-in delay-300">
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Ilustração do chá de bebê" 
                className="w-full h-auto rounded-3xl shadow-2xl hover-lift"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent rounded-3xl"></div>
            </div>
            
            {/* Card flutuante com estatísticas */}
            <div className="absolute -bottom-6 -left-6 bg-card/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover-lift">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">1.2k+</div>
                  <div className="text-sm text-muted-foreground">Chás criados</div>
                </div>
              </div>
            </div>
            
            {/* Card flutuante com depoimento */}
            <div className="absolute -top-6 -right-6 bg-card/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg hover-lift max-w-xs">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="text-sm text-foreground mb-1">"Emocionante e fácil!"</p>
                  <p className="text-xs text-muted-foreground">— Mamãe do João</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
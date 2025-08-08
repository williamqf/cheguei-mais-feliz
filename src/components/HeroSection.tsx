import { ArrowRight, Sparkles, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import heroImage from "@/assets/hero-baby-illustration.jpg";
import useParallax from "@/hooks/useParallax";
import useMousePosition from "@/hooks/useMousePosition";
import useTilt from "@/hooks/useTilt";
const HeroSection = () => {
  const parallaxRef = useParallax(0.3);
  const mousePosition = useMousePosition();
  const tiltRef = useTilt({ max: 20, scale: 1.05 });
  const [animationData, setAnimationData] = useState<any>(null);

  useEffect(() => {
    // Lazy load Lottie animation from public folder (fallback gracefully if unavailable)
    fetch('/lottie/baby.json')
      .then((res) => (res.ok ? res.json() : Promise.reject()))
      .then((data) => setAnimationData(data))
      .catch(() => {
        // no-op: keep hero image if animation is missing
      });
  }, []);

  return <section id="top" className="relative h-screen bg-hero flex items-center justify-center overflow-hidden pt-16 pb-8">
      {/* Background com microanimações */}
      <div ref={parallaxRef as any} className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/15 to-accent/20 -z-10"></div>
      
      {/* Elementos flutuantes com microanimações suaves e seguem o mouse */}
      <div 
        className="absolute top-20 left-10 animate-float parallax-element"
        style={{
          transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`
        }}
      >
        <div className="w-12 h-12 bg-primary/20 rounded-full animate-pulse-soft breathing"></div>
      </div>
      <div 
        className="absolute top-32 right-16 animate-float delay-1000 parallax-element"
        style={{
          transform: `translate(${mousePosition.x * -0.008}px, ${mousePosition.y * 0.008}px)`
        }}
      >
        <Heart className="w-8 h-8 text-primary animate-pulse-soft hover-scale" />
      </div>
      <div 
        className="absolute top-56 left-1/4 animate-gentle-bounce delay-500 parallax-element"
        style={{
          transform: `translate(${mousePosition.x * 0.012}px, ${mousePosition.y * -0.006}px)`
        }}
      >
        <div className="w-8 h-8 bg-secondary/60 rounded-full animate-pulse-soft delay-300 breathing"></div>
      </div>
      <div 
        className="absolute bottom-40 right-24 animate-float delay-2000 parallax-element"
        style={{
          transform: `translate(${mousePosition.x * -0.015}px, ${mousePosition.y * 0.01}px)`
        }}
      >
        <Sparkles className="w-6 h-6 text-accent animate-pulse-soft delay-500 hover-scale" />
      </div>
      <div 
        className="absolute bottom-32 left-20 animate-gentle-bounce parallax-element"
        style={{
          transform: `translate(${mousePosition.x * 0.006}px, ${mousePosition.y * -0.008}px)`
        }}
      >
        <div className="w-10 h-10 bg-accent/60 rounded-full animate-pulse-soft delay-700 breathing"></div>
      </div>
      
      <div className="container-fluid relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Conteúdo textual */}
          <div className="text-center lg:text-left scroll-animate fade-scale space-y-8">
            
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-8 font-serif">
              <span className="text-foreground">Cheguei Família — </span>
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                A nova forma de celebrar o chá de bebê
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
              Organize, compartilhe e emocione com carinho e praticidade.
              Crie seu chá com presentes virtuais, mensagens e muito amor.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mb-12">
              <Link to="/criar-cha" className="btn-hero group text-lg px-10 py-5">
                Crie seu chá de bebê grátis
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <a href="#como-funciona" className="btn-secondary text-lg px-8 py-4">
                Ver como funciona
              </a>
            </div>
            
            <div className="flex items-center justify-center lg:justify-start gap-8 text-base text-foreground/70">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-primary rounded-full animate-pulse-soft"></div>
                <span>100% gratuito</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-secondary rounded-full animate-pulse-soft delay-200"></div>
                <span>Sem complicações</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-accent rounded-full animate-pulse-soft delay-400"></div>
                <span>Super fácil</span>
              </div>
            </div>
          </div>
          
          {/* Imagem principal */}
          <div className="relative scroll-animate slide-reveal">
            <div className="relative">
              {animationData && (
                <div className="absolute -top-10 -left-10 w-40 h-40 md:w-56 md:h-56 pointer-events-none">
                  <Lottie animationData={animationData} loop autoplay />
                </div>
              )}
              <img src={heroImage} alt="Ilustração do chá de bebê" className="w-full h-auto rounded-3xl shadow-2xl hover-lift" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent rounded-3xl"></div>
            </div>
            
            
            {/* Card flutuante com depoimento */}
            <div className="absolute -top-6 -right-6 bg-card/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg hover-lift card-3d magnetic-hover max-w-xs">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center breathing">
                  <Sparkles className="w-5 h-5 text-secondary gradient-shift" />
                </div>
                <div>
                  <p className="text-sm text-foreground mb-1 typewriter">"Emocionante e fácil!"</p>
                  <p className="text-xs text-muted-foreground">— Mamãe do João</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;
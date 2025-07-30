import { Star, Quote } from "lucide-react";
import useTilt from "@/hooks/useTilt";

const testimonials = [
  {
    name: "Juliana Santos",
    role: "Mamãe do Caio",
    content: "Organizar o chá do meu filho foi emocionante. ChegueiApp fez tudo fácil e lindo!",
    rating: 5,
    avatar: "JS"
  },
  {
    name: "Pedro e Ana",
    role: "Pais da Sofia",
    content: "Os recadinhos em vídeo dos nossos amigos foram o que mais nos emocionou. Incrível!",
    rating: 5,
    avatar: "PA"
  },
  {
    name: "Mariana Costa",
    role: "Mamãe do Lucas",
    content: "A caixa de memórias é um presente que levaremos para sempre. Muito obrigada!",
    rating: 5,
    avatar: "MC"
  }
];

const TestimonialsSection = () => {
  const tiltRef = useTilt({ max: 12, scale: 1.03 });

  return (
    <section id="depoimentos" className="section-padding bg-neutral/30 scroll-animate">
      <div className="container-fluid">
        <div className="text-center mb-16 fade-scale">
          <h2 className="text-section-title mb-4">O que dizem os papais</h2>
          <p className="text-subtitle max-w-2xl mx-auto">
            Histórias reais de famílias que criaram momentos inesquecíveis com o ChegueiApp
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="card-floating group scroll-animate card-3d"
              style={{ animationDelay: `${index * 200}ms` }}
              ref={index === 0 ? tiltRef : undefined}
            >
              {/* Quote icon */}
              <div className="flex justify-center mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center breathing magnetic-hover">
                  <Quote className="w-6 h-6 text-primary gradient-shift" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground text-center leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary 
                  rounded-full flex items-center justify-center text-white font-semibold">
                  {testimonial.avatar}
                </div>
                <div className="text-center">
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 
                rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              </div>
            </div>
          ))}
        </div>

        {/* Stats section */}
        <div className="mt-20 bg-gradient-to-r from-primary/10 to-secondary/10 
          rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">1.2k+</div>
              <div className="text-muted-foreground">Chás criados</div>
            </div>
            <div className="animate-fade-in delay-200">
              <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">98%</div>
              <div className="text-muted-foreground">Satisfação</div>
            </div>
            <div className="animate-fade-in delay-400">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">5.8k</div>
              <div className="text-muted-foreground">Recadinhos enviados</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
import { useState } from "react";
import { Heart, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const QuickSignupSection = () => {
  const [formData, setFormData] = useState({
    parentName: '',
    dueDate: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Preparado para integração com Supabase futuramente
    console.log('Criando chá para:', formData);
    // Aqui será implementada a criação do evento
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 scroll-animate">
      <div className="container-fluid">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 fade-scale">
            <div className="inline-flex items-center gap-2 bg-primary/20 px-4 py-2 rounded-full mb-6">
              <Heart className="w-4 h-4 text-primary animate-pulse-soft" fill="currentColor" />
              <span className="text-primary font-medium text-sm">Vamos começar</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Crie seu chá de bebê em{" "}
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                30 segundos
              </span>
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Compartilhe a alegria da chegada do seu bebê de forma simples e emocionante
            </p>
          </div>

          <div className="card-floating max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="parentName" className="text-foreground font-medium">
                    Nome da mamãe/papai
                  </Label>
                  <Input
                    id="parentName"
                    type="text"
                    placeholder="Ex: Maria Silva"
                    value={formData.parentName}
                    onChange={(e) => handleInputChange('parentName', e.target.value)}
                    className="h-12 text-lg"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="dueDate" className="text-foreground font-medium">
                    Data prevista de nascimento
                  </Label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      id="dueDate"
                      type="date"
                      value={formData.dueDate}
                      onChange={(e) => handleInputChange('dueDate', e.target.value)}
                      className="h-12 text-lg pl-10"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Button 
                  type="submit" 
                  className="w-full h-14 text-lg btn-hero group"
                  disabled={!formData.parentName || !formData.dueDate}
                >
                  Criar chá agora
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              <div className="text-center pt-4">
                <p className="text-sm text-muted-foreground">
                  ✨ Totalmente gratuito • 💝 Sem complicações • 🚀 Resultados em minutos
                </p>
              </div>
            </form>
          </div>

          {/* Depoimento rápido */}
          <div className="text-center mt-12 fade-scale">
            <div className="max-w-md mx-auto">
              <div className="flex items-center justify-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Heart key={i} className="w-4 h-4 text-primary animate-pulse-soft" fill="currentColor" style={{animationDelay: `${i * 200}ms`}} />
                ))}
              </div>
              <p className="text-muted-foreground italic">
                "Em menos de 1 minuto já estava compartilhando meu chá com toda a família!"
              </p>
              <p className="text-sm text-muted-foreground mt-2">— Ana, mãe da Sofia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickSignupSection;
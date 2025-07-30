import { useState } from "react";
import { ArrowRight, Calendar, User, Baby } from "lucide-react";
import useTilt from "@/hooks/useTilt";

const CTASection = () => {
  const tiltRef = useTilt({ max: 8, scale: 1.02 });
  const [formData, setFormData] = useState({
    parentName: "",
    babyName: "",
    dueDate: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui seria a integração com o backend
    console.log("Dados do formulário:", formData);
    // Redirecionar para página de criação de chá
    window.location.href = "/criar-cha";
  };

  return (
    <section id="contato" className="section-padding bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 scroll-animate">
      <div className="container-fluid">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-12 fade-scale">
            <h2 className="text-section-title mb-6">
              Crie seu chá de bebê agora mesmo
            </h2>
            <p className="text-subtitle">
              <strong className="text-primary">Grátis, bonito e emocionante.</strong> 
              Em poucos minutos você terá uma página única para celebrar a chegada do seu bebê.
            </p>
          </div>

          {/* Formulário */}
          <div className="max-w-2xl mx-auto scroll-animate" style={{ animationDelay: '200ms' }}>
            <div className="card-floating card-3d" ref={tiltRef}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Nome do pai/mãe */}
                  <div className="relative">
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Nome da mamãe ou papai
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <input
                        type="text"
                        value={formData.parentName}
                        onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 border border-border rounded-xl 
                          focus:ring-2 focus:ring-primary focus:border-transparent
                          bg-background text-foreground placeholder-muted-foreground
                          transition-all duration-200"
                        placeholder="Seu nome"
                        required
                      />
                    </div>
                  </div>

                  {/* Nome do bebê */}
                  <div className="relative">
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Nome do bebê (opcional)
                    </label>
                    <div className="relative">
                      <Baby className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <input
                        type="text"
                        value={formData.babyName}
                        onChange={(e) => setFormData({ ...formData, babyName: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 border border-border rounded-xl 
                          focus:ring-2 focus:ring-secondary focus:border-transparent
                          bg-background text-foreground placeholder-muted-foreground
                          transition-all duration-200"
                        placeholder="Nome do bebê"
                      />
                    </div>
                  </div>
                </div>

                {/* Data prevista */}
                <div className="relative">
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Data prevista do nascimento
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type="date"
                      value={formData.dueDate}
                      onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 border border-border rounded-xl 
                        focus:ring-2 focus:ring-accent focus:border-transparent
                        bg-background text-foreground
                        transition-all duration-200"
                      required
                    />
                  </div>
                </div>

                {/* Botão de submit */}
                <button
                  type="submit"
                  className="btn-hero w-full group text-center magnetic-hover ripple-effect"
                >
                  Começar agora
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>

                {/* Texto de segurança */}
                <p className="text-sm text-muted-foreground">
                  ✅ 100% gratuito • ✅ Sem cartão de crédito • ✅ Pronto em 2 minutos
                </p>
              </form>
            </div>
          </div>

          {/* Features destacadas */}
          <div className="mt-16 grid md:grid-cols-3 gap-8 scroll-animate" style={{ animationDelay: '400ms' }}>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3 breathing magnetic-hover">
                <Baby className="w-6 h-6 text-primary gradient-shift" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Criação Rápida</h3>
              <p className="text-sm text-muted-foreground">Configure tudo em poucos minutos</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-3 breathing magnetic-hover">
                <User className="w-6 h-6 text-secondary gradient-shift" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Compartilhamento Fácil</h3>
              <p className="text-sm text-muted-foreground">Envie para amigos e família</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-3 breathing magnetic-hover">
                <Calendar className="w-6 h-6 text-accent gradient-shift" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Gestão Completa</h3>
              <p className="text-sm text-muted-foreground">Controle total do seu evento</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
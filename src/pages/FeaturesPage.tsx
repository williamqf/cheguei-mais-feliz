import { Bot, Video, Gift, BarChart3, Heart, MessageCircle, Calendar, Users, Zap, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import giftsImage from "@/assets/gifts-illustration.jpg";
import communityImage from "@/assets/community-illustration.jpg";

const FeaturesPage = () => {
  const essentialFeatures = [
    {
      icon: Gift,
      title: "Lista de Presentes Virtuais",
      description: "Itens categorizados com valores variados para atender todos os perfis de convidados",
      details: ["Presentes fictícios convertidos em dinheiro", "Confirmação automática ao doador", "Relatório completo de doações"]
    },
    {
      icon: Users,
      title: "Gestão de Convidados",
      description: "Controle completo de presença e comunicação com seus convidados",
      details: ["Convites via WhatsApp e e-mail", "RSVP automático", "Respostas personalizadas"]
    },
    {
      icon: MessageCircle,
      title: "Galeria de Emoções",
      description: "Área especial para recadinhos carinhosos que ficam para sempre",
      details: ["Mensagens de texto e voz", "Envio de fotos e vídeos", "Livro de memórias digital"]
    },
    {
      icon: BarChart3,
      title: "Painel Administrativo",
      description: "Dashboard intuitivo para acompanhar tudo em tempo real",
      details: ["Relatórios financeiros", "Lista de doadores", "Timeline do progresso"]
    }
  ];

  const differentialFeatures = [
    {
      icon: Bot,
      title: "CheguinhoBot - Assistente Virtual",
      description: "IA amigável que te ajuda em cada passo da criação",
      highlight: "Exclusivo ChegueiApp",
      color: "primary"
    },
    {
      icon: Video,
      title: "Recados em Vídeo e Áudio",
      description: "Mensagens emocionais que ficam guardadas para sempre",
      highlight: "Emoção em tempo real",
      color: "secondary"
    },
    {
      icon: Heart,
      title: "Caixa de Memórias Virtual",
      description: "Todos os recadinhos salvos como uma cápsula do tempo digital",
      highlight: "Download disponível",
      color: "accent"
    },
    {
      icon: Calendar,
      title: "Modo Evento Híbrido",
      description: "Integração com Google Meet, Zoom e transmissões ao vivo",
      highlight: "Presencial + Online",
      color: "primary"
    },
    {
      icon: Zap,
      title: "Timeline Interativa",
      description: "Gamificação suave para manter os pais motivados",
      highlight: "Progresso visual",
      color: "secondary"
    },
    {
      icon: Sparkles,
      title: "Inteligência de Recomendação",
      description: "Sugestões personalizadas baseadas no perfil do seu evento",
      highlight: "IA avançada",
      color: "accent"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-24 pb-12">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
          <div className="container-fluid text-center">
            <h1 className="text-hero mb-6">
              Recursos que fazem a <span className="text-primary">diferença</span>
            </h1>
            <p className="text-subtitle max-w-3xl mx-auto mb-8">
              Descubra todas as funcionalidades que tornam o ChegueiApp a melhor 
              plataforma para criar chás de bebê emocionantes e inesquecíveis.
            </p>
            <Link to="/criar-cha" className="btn-hero">
              Experimentar grátis
            </Link>
          </div>
        </section>

        {/* Funcionalidades Essenciais */}
        <section className="section-padding">
          <div className="container-fluid">
            <div className="text-center mb-16">
              <h2 className="text-section-title mb-4">Funcionalidades Essenciais</h2>
              <p className="text-subtitle max-w-2xl mx-auto">
                Tudo que você precisa para competir com as melhores plataformas do mercado
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {essentialFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="card-floating group">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          {feature.description}
                        </p>
                        <ul className="space-y-2">
                          {feature.details.map((detail, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Diferenciais Únicos */}
        <section className="section-padding bg-neutral/20">
          <div className="container-fluid">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Sparkles className="w-6 h-6 text-primary animate-pulse-soft" />
                <span className="text-primary font-medium">Nossos Diferenciais</span>
                <Sparkles className="w-6 h-6 text-primary animate-pulse-soft" />
              </div>
              <h2 className="text-section-title mb-4">O que nos torna únicos</h2>
              <p className="text-subtitle max-w-3xl mx-auto">
                Recursos inovadores que você não encontra em nenhuma outra plataforma
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {differentialFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="card-floating group text-center">
                    <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform
                      ${feature.color === 'primary' ? 'bg-primary/10' : 
                        feature.color === 'secondary' ? 'bg-secondary/10' : 'bg-accent/10'}`}>
                      <Icon className={`w-8 h-8 
                        ${feature.color === 'primary' ? 'text-primary' : 
                          feature.color === 'secondary' ? 'text-secondary' : 'text-accent'}`} />
                    </div>
                    
                    <div className="mb-3">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium
                        ${feature.color === 'primary' ? 'bg-primary/10 text-primary' : 
                          feature.color === 'secondary' ? 'bg-secondary/10 text-secondary' : 'bg-accent/10 text-accent'}`}>
                        {feature.highlight}
                      </span>
                    </div>
                    
                    <h3 className={`text-lg font-semibold mb-3
                      ${feature.color === 'primary' ? 'text-primary' : 
                        feature.color === 'secondary' ? 'text-secondary' : 'text-accent'}`}>
                      {feature.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Comparação Visual */}
        <section className="section-padding">
          <div className="container-fluid">
            <div className="text-center mb-16">
              <h2 className="text-section-title mb-4">ChegueiApp vs. Outras Plataformas</h2>
              <p className="text-subtitle max-w-2xl mx-auto">
                Veja por que somos a melhor escolha para seu chá de bebê
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <h3 className="text-lg font-semibold text-muted-foreground mb-4">Outras Plataformas</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 border-2 border-muted-foreground rounded"></div>
                      <span className="text-muted-foreground">Lista básica de presentes</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 border-2 border-muted-foreground rounded"></div>
                      <span className="text-muted-foreground">Design limitado</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 border-2 border-muted-foreground rounded"></div>
                      <span className="text-muted-foreground">Sem assistente virtual</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 border-2 border-muted-foreground rounded"></div>
                      <span className="text-muted-foreground">Funcionalidades básicas</span>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl"></div>
                  <div className="relative p-6">
                    <h3 className="text-lg font-semibold text-primary mb-4">ChegueiApp</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-4 h-4 bg-primary rounded-full"></div>
                        <span className="text-foreground">CheguinhoBot IA</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-4 h-4 bg-primary rounded-full"></div>
                        <span className="text-foreground">Recados em vídeo</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-4 h-4 bg-primary rounded-full"></div>
                        <span className="text-foreground">Caixa de memórias</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-4 h-4 bg-primary rounded-full"></div>
                        <span className="text-foreground">Timeline interativa</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-4 h-4 bg-primary rounded-full"></div>
                        <span className="text-foreground">Modo híbrido</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-muted-foreground mb-4">Plataformas Premium</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 bg-muted-foreground/30 rounded"></div>
                      <span className="text-muted-foreground">Caro</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 bg-muted-foreground/30 rounded"></div>
                      <span className="text-muted-foreground">Complexo</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 bg-muted-foreground/30 rounded"></div>
                      <span className="text-muted-foreground">Sem personalização</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 bg-muted-foreground/30 rounded"></div>
                      <span className="text-muted-foreground">Suporte limitado</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="section-padding bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
          <div className="container-fluid text-center">
            <h2 className="text-section-title mb-4">
              Pronto para experimentar?
            </h2>
            <p className="text-subtitle max-w-2xl mx-auto mb-8">
              Crie seu primeiro chá de bebê gratuitamente e descubra por que somos 
              a melhor escolha para sua família.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/criar-cha" className="btn-hero">
                Criar chá grátis
              </Link>
              <Link to="/login" className="btn-secondary">
                Ver exemplos
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FeaturesPage;
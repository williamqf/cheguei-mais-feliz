import { useState } from "react";
import { ArrowLeft, ArrowRight, Upload, Calendar, MapPin, Users, Palette, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

const CreateEventPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Informações básicas
    babyName: "",
    parentNames: "",
    dueDate: "",
    babyGender: "",
    
    // Evento
    eventDate: "",
    eventTime: "",
    eventType: "presencial", // presencial, online, hibrido
    location: "",
    onlineLink: "",
    
    // Personalização
    theme: "pastel",
    coverImage: null,
    welcomeMessage: "",
    
    // Lista de presentes
    giftCategories: []
  });

  const totalSteps = 4;

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      // Finalizar criação
      console.log("Criando evento:", formData);
      // Redirecionar para dashboard
      window.location.href = "/dashboard";
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const themes = [
    { id: "pastel", name: "Tons Pastéis", colors: ["#FFB5BA", "#B5A7E6", "#A7D8F0"] },
    { id: "nature", name: "Natureza", colors: ["#A8E6A3", "#FFE066", "#F4A261"] },
    { id: "classic", name: "Clássico", colors: ["#E8C5C5", "#C5D9E8", "#E8E5C5"] },
    { id: "modern", name: "Moderno", colors: ["#FF6B9D", "#8B5FBF", "#4ECDC4"] }
  ];

  const giftCategories = [
    { id: "diapers", name: "Fraldas", icon: "🧷", suggested: true },
    { id: "clothes", name: "Roupinhas", icon: "👶", suggested: true },
    { id: "toys", name: "Brinquedos", icon: "🧸", suggested: true },
    { id: "care", name: "Cuidados", icon: "🍼", suggested: true },
    { id: "decoration", name: "Decoração", icon: "🎨", suggested: false },
    { id: "books", name: "Livrinhos", icon: "📚", suggested: false }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-24 pb-12">
        <div className="container-fluid max-w-4xl">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-2xl font-bold text-foreground">
                Criar Chá de Bebê
              </h1>
              <span className="text-sm text-muted-foreground">
                Passo {currentStep} de {totalSteps}
              </span>
            </div>
            
            <div className="w-full bg-neutral/30 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-500"
                style={{ width: `${(currentStep / totalSteps) * 100}%` }}
              />
            </div>
          </div>

          {/* Form Steps */}
          <div className="card-floating">
            {/* Passo 1: Informações do Bebê */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="text-2xl font-semibold text-foreground mb-2">
                    Conte-nos sobre o bebê
                  </h2>
                  <p className="text-muted-foreground">
                    Vamos personalizar tudo para essa chegada especial
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Nome do bebê
                    </label>
                    <input
                      type="text"
                      value={formData.babyName}
                      onChange={(e) => setFormData({ ...formData, babyName: e.target.value })}
                      className="w-full px-4 py-3 border border-border rounded-xl 
                        focus:ring-2 focus:ring-primary focus:border-transparent
                        bg-background text-foreground placeholder-muted-foreground"
                      placeholder="Nome do bebê"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Pais/Responsáveis
                    </label>
                    <input
                      type="text"
                      value={formData.parentNames}
                      onChange={(e) => setFormData({ ...formData, parentNames: e.target.value })}
                      className="w-full px-4 py-3 border border-border rounded-xl 
                        focus:ring-2 focus:ring-primary focus:border-transparent
                        bg-background text-foreground placeholder-muted-foreground"
                      placeholder="Ana e Pedro Santos"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Data prevista do nascimento
                    </label>
                    <input
                      type="date"
                      value={formData.dueDate}
                      onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
                      className="w-full px-4 py-3 border border-border rounded-xl 
                        focus:ring-2 focus:ring-primary focus:border-transparent
                        bg-background text-foreground"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Sexo do bebê (opcional)
                    </label>
                    <select
                      value={formData.babyGender}
                      onChange={(e) => setFormData({ ...formData, babyGender: e.target.value })}
                      className="w-full px-4 py-3 border border-border rounded-xl 
                        focus:ring-2 focus:ring-primary focus:border-transparent
                        bg-background text-foreground"
                    >
                      <option value="">Selecionar</option>
                      <option value="boy">Menino</option>
                      <option value="girl">Menina</option>
                      <option value="surprise">Surpresa</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Passo 2: Detalhes do Evento */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="w-8 h-8 text-secondary" />
                  </div>
                  <h2 className="text-2xl font-semibold text-foreground mb-2">
                    Quando e onde será?
                  </h2>
                  <p className="text-muted-foreground">
                    Configure os detalhes do seu chá de bebê
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Data do chá
                    </label>
                    <input
                      type="date"
                      value={formData.eventDate}
                      onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                      className="w-full px-4 py-3 border border-border rounded-xl 
                        focus:ring-2 focus:ring-secondary focus:border-transparent
                        bg-background text-foreground"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Horário
                    </label>
                    <input
                      type="time"
                      value={formData.eventTime}
                      onChange={(e) => setFormData({ ...formData, eventTime: e.target.value })}
                      className="w-full px-4 py-3 border border-border rounded-xl 
                        focus:ring-2 focus:ring-secondary focus:border-transparent
                        bg-background text-foreground"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-4">
                    Tipo de evento
                  </label>
                  <div className="grid md:grid-cols-3 gap-4">
                    {[
                      { value: "presencial", label: "Presencial", icon: MapPin },
                      { value: "online", label: "Online", icon: Users },
                      { value: "hibrido", label: "Híbrido", icon: Calendar }
                    ].map((type) => {
                      const Icon = type.icon;
                      return (
                        <button
                          key={type.value}
                          onClick={() => setFormData({ ...formData, eventType: type.value })}
                          className={`p-4 border border-border rounded-xl text-center transition-all ${
                            formData.eventType === type.value
                              ? "border-secondary bg-secondary/10 text-secondary"
                              : "hover:border-secondary/50"
                          }`}
                        >
                          <Icon className="w-6 h-6 mx-auto mb-2" />
                          <span className="text-sm font-medium">{type.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {(formData.eventType === "presencial" || formData.eventType === "hibrido") && (
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Local do evento
                    </label>
                    <input
                      type="text"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full px-4 py-3 border border-border rounded-xl 
                        focus:ring-2 focus:ring-secondary focus:border-transparent
                        bg-background text-foreground placeholder-muted-foreground"
                      placeholder="Endereço, salão de festas, casa..."
                    />
                  </div>
                )}

                {(formData.eventType === "online" || formData.eventType === "hibrido") && (
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Link da transmissão
                    </label>
                    <input
                      type="url"
                      value={formData.onlineLink}
                      onChange={(e) => setFormData({ ...formData, onlineLink: e.target.value })}
                      className="w-full px-4 py-3 border border-border rounded-xl 
                        focus:ring-2 focus:ring-secondary focus:border-transparent
                        bg-background text-foreground placeholder-muted-foreground"
                      placeholder="https://meet.google.com/..."
                    />
                  </div>
                )}
              </div>
            )}

            {/* Passo 3: Personalização */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Palette className="w-8 h-8 text-accent" />
                  </div>
                  <h2 className="text-2xl font-semibold text-foreground mb-2">
                    Deixe com a sua cara
                  </h2>
                  <p className="text-muted-foreground">
                    Escolha o tema e personalize sua página
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-4">
                    Tema visual
                  </label>
                  <div className="grid md:grid-cols-2 gap-4">
                    {themes.map((theme) => (
                      <button
                        key={theme.id}
                        onClick={() => setFormData({ ...formData, theme: theme.id })}
                        className={`p-4 border border-border rounded-xl transition-all ${
                          formData.theme === theme.id
                            ? "border-accent bg-accent/10"
                            : "hover:border-accent/50"
                        }`}
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <div className="flex gap-1">
                            {theme.colors.map((color, index) => (
                              <div
                                key={index}
                                className="w-4 h-4 rounded-full"
                                style={{ backgroundColor: color }}
                              />
                            ))}
                          </div>
                          <span className="font-medium text-foreground">{theme.name}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Mensagem de boas-vindas
                  </label>
                  <textarea
                    value={formData.welcomeMessage}
                    onChange={(e) => setFormData({ ...formData, welcomeMessage: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 border border-border rounded-xl 
                      focus:ring-2 focus:ring-accent focus:border-transparent
                      bg-background text-foreground placeholder-muted-foreground resize-none"
                    placeholder="Escreva uma mensagem especial para seus convidados..."
                  />
                </div>
              </div>
            )}

            {/* Passo 4: Lista de Presentes */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="text-2xl font-semibold text-foreground mb-2">
                    Sua lista de presentes
                  </h2>
                  <p className="text-muted-foreground">
                    Selecione as categorias que você gostaria de receber
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  {giftCategories.map((category) => (
                    <label
                      key={category.id}
                      className="flex items-center gap-4 p-4 border border-border rounded-xl 
                        hover:border-primary/50 transition-colors cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={formData.giftCategories.includes(category.id)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setFormData({
                              ...formData,
                              giftCategories: [...formData.giftCategories, category.id]
                            });
                          } else {
                            setFormData({
                              ...formData,
                              giftCategories: formData.giftCategories.filter(id => id !== category.id)
                            });
                          }
                        }}
                        className="w-5 h-5 text-primary rounded border-border 
                          focus:ring-2 focus:ring-primary focus:ring-offset-0"
                      />
                      <span className="text-2xl">{category.icon}</span>
                      <div className="flex-1">
                        <div className="font-medium text-foreground">{category.name}</div>
                        {category.suggested && (
                          <div className="text-xs text-primary">Sugerido</div>
                        )}
                      </div>
                    </label>
                  ))}
                </div>

                <div className="bg-neutral/30 rounded-xl p-4">
                  <p className="text-sm text-muted-foreground">
                    💡 <strong>Dica:</strong> Você poderá personalizar os itens específicos e valores 
                    após criar o evento no seu painel de controle.
                  </p>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center mt-8 pt-6 border-t border-border">
              <div>
                {currentStep > 1 ? (
                  <button
                    onClick={handlePrev}
                    className="btn-secondary flex items-center gap-2"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Voltar
                  </button>
                ) : (
                  <Link to="/dashboard" className="btn-secondary flex items-center gap-2">
                    <ArrowLeft className="w-4 h-4" />
                    Cancelar
                  </Link>
                )}
              </div>

              <button
                onClick={handleNext}
                className="btn-hero flex items-center gap-2"
              >
                {currentStep === totalSteps ? "Criar chá de bebê" : "Próximo"}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateEventPage;
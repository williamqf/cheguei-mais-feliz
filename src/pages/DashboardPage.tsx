import { useState } from "react";
import { Plus, Search, Filter } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import EventCard from "@/components/EventCard";
import DashboardSidebar from "@/components/DashboardSidebar";
import DashboardCards from "@/components/DashboardCards";

const DashboardPage = () => {
  const [activeSection, setActiveSection] = useState("overview");
  const [searchTerm, setSearchTerm] = useState("");

  // Dados mockados - em produção viriam da API
  const userEvents = [
    {
      id: "1",
      babyName: "Sofia",
      parentNames: "Ana e Pedro Santos",
      dueDate: "2025-03-15",
      eventDate: "2025-02-20",
      location: "São Paulo, SP",
      guestsCount: 47,
      giftsReceived: 23,
      totalGifts: 30,
      amountRaised: 2850
    },
    {
      id: "2", 
      babyName: "Gabriel",
      parentNames: "Mariana Costa",
      dueDate: "2025-04-10",
      eventDate: "2025-03-25",
      location: "Rio de Janeiro, RJ",
      guestsCount: 35,
      giftsReceived: 18,
      totalGifts: 25,
      amountRaised: 1920
    }
  ];

  const filteredEvents = userEvents.filter(event =>
    event.babyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.parentNames.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-20 flex">
        {/* Sidebar */}
        <DashboardSidebar 
          activeSection={activeSection} 
          onSectionChange={setActiveSection} 
        />

        {/* Main Content */}
        <div className="flex-1 lg:ml-0">
          <div className="p-6 lg:p-8">
            {/* Header */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-8">
              <div>
                <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-2 font-serif">
                  Painel do Evento
                </h1>
                <p className="text-lg text-muted-foreground">
                  Acompanhe tudo sobre o chá de bebê da Sofia
                </p>
              </div>
              
              <Link to="/criar-cha" className="btn-hero flex items-center gap-2">
                <Plus className="w-5 h-5" />
                Criar novo chá
              </Link>
            </div>

            {/* Content based on active section */}
            {activeSection === "overview" && (
              <DashboardCards />
            )}

            {activeSection === "gifts" && (
              <div className="space-y-6">
                <div className="bg-card rounded-2xl p-8 border border-border">
                  <h2 className="text-2xl font-semibold mb-4 font-serif">Lista de Presentes</h2>
                  <p className="text-muted-foreground">Gerencie os presentes solicitados e acompanhe o que já foi presenteado.</p>
                </div>
              </div>
            )}

            {activeSection === "guests" && (
              <div className="space-y-6">
                <div className="bg-card rounded-2xl p-8 border border-border">
                  <h2 className="text-2xl font-semibold mb-4 font-serif">Lista de Convidados</h2>
                  <p className="text-muted-foreground">Gerencie sua lista de convidados e acompanhe as confirmações.</p>
                </div>
              </div>
            )}

            {activeSection === "gallery" && (
              <div className="space-y-6">
                <div className="bg-card rounded-2xl p-8 border border-border">
                  <h2 className="text-2xl font-semibold mb-4 font-serif">Galeria de Fotos</h2>
                  <p className="text-muted-foreground">Compartilhe momentos especiais da preparação e do evento.</p>
                </div>
              </div>
            )}

            {activeSection === "memories" && (
              <div className="space-y-6">
                <div className="bg-card rounded-2xl p-8 border border-border">
                  <h2 className="text-2xl font-semibold mb-4 font-serif">Memórias e Recados</h2>
                  <p className="text-muted-foreground">Veja todos os recados carinhosos deixados pelos convidados.</p>
                </div>
              </div>
            )}

            {activeSection === "settings" && (
              <div className="space-y-6">
                <div className="bg-card rounded-2xl p-8 border border-border">
                  <h2 className="text-2xl font-semibold mb-4 font-serif">Configurações do Evento</h2>
                  <p className="text-muted-foreground">Personalize as configurações do seu chá de bebê.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
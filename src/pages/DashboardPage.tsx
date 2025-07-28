import { useState } from "react";
import { Plus, Search, Filter, MoreVertical, Eye, Edit, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import EventCard from "@/components/EventCard";
import DashboardPreview from "@/components/DashboardPreview";

const DashboardPage = () => {
  const [activeTab, setActiveTab] = useState("events");
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
      
      <div className="pt-24 pb-12">
        <div className="container-fluid">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">
                Meus Chás de Bebê
              </h1>
              <p className="text-muted-foreground">
                Gerencie seus eventos e acompanhe o progresso
              </p>
            </div>
            
            <Link to="/criar-cha" className="btn-hero flex items-center gap-2">
              <Plus className="w-5 h-5" />
              Criar novo chá
            </Link>
          </div>

          {/* Tabs */}
          <div className="flex items-center gap-6 mb-8 border-b border-border">
            <button
              onClick={() => setActiveTab("events")}
              className={`pb-4 px-2 font-medium transition-colors border-b-2 ${
                activeTab === "events"
                  ? "text-primary border-primary"
                  : "text-muted-foreground border-transparent hover:text-foreground"
              }`}
            >
              Meus Eventos ({userEvents.length})
            </button>
            <button
              onClick={() => setActiveTab("analytics")}
              className={`pb-4 px-2 font-medium transition-colors border-b-2 ${
                activeTab === "analytics"
                  ? "text-primary border-primary"
                  : "text-muted-foreground border-transparent hover:text-foreground"
              }`}
            >
              Painel Detalhado
            </button>
          </div>

          {/* Conteúdo das tabs */}
          {activeTab === "events" && (
            <>
              {/* Filtros e busca */}
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Buscar por nome do bebê ou pais..."
                    className="w-full pl-10 pr-4 py-3 border border-border rounded-xl 
                      focus:ring-2 focus:ring-primary focus:border-transparent
                      bg-background text-foreground placeholder-muted-foreground"
                  />
                </div>
                <button className="btn-secondary flex items-center gap-2">
                  <Filter className="w-4 h-4" />
                  Filtros
                </button>
              </div>

              {/* Lista de eventos */}
              {filteredEvents.length > 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredEvents.map((event) => (
                    <EventCard key={event.id} event={event} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  {searchTerm ? (
                    <div>
                      <p className="text-muted-foreground mb-4">
                        Nenhum evento encontrado para "{searchTerm}"
                      </p>
                      <button 
                        onClick={() => setSearchTerm("")}
                        className="btn-secondary"
                      >
                        Limpar busca
                      </button>
                    </div>
                  ) : (
                    <div className="max-w-md mx-auto">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Plus className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        Crie seu primeiro chá de bebê!
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        É fácil e rápido. Em poucos minutos você terá uma página linda 
                        para compartilhar com amigos e família.
                      </p>
                      <Link to="/criar-cha" className="btn-hero">
                        Começar agora
                      </Link>
                    </div>
                  )}
                </div>
              )}
            </>
          )}

          {activeTab === "analytics" && (
            <div>
              <DashboardPreview />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
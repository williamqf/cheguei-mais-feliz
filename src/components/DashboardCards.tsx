import { Calendar, Gift, Users, MessageSquare, Share2, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DashboardCards = () => {
  // Dados mockados
  const eventData = {
    daysRemaining: 25,
    totalRaised: 2850,
    guestsConfirmed: 47,
    totalGuests: 65,
    messagesReceived: 23,
    eventTheme: "Rosa e Dourado"
  };

  const progressData = [
    {
      label: "Confirmações",
      current: eventData.guestsConfirmed,
      total: eventData.totalGuests,
      percentage: Math.round((eventData.guestsConfirmed / eventData.totalGuests) * 100)
    },
    {
      label: "Meta financeira",
      current: eventData.totalRaised,
      total: 3500,
      percentage: Math.round((eventData.totalRaised / 3500) * 100),
      isCurrency: true
    }
  ];

  return (
    <div className="space-y-8">
      {/* Cards principais */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Contagem regressiva */}
        <Card className="card-floating border-primary/20">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Contagem Regressiva
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary font-serif">
                {eventData.daysRemaining}
              </div>
              <p className="text-sm text-muted-foreground">dias restantes</p>
            </div>
          </CardContent>
        </Card>

        {/* Total arrecadado */}
        <Card className="card-floating border-secondary/20">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <Gift className="w-4 h-4" />
              Total Arrecadado
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-secondary font-serif">
                R$ {eventData.totalRaised.toLocaleString()}
              </div>
              <p className="text-sm text-muted-foreground">de R$ 3.500 meta</p>
            </div>
          </CardContent>
        </Card>

        {/* Convidados confirmados */}
        <Card className="card-floating border-accent/20">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <Users className="w-4 h-4" />
              Convidados
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-accent font-serif">
                {eventData.guestsConfirmed}
              </div>
              <p className="text-sm text-muted-foreground">de {eventData.totalGuests} convidados</p>
            </div>
          </CardContent>
        </Card>

        {/* Recados recebidos */}
        <Card className="card-floating border-neutral/20">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <MessageSquare className="w-4 h-4" />
              Recados
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-foreground font-serif">
                {eventData.messagesReceived}
              </div>
              <p className="text-sm text-muted-foreground">mensagens recebidas</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Card do tema atual */}
      <Card className="card-floating">
        <CardHeader>
          <CardTitle className="text-xl font-semibold font-serif flex items-center justify-between">
            Tema do Evento
            <button className="btn-secondary flex items-center gap-2 text-sm">
              <Share2 className="w-4 h-4" />
              Compartilhar link
            </button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center">
              <Calendar className="w-8 h-8 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-foreground mb-1">{eventData.eventTheme}</h3>
              <p className="text-muted-foreground">Chá de Bebê da Sofia • 20 de Fevereiro, 2025</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Progresso dos objetivos */}
      <div className="grid md:grid-cols-2 gap-6">
        {progressData.map((progress, index) => (
          <Card key={index} className="card-floating">
            <CardHeader>
              <CardTitle className="text-lg font-semibold font-serif">{progress.label}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-foreground">
                    {progress.isCurrency ? `R$ ${progress.current.toLocaleString()}` : progress.current}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {progress.isCurrency ? `R$ ${progress.total.toLocaleString()}` : progress.total}
                  </span>
                </div>
                <div className="w-full bg-neutral/30 rounded-full h-3">
                  <div 
                    className={`h-3 rounded-full transition-all duration-500 ${
                      index === 0 ? 'bg-gradient-to-r from-accent to-accent-glow' : 'bg-gradient-to-r from-secondary to-secondary-glow'
                    }`}
                    style={{ width: `${Math.min(progress.percentage, 100)}%` }}
                  ></div>
                </div>
                <p className="text-sm text-muted-foreground">
                  {progress.percentage}% concluído
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DashboardCards;
import { BarChart3, Users, Gift, Heart, MessageCircle, Calendar, Download, TrendingUp } from "lucide-react";

const DashboardPreview = () => {
  const stats = [
    { icon: Users, label: "Convidados", value: "47", change: "+3 hoje", color: "primary" },
    { icon: Gift, label: "Presentes", value: "23", change: "+2 novos", color: "secondary" },
    { icon: Heart, label: "Arrecadado", value: "R$ 2.850", change: "+R$ 340", color: "accent" },
    { icon: MessageCircle, label: "Recadinhos", value: "12", change: "+1 hoje", color: "primary" }
  ];

  const recentActivities = [
    { name: "Ana Silva", action: "deu uma mamadeira", value: "R$ 85", time: "2h" },
    { name: "João Costa", action: "deixou um recadinho", value: "❤️", time: "4h" },
    { name: "Maria Santos", action: "confirmou presença", value: "✅", time: "6h" },
    { name: "Pedro Lima", action: "deu um body", value: "R$ 45", time: "8h" }
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-background">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-foreground mb-2">Painel do Chá da Sofia</h2>
        <p className="text-muted-foreground">Acompanhe tudo em tempo real</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="card-floating">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3
                ${stat.color === 'primary' ? 'bg-primary/10' : 
                  stat.color === 'secondary' ? 'bg-secondary/10' : 'bg-accent/10'}`}>
                <Icon className={`w-5 h-5 
                  ${stat.color === 'primary' ? 'text-primary' : 
                    stat.color === 'secondary' ? 'text-secondary' : 'text-accent'}`} />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground mb-1">{stat.label}</div>
              <div className="text-xs text-green-600 flex items-center gap-1">
                <TrendingUp className="w-3 h-3" />
                {stat.change}
              </div>
            </div>
          );
        })}
      </div>

      {/* Main Content Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Recent Activities */}
        <div className="card-floating">
          <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-primary" />
            Atividades Recentes
          </h3>
          <div className="space-y-3">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-center justify-between p-3 
                bg-neutral/30 rounded-lg hover:bg-neutral/50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-xs font-medium text-primary">
                      {activity.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-foreground">
                      {activity.name} {activity.action}
                    </div>
                    <div className="text-xs text-muted-foreground">{activity.time} atrás</div>
                  </div>
                </div>
                <div className="text-sm font-medium text-primary">{activity.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress Overview */}
        <div className="card-floating">
          <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-secondary" />
            Progresso do Evento
          </h3>
          
          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-muted-foreground">Meta de Presentes</span>
                <span className="text-sm font-medium text-foreground">23/30</span>
              </div>
              <div className="h-2 bg-neutral/50 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-primary to-secondary w-3/4 transition-all duration-500" />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-muted-foreground">Confirmações</span>
                <span className="text-sm font-medium text-foreground">47/60</span>
              </div>
              <div className="h-2 bg-neutral/50 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-secondary to-accent w-4/5 transition-all duration-500" />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-muted-foreground">Meta Financeira</span>
                <span className="text-sm font-medium text-foreground">R$ 2.850/4.000</span>
              </div>
              <div className="h-2 bg-neutral/50 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-accent to-primary w-3/5 transition-all duration-500" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-8 flex flex-wrap gap-4 justify-center">
        <button className="btn-secondary flex items-center gap-2">
          <Download className="w-4 h-4" />
          Baixar Lista de Doadores
        </button>
        <button className="btn-accent flex items-center gap-2">
          <MessageCircle className="w-4 h-4" />
          Ver Recadinhos
        </button>
        <button className="btn-hero flex items-center gap-2">
          <Gift className="w-4 h-4" />
          Gerenciar Presentes
        </button>
      </div>
    </div>
  );
};

export default DashboardPreview;
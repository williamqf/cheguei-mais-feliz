import { Gift, Users, ImageIcon, MessageSquare, Settings, Calendar, TrendingUp } from "lucide-react";
import { useState } from "react";

interface DashboardSidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const DashboardSidebar = ({ activeSection, onSectionChange }: DashboardSidebarProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const sidebarItems = [
    { id: "overview", label: "Visão Geral", icon: TrendingUp },
    { id: "gifts", label: "Presentes", icon: Gift },
    { id: "guests", label: "Convidados", icon: Users },
    { id: "gallery", label: "Galeria", icon: ImageIcon },
    { id: "memories", label: "Memórias", icon: MessageSquare },
    { id: "settings", label: "Configurações", icon: Settings },
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <div className={`hidden lg:flex flex-col bg-card border-r border-border transition-all duration-300 ${
        isCollapsed ? 'w-16' : 'w-64'
      }`}>
        <div className="p-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center">
              <Calendar className="w-5 h-5 text-primary" />
            </div>
            {!isCollapsed && (
              <div>
                <h3 className="font-semibold text-foreground font-serif">Chá da Sofia</h3>
                <p className="text-sm text-muted-foreground">20 de Fevereiro</p>
              </div>
            )}
          </div>
        </div>

        <nav className="flex-1 px-4 pb-6">
          <ul className="space-y-2">
            {sidebarItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              
              return (
                <li key={item.id}>
                  <button
                    onClick={() => onSectionChange(item.id)}
                    className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200 ${
                      isActive 
                        ? 'bg-primary/10 text-primary font-medium' 
                        : 'text-muted-foreground hover:bg-neutral/50 hover:text-foreground'
                    }`}
                  >
                    <Icon className="w-5 h-5 flex-shrink-0" />
                    {!isCollapsed && (
                      <span className="truncate">{item.label}</span>
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="p-4">
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="w-full flex items-center justify-center p-2 rounded-lg hover:bg-neutral/50 transition-colors"
          >
            <Settings className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Mobile Floating Menu */}
      <div className="lg:hidden fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-card/90 backdrop-blur-md border border-border rounded-2xl shadow-lg p-2">
          <div className="flex items-center gap-2">
            {sidebarItems.slice(0, 4).map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              
              return (
                <button
                  key={item.id}
                  onClick={() => onSectionChange(item.id)}
                  className={`p-3 rounded-xl transition-all duration-200 ${
                    isActive 
                      ? 'bg-primary/20 text-primary' 
                      : 'text-muted-foreground hover:bg-neutral/50'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardSidebar;
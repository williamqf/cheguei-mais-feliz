import { Calendar, MapPin, Users, Gift, Heart, Share2 } from "lucide-react";

interface EventCardProps {
  event: {
    id: string;
    babyName: string;
    parentNames: string;
    dueDate: string;
    eventDate: string;
    location: string;
    coverImage?: string;
    guestsCount: number;
    giftsReceived: number;
    totalGifts: number;
    amountRaised: number;
  };
}

const EventCard = ({ event }: EventCardProps) => {
  const progressPercentage = (event.giftsReceived / event.totalGifts) * 100;
  
  return (
    <div className="card-floating group max-w-md">
      {/* Cover Image */}
      <div className="relative h-48 mb-6 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl overflow-hidden">
        {event.coverImage ? (
          <img 
            src={event.coverImage} 
            alt={`Chá do ${event.babyName}`}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-6xl opacity-20">👶</div>
          </div>
        )}
        
        {/* Share button */}
        <button className="absolute top-3 right-3 w-10 h-10 bg-background/80 backdrop-blur-sm 
          rounded-full flex items-center justify-center hover:scale-110 transition-transform">
          <Share2 className="w-5 h-5 text-primary" />
        </button>
        
        {/* Progress badge */}
        <div className="absolute bottom-3 left-3 bg-background/90 backdrop-blur-sm 
          px-3 py-1 rounded-full text-sm font-medium">
          {Math.round(progressPercentage)}% completo
        </div>
      </div>

      {/* Event Info */}
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-semibold text-foreground mb-1">
            Chá do(a) {event.babyName}
          </h3>
          <p className="text-muted-foreground">{event.parentNames}</p>
        </div>

        {/* Event Details */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="w-4 h-4" />
            <span>{new Date(event.eventDate).toLocaleDateString('pt-BR')}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span>{event.location}</span>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 py-4 border-t border-border">
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 mb-1">
              <Users className="w-4 h-4 text-primary" />
              <span className="text-lg font-semibold text-foreground">{event.guestsCount}</span>
            </div>
            <div className="text-xs text-muted-foreground">convidados</div>
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 mb-1">
              <Gift className="w-4 h-4 text-secondary" />
              <span className="text-lg font-semibold text-foreground">{event.giftsReceived}</span>
            </div>
            <div className="text-xs text-muted-foreground">presentes</div>
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 mb-1">
              <Heart className="w-4 h-4 text-accent" />
              <span className="text-lg font-semibold text-foreground">
                R$ {event.amountRaised.toLocaleString('pt-BR')}
              </span>
            </div>
            <div className="text-xs text-muted-foreground">arrecadado</div>
          </div>
        </div>

        {/* Progress Bar */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-muted-foreground">Progresso</span>
            <span className="text-sm font-medium text-primary">{Math.round(progressPercentage)}%</span>
          </div>
          <div className="h-2 bg-neutral/50 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-500"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-2">
          <button className="btn-secondary flex-1">
            Ver página
          </button>
          <button className="btn-hero flex-1">
            Gerenciar
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
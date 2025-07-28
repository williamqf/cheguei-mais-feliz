import { useState } from "react";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Oi! Eu sou o CheguinhoBot 👶 Estou aqui para ajudar você a criar o chá de bebê dos seus sonhos! Como posso te ajudar hoje?',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');

  const predefinedQuestions = [
    "Como criar minha primeira lista?",
    "Como compartilhar meu chá?",
    "Como funcionam os presentes virtuais?",
    "Preciso de ajuda com convites"
  ];

  const botResponses: Record<string, string> = {
    "como criar": "Vou te ajudar a criar sua lista! Primeiro, clique em 'Criar chá grátis' no topo da página. Depois escolha um nome lindo para seu bebê e adicione os itens que você gostaria de ganhar. É super fácil! 💕",
    "compartilhar": "Para compartilhar é simples! Depois de criar seu chá, você ganha um link único que pode enviar por WhatsApp, e-mail ou redes sociais. Seus amigos vão adorar! 🔗",
    "presentes virtuais": "Os presentes virtuais são uma forma carinhosa dos seus amigos contribuírem! Eles escolhem um 'presente' da sua lista (fraldas, roupinhas, etc.) e o valor é convertido em dinheiro via Pix. Você recebe o apoio financeiro e eles participam da celebração! 🎁",
    "convites": "Posso te ajudar com os convites! Temos templates prontos e você pode personalizar com fotos e mensagens especiais. Quer que eu te mostre como fazer? 💌"
  };

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);

    // Simulate bot response
    setTimeout(() => {
      const lowercaseInput = inputText.toLowerCase();
      let botResponse = "Obrigado pela sua pergunta! Nossa equipe está sempre trabalhando para melhorar a experiência. Você pode encontrar mais informações na nossa central de ajuda ou entrar em contato conosco diretamente! 😊";

      // Check for keywords in user input
      for (const [keyword, response] of Object.entries(botResponses)) {
        if (lowercaseInput.includes(keyword)) {
          botResponse = response;
          break;
        }
      }

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    }, 1000);

    setInputText('');
  };

  const handleQuestionClick = (question: string) => {
    setInputText(question);
    handleSendMessage();
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-primary text-primary-foreground 
          rounded-full shadow-lg hover:scale-110 transition-transform z-50 flex items-center justify-center"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 w-80 h-96 bg-background border border-border 
      rounded-2xl shadow-xl z-50 flex flex-col overflow-hidden">
      
      {/* Header */}
      <div className="bg-primary text-primary-foreground p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-primary-foreground/20 rounded-full flex items-center justify-center">
            <Bot className="w-5 h-5" />
          </div>
          <div>
            <div className="font-semibold">CheguinhoBot</div>
            <div className="text-xs opacity-80">Assistente do chá de bebê</div>
          </div>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className="w-8 h-8 rounded-full hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 p-4 overflow-y-auto space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex gap-2 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            {message.sender === 'bot' && (
              <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Bot className="w-4 h-4 text-primary" />
              </div>
            )}
            
            <div className={`max-w-[75%] p-3 rounded-2xl ${
              message.sender === 'user' 
                ? 'bg-primary text-primary-foreground ml-auto' 
                : 'bg-neutral/50 text-foreground'
            }`}>
              <p className="text-sm">{message.text}</p>
            </div>

            {message.sender === 'user' && (
              <div className="w-6 h-6 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <User className="w-4 h-4 text-secondary" />
              </div>
            )}
          </div>
        ))}

        {/* Quick Questions */}
        {messages.length === 1 && (
          <div className="space-y-2">
            <p className="text-xs text-muted-foreground text-center">Perguntas frequentes:</p>
            {predefinedQuestions.map((question, index) => (
              <button
                key={index}
                onClick={() => handleQuestionClick(question)}
                className="w-full p-2 text-xs bg-neutral/30 hover:bg-neutral/50 
                  rounded-lg text-left transition-colors"
              >
                {question}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Input */}
      <div className="p-4 border-t border-border">
        <div className="flex gap-2">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Digite sua pergunta..."
            className="flex-1 px-3 py-2 border border-border rounded-xl 
              focus:ring-2 focus:ring-primary focus:border-transparent
              bg-background text-foreground text-sm"
          />
          <button
            onClick={handleSendMessage}
            disabled={!inputText.trim()}
            className="w-10 h-10 bg-primary text-primary-foreground rounded-xl 
              flex items-center justify-center hover:scale-105 transition-transform
              disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
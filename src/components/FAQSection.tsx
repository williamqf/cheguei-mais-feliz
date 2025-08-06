import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "É realmente gratuito para sempre?",
    answer: "Sim! O Cheguei Família é 100% gratuito. Você pode criar seu chá de bebê, receber presentes e gerenciar tudo sem pagar nada."
  },
  {
    question: "Como os convidados fazem os presentes?",
    answer: "Seus convidados acessam sua página personalizada, escolhem um presente da lista e fazem a transferência via PIX de forma segura e rápida."
  },
  {
    question: "Posso personalizar o design do meu chá?",
    answer: "Claro! Oferecemos vários temas lindos e você pode personalizar cores, adicionar fotos do ultrassom e criar uma experiência única."
  },
  {
    question: "Como funciona a caixa de memórias?",
    answer: "Os convidados podem enviar recados em texto, áudio ou vídeo. Tudo fica guardado numa caixa especial que você pode acessar a qualquer momento."
  },
  {
    question: "E se eu precisar de ajuda?",
    answer: "Nosso CheguinhoBot te ajuda em tempo real! Além disso, temos suporte por WhatsApp para qualquer dúvida."
  },
  {
    question: "Posso compartilhar em todas as redes sociais?",
    answer: "Sim! Geramos um link lindo e um QR Code para você compartilhar no WhatsApp, Instagram, Facebook e onde mais quiser."
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="duvidas" className="section-padding bg-gradient-to-br from-neutral/20 to-primary/5">
      <div className="container-fluid">
        <div className="text-center mb-16">
          <h2 className="text-section-title mb-4">Dúvidas frequentes</h2>
          <p className="text-subtitle max-w-2xl mx-auto">
            Esclarecemos as principais dúvidas para você começar seu chá com total confiança
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="mb-4 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="card-floating overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left 
                    hover:bg-neutral/20 transition-colors group"
                >
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0 ml-4">
                    {openIndex === index ? (
                      <Minus className="w-5 h-5 text-primary transition-transform" />
                    ) : (
                      <Plus className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    )}
                  </div>
                </button>
                
                <div className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-6 pb-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA after FAQ */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Ainda tem dúvidas? Fale diretamente conosco!
          </p>
          <a 
            href="https://wa.me/5511999999999" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-2"
          >
            💬 WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
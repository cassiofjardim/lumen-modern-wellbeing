import { ArrowUpRight, Award, Briefcase, Rocket } from "lucide-react";

const NewsSection = () => {
  const news = [
    {
      icon: Award,
      tag: "Reconhecimento",
      title: "PEI - Programa de Empreendedorismo Intensivo",
      description:
        "A Lumen foi selecionada para o Programa de Empreendedorismo Intensivo, iniciativa que reconhece e acelera startups de alto potencial na área de saúde e tecnologia. Esta conquista reforça nosso compromisso em transformar pesquisa científica em soluções que impactam positivamente a vida das pessoas.",
      date: "2025",
    },
    {
      icon: Briefcase,
      tag: "Inovação Social",
      title: "Planejamento de Empreendimentos Sociais",
      description:
        "Em parceria com instituições de referência, a Lumen participa ativamente do Planejamento de Empreendimentos Sociais, desenvolvendo modelos sustentáveis para a disseminação de tratamentos não medicamentosos para demência. Nosso objetivo é democratizar o acesso a intervenções baseadas em evidências em todo o território nacional.",
      date: "2025",
    },
    {
      icon: Rocket,
      tag: "Fomento",
      title: "Doutor Empreendedor - FAPERJ",
      description:
        "A Lumen foi contemplada pelo programa Doutor Empreendedor da FAPERJ, que apoia pesquisadores com doutorado a transformarem suas pesquisas em empresas inovadoras. Este reconhecimento da Fundação de Amparo à Pesquisa do Estado do Rio de Janeiro valida a relevância científica e o potencial de impacto das nossas soluções para a saúde mental.",
      date: "2025",
    },
  ];

  return (
    <section id="noticias" className="section-padding bg-secondary/30">
      <div className="container-narrow mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block text-sm font-medium text-amber-dark uppercase tracking-wider mb-4">
            Notícias
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Reconhecimentos e conquistas
          </h2>
          <p className="text-lg text-muted-foreground">
            Acompanhe os principais marcos da trajetória da Lumen.
          </p>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {news.map((item) => (
            <article
              key={item.title}
              className="group bg-card rounded-2xl border border-border/50 overflow-hidden hover:border-amber/30 hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              {/* Card Header */}
              <div className="p-6 border-b border-border/50 bg-secondary/30">
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-amber-dark bg-amber/10 px-3 py-1 rounded-full">
                    <item.icon size={12} />
                    {item.tag}
                  </span>
                  <span className="text-xs text-muted-foreground">{item.date}</span>
                </div>
                <h3 className="text-lg font-semibold leading-tight group-hover:text-amber-dark transition-colors">
                  {item.title}
                </h3>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;

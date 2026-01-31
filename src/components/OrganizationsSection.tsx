import { Building2, HeartPulse, TrendingUp, Users } from "lucide-react";

const OrganizationsSection = () => {
  const benefits = [
    {
      icon: HeartPulse,
      title: "Saúde Mental Corporativa",
      description: "Programas personalizados de bem-estar mental para colaboradores.",
    },
    {
      icon: TrendingUp,
      title: "Aumento de Produtividade",
      description: "Colaboradores saudáveis mentalmente são mais engajados e produtivos.",
    },
    {
      icon: Users,
      title: "Capacitação de Equipes",
      description: "Treinamentos para líderes e equipes de RH em saúde mental.",
    },
  ];

  return (
    <section id="organizacoes" className="section-padding">
      <div className="container-narrow mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Visual */}
          <div className="relative order-2 lg:order-1">
            <div className="card-highlight p-8 md:p-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-amber/10 flex items-center justify-center">
                  <Building2 size={28} className="text-amber-dark" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Intervenções para Organizações</h3>
                  <p className="text-sm text-muted-foreground">Soluções B2B</p>
                </div>
              </div>
              
              <div className="space-y-4">
                {benefits.map((benefit) => (
                  <div
                    key={benefit.title}
                    className="flex items-start gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-amber/10 flex items-center justify-center flex-shrink-0">
                      <benefit.icon size={18} className="text-amber-dark" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm mb-1">{benefit.title}</h4>
                      <p className="text-xs text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Decorative */}
            <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full rounded-2xl bg-amber/10" />
          </div>

          {/* Right: Content */}
          <div className="order-1 lg:order-2">
            <span className="inline-block text-sm font-medium text-amber-dark uppercase tracking-wider mb-4">
              Para Empresas
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
              Intervenções para{" "}
              <span className="gradient-text-amber">Organizações</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                A Lumen oferece soluções personalizadas para empresas que desejam investir na saúde mental de seus colaboradores. Nossos programas são desenvolvidos por especialistas em neurociência organizacional e adaptados às necessidades específicas de cada organização.
              </p>
              <p>
                Desde workshops de sensibilização até programas contínuos de acompanhamento, ajudamos empresas a criar ambientes de trabalho mais saudáveis, produtivos e humanizados.
              </p>
            </div>
            
            <div className="mt-8">
              <a
                href="#contato"
                className="btn-cta px-6 py-3 inline-flex"
              >
                Solicitar proposta
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrganizationsSection;

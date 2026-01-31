import { Smartphone, Brain, BarChart3, Bell } from "lucide-react";

const TechnologySection = () => {
  const features = [
    {
      icon: Brain,
      title: "Exercícios Cognitivos",
      description: "Atividades personalizadas baseadas em neurociência",
    },
    {
      icon: BarChart3,
      title: "Monitoramento",
      description: "Acompanhamento do progresso em tempo real",
    },
    {
      icon: Bell,
      title: "Lembretes Inteligentes",
      description: "Notificações para manter a rotina de cuidados",
    },
  ];

  return (
    <section id="tecnologia" className="section-padding">
      <div className="container-narrow mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-block text-sm font-medium text-amber-dark uppercase tracking-wider mb-4">
              Tecnologia
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
              Aplicativos desenvolvidos para saúde mental
            </h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              Ferramentas digitais projetadas por especialistas em neurociência para complementar
              tratamentos e promover autonomia no cuidado da saúde mental.
            </p>

            {/* Features */}
            <div className="space-y-6">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-start gap-4">
                  <div className="icon-badge w-12 h-12 flex-shrink-0">
                    <feature.icon size={22} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Phone Mockup */}
          <div className="relative flex justify-center">
            <div className="relative">
              {/* Phone frame */}
              <div className="w-64 md:w-72 h-[520px] md:h-[580px] bg-foreground rounded-[3rem] p-3 shadow-2xl animate-float">
                <div className="w-full h-full bg-background rounded-[2.5rem] overflow-hidden relative">
                  {/* Status bar */}
                  <div className="absolute top-0 left-0 right-0 h-8 bg-secondary/50 flex items-center justify-center">
                    <div className="w-20 h-5 bg-foreground rounded-full" />
                  </div>
                  
                  {/* App content mockup */}
                  <div className="pt-12 px-5 pb-6 h-full flex flex-col">
                    {/* App header */}
                    <div className="text-center mb-6">
                      <div className="w-12 h-12 mx-auto mb-3 rounded-xl gradient-amber flex items-center justify-center">
                        <Brain size={24} className="text-primary" />
                      </div>
                      <h4 className="font-semibold text-sm">Lumen Care</h4>
                      <p className="text-xs text-muted-foreground">Seu treino diário</p>
                    </div>

                    {/* Progress card */}
                    <div className="bg-secondary/50 rounded-2xl p-4 mb-4">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-xs font-medium">Progresso Semanal</span>
                        <span className="text-xs text-amber-dark font-semibold">85%</span>
                      </div>
                      <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                        <div className="w-[85%] h-full gradient-amber rounded-full" />
                      </div>
                    </div>

                    {/* Activity cards */}
                    <div className="space-y-3 flex-1">
                      <div className="bg-card rounded-xl p-3 border border-border/50 flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-amber/10 flex items-center justify-center">
                          <Smartphone size={18} className="text-amber-dark" />
                        </div>
                        <div className="flex-1">
                          <p className="text-xs font-medium">Memória Visual</p>
                          <p className="text-xs text-muted-foreground">5 min • Iniciante</p>
                        </div>
                      </div>
                      <div className="bg-card rounded-xl p-3 border border-border/50 flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-science/10 flex items-center justify-center">
                          <BarChart3 size={18} className="text-science" />
                        </div>
                        <div className="flex-1">
                          <p className="text-xs font-medium">Atenção Focada</p>
                          <p className="text-xs text-muted-foreground">8 min • Intermediário</p>
                        </div>
                      </div>
                    </div>

                    {/* Bottom CTA */}
                    <button className="w-full py-3 rounded-xl gradient-amber text-primary text-sm font-semibold mt-4">
                      Iniciar Treino
                    </button>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-amber/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-science/10 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;

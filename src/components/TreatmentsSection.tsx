import { Brain, Heart, Users, Sparkles } from "lucide-react";

const TreatmentsSection = () => {
  const treatments = [
    {
      icon: Brain,
      title: "Estimulação Cognitiva",
      description: "Programa estruturado para potencialização das funções cognitivas em idosos.",
      highlight: "Baseado em evidências",
    },
    {
      icon: Heart,
      title: "Psicoterapia Especializada",
      description: "Atendimento psicológico individual com foco em saúde mental do idoso.",
      highlight: "Equipe especializada",
    },
    {
      icon: Users,
      title: "Grupos Terapêuticos",
      description: "Intervenções em grupo para socialização e suporte emocional.",
      highlight: "Ambiente acolhedor",
    },
    {
      icon: Sparkles,
      title: "Neuropsicologia Clínica",
      description: "Avaliação e reabilitação neuropsicológica com protocolos validados.",
      highlight: "Precisão diagnóstica",
    },
  ];

  return (
    <section id="tratamentos" className="section-padding">
      <div className="container-narrow mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm font-medium text-amber-dark uppercase tracking-wider mb-4">
            A Solução
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Tratamentos clínicos baseados em ciência
          </h2>
          <p className="text-lg text-muted-foreground">
            Oferecemos intervenções validadas cientificamente para promover saúde mental e qualidade de vida.
          </p>
        </div>

        {/* Treatment Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {treatments.map((treatment, index) => (
            <div
              key={treatment.title}
              className="card-highlight p-8 group hover:border-amber/30 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-5">
                <div className="icon-badge w-14 h-14 flex-shrink-0 group-hover:scale-105 transition-transform">
                  <treatment.icon size={24} />
                </div>
                <div>
                  <span className="inline-block text-xs font-medium text-amber-dark bg-amber/10 px-3 py-1 rounded-full mb-3">
                    {treatment.highlight}
                  </span>
                  <h3 className="text-xl font-semibold mb-2">{treatment.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {treatment.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TreatmentsSection;

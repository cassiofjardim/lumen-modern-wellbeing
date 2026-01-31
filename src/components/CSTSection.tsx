import { ArrowRight, Award, Calendar, Globe, Monitor, Users, CheckCircle } from "lucide-react";

const CSTSection = () => {
  const differentials = [
    { icon: Monitor, text: "100% Ao Vivo e Online" },
    { icon: Award, text: "Certificado de Formação" },
    { icon: CheckCircle, text: "Resultados Comprovados" },
  ];

  const upcomingDates = [
    { date: "28 Fev", year: "2026", status: "Últimas vagas" },
    { date: "21 Mar", year: "2026", status: "Inscrições abertas" },
    { date: "25 Abr", year: "2026", status: "Inscrições abertas" },
    { date: "23 Mai", year: "2026", status: "Em breve" },
  ];

  return (
    <section id="cst" className="section-padding bg-secondary/30">
      <div className="container-narrow mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-sm font-medium text-amber-dark uppercase tracking-wider mb-4">
            Capacitação Profissional
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Treinamento CST: O primeiro tratamento não medicamentoso para demência{" "}
            <span className="gradient-text-amber">validado no Brasil</span>
          </h2>
        </div>

        {/* Main CST Card */}
        <div className="card-cst p-8 md:p-12 max-w-4xl mx-auto">
          {/* Badges */}
          <div className="flex flex-wrap gap-3 mb-8">
            {differentials.map((diff) => (
              <div
                key={diff.text}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-amber/10 rounded-full border border-amber/20"
              >
                <diff.icon size={18} className="text-amber-dark" />
                <span className="text-sm font-medium text-foreground">{diff.text}</span>
              </div>
            ))}
          </div>

          {/* Description */}
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Seja capacitado por pesquisadores da PUC-Rio no método presente em{" "}
            <strong className="text-foreground">39 países</strong>. Treinamento exclusivo para{" "}
            <strong className="text-foreground">estudantes e profissionais da saúde</strong> que desejam
            aplicar intervenções baseadas em evidências.
          </p>

          {/* International validation badge */}
          <div className="flex items-center gap-3 p-4 bg-science/5 rounded-xl border border-science/10 mb-10">
            <Globe size={24} className="text-science flex-shrink-0" />
            <p className="text-sm text-foreground">
              <strong>Validação Internacional:</strong> A CST está presente em quase 40 países,
              garantindo segurança e eficácia comprovada para o profissional de saúde.
            </p>
          </div>

          {/* Schedule Grid */}
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-5">
              <Calendar size={20} className="text-amber" />
              <h3 className="text-lg font-semibold">Próximas Turmas 2026</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {upcomingDates.map((schedule, index) => (
                <div
                  key={schedule.date}
                  className={`p-4 rounded-xl border text-center transition-all hover:scale-105 ${
                    index === 0
                      ? "bg-amber/10 border-amber/30"
                      : "bg-background border-border hover:border-amber/20"
                  }`}
                >
                  <p className="text-2xl font-bold text-foreground">{schedule.date}</p>
                  <p className="text-sm text-muted-foreground mb-2">{schedule.year}</p>
                  <span
                    className={`text-xs font-medium px-2 py-1 rounded-full ${
                      index === 0
                        ? "bg-amber/20 text-amber-dark"
                        : "bg-secondary text-muted-foreground"
                    }`}
                  >
                    {schedule.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <a
              href="#inscricao"
              className="btn-cta px-10 py-5 text-lg inline-flex"
            >
              Quero me inscrever agora
              <ArrowRight size={20} />
            </a>
            <p className="text-sm text-muted-foreground mt-4">
              <Users size={14} className="inline mr-1" />
              Turmas limitadas a 30 participantes
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CSTSection;

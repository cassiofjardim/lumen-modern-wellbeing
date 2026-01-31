import { Linkedin, GraduationCap } from "lucide-react";

const TeamSection = () => {
  const team = [
    {
      name: "Dra. Ana Beatriz Silva",
      role: "Fundadora & CEO",
      credentials: "PhD em Neurociência - PUC-Rio",
      specialty: "Especialista em CST e demências",
    },
    {
      name: "Dr. Carlos Eduardo Mendes",
      role: "Diretor Científico",
      credentials: "PhD em Psicologia Clínica - USP",
      specialty: "Pesquisador em intervenções cognitivas",
    },
    {
      name: "Dra. Marina Costa",
      role: "Coordenadora de Pesquisa",
      credentials: "Mestre em Neuropsicologia - UFRJ",
      specialty: "Desenvolvimento de protocolos clínicos",
    },
    {
      name: "Dr. Rafael Oliveira",
      role: "Diretor de Tecnologia",
      credentials: "PhD em Ciência da Computação - PUC-Rio",
      specialty: "IA aplicada à saúde mental",
    },
  ];

  return (
    <section id="equipe" className="section-padding bg-secondary/30">
      <div className="container-narrow mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm font-medium text-amber-dark uppercase tracking-wider mb-4">
            Nossa Equipe
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Liderança científica de excelência
          </h2>
          <p className="text-lg text-muted-foreground">
            Pesquisadores e clínicos dedicados à inovação em saúde mental.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {team.map((member, index) => (
            <div
              key={member.name}
              className="card-highlight p-6 text-center group hover:border-amber/30 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Avatar placeholder */}
              <div className="w-24 h-24 mx-auto mb-5 rounded-full bg-gradient-to-br from-secondary to-warm-gray-light flex items-center justify-center border-2 border-border group-hover:border-amber/30 transition-colors">
                <span className="text-2xl font-bold text-muted-foreground">
                  {member.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
                </span>
              </div>

              <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
              <p className="text-sm text-amber-dark font-medium mb-3">{member.role}</p>
              
              <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground mb-2">
                <GraduationCap size={14} />
                <span>{member.credentials}</span>
              </div>
              
              <p className="text-xs text-muted-foreground">{member.specialty}</p>

              {/* Social link */}
              <button className="mt-4 p-2 rounded-full bg-secondary hover:bg-amber/10 transition-colors inline-flex">
                <Linkedin size={16} className="text-muted-foreground" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

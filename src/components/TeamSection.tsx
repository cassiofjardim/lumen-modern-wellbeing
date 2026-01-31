import { useState } from "react";
import { Linkedin, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface TeamMember {
  name: string;
  role: string;
  oneliner: string;
  bio: string;
  initials: string;
}

const TeamSection = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const team: TeamMember[] = [
    {
      name: "Daniel Mograbi",
      role: "Sócio",
      oneliner: "PhD pelo King's College London e Prof. da PUC-Rio. Especialista em cérebro e comportamento.",
      bio: "Daniel Mograbi é pesquisador e professor com doutorado pelo King's College London, uma das instituições mais renomadas do mundo em neurociência. Atualmente é Professor do Departamento de Psicologia da PUC-Rio, onde lidera pesquisas inovadoras sobre a relação entre cérebro e comportamento. Sua expertise abrange áreas como autoconsciência, demência e intervenções cognitivas, tendo publicado extensivamente em periódicos internacionais de alto impacto. É um dos principais responsáveis pela adaptação e validação da CST no Brasil, contribuindo significativamente para a disseminação de tratamentos não medicamentosos para demência no país.",
      initials: "DM",
    },
    {
      name: "Iris Bomilcar",
      role: "Sócia",
      oneliner: "Doutora em Saúde Mental (IPUB-UFRJ) e mestre em neurociência clínica pela Univ. de Colônia (Alemanha).",
      bio: "Iris Bomilcar possui formação internacional de excelência, com doutorado em Saúde Mental pelo Instituto de Psiquiatria da UFRJ e mestrado em Neurociência Clínica pela Universidade de Colônia, na Alemanha. Sua trajetória acadêmica combina rigor científico com sensibilidade clínica, permitindo uma abordagem integrada no tratamento de condições neuropsiquiátricas. É especialista em intervenções baseadas em evidências para idosos e tem vasta experiência na condução de grupos terapêuticos e capacitação de profissionais de saúde.",
      initials: "IB",
    },
    {
      name: "Cassio Félix",
      role: "Developer",
      oneliner: "Mestre em Economia (UFMG), especialista em Data Science e Visualização de Dados.",
      bio: "Cassio Félix traz para a Lumen uma combinação única de expertise técnica e visão estratégica. Com mestrado em Economia pela UFMG e especialização em Data Science, ele lidera o desenvolvimento de soluções tecnológicas inovadoras para saúde mental. Sua experiência em visualização de dados e análise quantitativa permite criar ferramentas digitais que traduzem complexos indicadores de saúde em interfaces intuitivas e acessíveis, democratizando o acesso a tratamentos baseados em evidências.",
      initials: "CF",
    },
    {
      name: "Matheus Pedrosa",
      role: "Colaborador",
      oneliner: "Mestre em Psicologia (PUC-Rio) e especialista em Neurociências aplicadas a Organizações.",
      bio: "Matheus Pedrosa é psicólogo com mestrado pela PUC-Rio, onde desenvolveu pesquisas na interseção entre neurociências e comportamento organizacional. Sua especialização em Neurociências aplicadas a Organizações permite uma abordagem inovadora no desenvolvimento de programas de saúde mental corporativa. Na Lumen, contribui para a expansão de iniciativas que levam os benefícios da estimulação cognitiva para ambientes empresariais e institucionais.",
      initials: "MP",
    },
    {
      name: "Renata Naylor",
      role: "Colaboradora",
      oneliner: "Mestre em Psicologia Clínica e Neurociências (PUC-Rio). Formada em CST pela University College London.",
      bio: "Renata Naylor possui formação diferenciada que combina expertise nacional e internacional em intervenções cognitivas. Com mestrado em Psicologia Clínica e Neurociências pela PUC-Rio, especializou-se em CST diretamente na University College London, berço da metodologia. Esta formação única a posiciona como uma das principais referências em Terapia de Estimulação Cognitiva no Brasil, atuando tanto na aplicação clínica quanto na capacitação de novos profissionais.",
      initials: "RN",
    },
    {
      name: "Raquel Santos de Carvalho",
      role: "Colaboradora",
      oneliner: "Doutora em Saúde Mental (UFRJ) e Pesquisadora de Pós-doutorado na PUC-Rio.",
      bio: "Raquel Santos de Carvalho é pesquisadora com sólida formação acadêmica, tendo concluído seu doutorado em Saúde Mental pela UFRJ. Atualmente desenvolve pesquisa de pós-doutorado na PUC-Rio, investigando novas fronteiras em intervenções para saúde mental do idoso. Sua atuação na Lumen fortalece a ponte entre produção científica de ponta e aplicação clínica, garantindo que os serviços oferecidos estejam sempre alinhados com as evidências mais recentes da literatura internacional.",
      initials: "RC",
    },
    {
      name: "Vitória Velloso",
      role: "Colaboradora",
      oneliner: "Mestre em Psicologia Clínica e Neurociências (PUC-Rio) e especialista em CST.",
      bio: "Vitória Velloso é psicóloga com mestrado em Psicologia Clínica e Neurociências pela PUC-Rio, onde aprofundou seus conhecimentos em intervenções cognitivas para populações clínicas. Especialista certificada em CST, atua ativamente na aplicação de grupos terapêuticos e no treinamento de profissionais que desejam implementar a metodologia em suas práticas. Sua dedicação e sensibilidade clínica são fundamentais para garantir a qualidade e humanização dos atendimentos da Lumen.",
      initials: "VV",
    },
  ];

  return (
    <section id="equipe" className="section-padding bg-secondary/30">
      <div className="container-narrow mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm font-medium text-amber-dark uppercase tracking-wider mb-4">
            Quem Somos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Liderança científica de excelência
          </h2>
          <p className="text-lg text-muted-foreground">
            Pesquisadores e clínicos dedicados à inovação em saúde mental.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
          {team.map((member) => (
            <div
              key={member.name}
              className="group"
            >
              <div className="bg-card rounded-2xl p-6 border border-border/50 hover:border-amber/30 transition-all duration-300 hover:shadow-lg h-full flex flex-col">
                {/* Avatar */}
                <div className="aspect-square w-full max-w-[140px] mx-auto mb-5 rounded-2xl bg-gradient-to-br from-secondary to-warm-gray-light flex items-center justify-center border-2 border-border group-hover:border-amber/30 transition-colors overflow-hidden">
                  <span className="text-3xl font-bold text-muted-foreground">
                    {member.initials}
                  </span>
                </div>

                {/* Info */}
                <div className="text-center flex-1 flex flex-col">
                  <h3 className="font-semibold text-base mb-1 leading-tight">{member.name}</h3>
                  <p className="text-xs text-amber-dark font-medium mb-3">{member.role}</p>
                  
                  <p className="text-xs text-muted-foreground leading-relaxed mb-4 flex-1 line-clamp-3">
                    {member.oneliner}
                  </p>

                  {/* Read More Button */}
                  <button
                    onClick={() => setSelectedMember(member)}
                    className="inline-flex items-center justify-center gap-1 text-xs font-medium text-science hover:text-amber-dark transition-colors py-2 px-4 rounded-full bg-secondary/80 hover:bg-amber/10 mx-auto"
                  >
                    Ler mais
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bio Modal */}
        <Dialog open={!!selectedMember} onOpenChange={() => setSelectedMember(null)}>
          <DialogContent className="sm:max-w-lg bg-card border-border/50">
            <DialogHeader className="text-left">
              <div className="flex items-start gap-4 mb-2">
                {/* Avatar in Modal */}
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-secondary to-warm-gray-light flex items-center justify-center border border-border flex-shrink-0">
                  <span className="text-xl font-bold text-muted-foreground">
                    {selectedMember?.initials}
                  </span>
                </div>
                <div className="flex-1 pt-1">
                  <DialogTitle className="text-xl font-semibold mb-1">
                    {selectedMember?.name}
                  </DialogTitle>
                  <p className="text-sm text-amber-dark font-medium">
                    {selectedMember?.role}
                  </p>
                </div>
              </div>
            </DialogHeader>
            
            <div className="mt-2">
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {selectedMember?.oneliner}
              </p>
              <div className="pt-4 border-t border-border/50">
                <p className="text-sm text-foreground/90 leading-relaxed">
                  {selectedMember?.bio}
                </p>
              </div>

              {/* Social Link */}
              <div className="mt-6 pt-4 border-t border-border/50 flex justify-center">
                <button className="inline-flex items-center gap-2 text-xs font-medium text-muted-foreground hover:text-science transition-colors py-2 px-4 rounded-full bg-secondary/50 hover:bg-secondary">
                  <Linkedin size={14} />
                  Ver perfil no LinkedIn
                </button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default TeamSection;

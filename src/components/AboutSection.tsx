import { BookOpen, Lightbulb, Target } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="sobre" className="section-padding">
      <div className="container-narrow mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-block text-sm font-medium text-amber-dark uppercase tracking-wider mb-4">
              A Lumen
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
              Sobre a Lumen:{" "}
              <span className="gradient-text-amber">conheça a nossa história</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                A Lumen nasceu da convicção de que a ciência é o melhor caminho para gerar bem-estar e diminuir o sofrimento humano. Fundada por pesquisadores e clínicos com formação nas melhores universidades do Brasil e do mundo, nossa missão é traduzir décadas de pesquisa em neurociência em soluções práticas e acessíveis.
              </p>
              <p>
                Com origem no Laboratório de Neuropsicologia e Cognição da PUC-Rio, desenvolvemos tratamentos validados cientificamente que hoje beneficiam milhares de pacientes e profissionais de saúde em todo o país.
              </p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid gap-6">
            <div className="card-highlight p-6 flex items-start gap-4">
              <div className="icon-badge w-12 h-12 flex-shrink-0">
                <BookOpen size={22} />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Raízes Acadêmicas</h3>
                <p className="text-sm text-muted-foreground">
                  Mais de 15 anos de pesquisa em neurociência aplicada à saúde mental, com publicações em periódicos internacionais de alto impacto.
                </p>
              </div>
            </div>

            <div className="card-highlight p-6 flex items-start gap-4">
              <div className="icon-badge w-12 h-12 flex-shrink-0">
                <Lightbulb size={22} />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Inovação Responsável</h3>
                <p className="text-sm text-muted-foreground">
                  Desenvolvemos apenas tratamentos e ferramentas comprovadamente eficazes, seguindo os mais rigorosos padrões científicos internacionais.
                </p>
              </div>
            </div>

            <div className="card-highlight p-6 flex items-start gap-4">
              <div className="icon-badge w-12 h-12 flex-shrink-0">
                <Target size={22} />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Impacto Mensurável</h3>
                <p className="text-sm text-muted-foreground">
                  Cada intervenção é acompanhada e avaliada, garantindo resultados tangíveis para pacientes, famílias e organizações.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

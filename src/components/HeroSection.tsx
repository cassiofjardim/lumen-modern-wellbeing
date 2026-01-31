import { ArrowRight, Brain, Shield, Users } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 md:pt-24 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-amber/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-science/5 rounded-full blur-3xl" />
      </div>

      <div className="container-narrow mx-auto section-padding relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-8 animate-fade-in">
            <Brain size={16} className="text-amber" />
            <span className="text-sm font-medium text-muted-foreground">
              Origem em Laboratório de Neurociência da PUC-Rio
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-slide-up text-balance">
            Ciência e tecnologia a serviço do{" "}
            <span className="gradient-text-amber">bem-estar mental</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-slide-up text-balance" style={{ animationDelay: "0.1s" }}>
            Desenvolvemos tratamentos inovadores e ferramentas digitais baseados em evidências científicas para transformar a saúde mental no Brasil.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <a href="#cst" className="btn-cta px-8 py-4 text-base w-full sm:w-auto">
              Conhecer Treinamento CST
              <ArrowRight size={18} />
            </a>
            <a href="#tratamentos" className="btn-secondary-outline px-8 py-4 text-base w-full sm:w-auto">
              Ver Tratamentos
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="flex items-center gap-3">
              <div className="icon-badge w-10 h-10">
                <Brain size={20} />
              </div>
              <div className="text-left">
                <p className="text-2xl font-bold text-foreground">15+</p>
                <p className="text-xs text-muted-foreground">Anos de Pesquisa</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="icon-badge w-10 h-10">
                <Users size={20} />
              </div>
              <div className="text-left">
                <p className="text-2xl font-bold text-foreground">5.000+</p>
                <p className="text-xs text-muted-foreground">Pacientes Atendidos</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="icon-badge w-10 h-10">
                <Shield size={20} />
              </div>
              <div className="text-left">
                <p className="text-2xl font-bold text-foreground">39</p>
                <p className="text-xs text-muted-foreground">Países com CST</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

import { ArrowRight, Brain, Shield, Users } from "lucide-react";
import heroVideo from "@/assets/hero-neural-video.mp4";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-science/80 via-science/75 to-background" />
      </div>

      <div className="container-narrow mx-auto section-padding relative z-10 pt-28 md:pt-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8 animate-fade-in">
            <Brain size={16} className="text-amber" />
            <span className="text-sm font-medium text-white/90">
              Origem em Laboratório de Neurociência da PUC-Rio
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-8 animate-slide-up text-balance text-white">
            A Lumen entende que a ciência é o melhor caminho para gerar{" "}
            <span className="text-amber">bem-estar</span> e diminuir o{" "}
            <span className="text-amber-light">sofrimento humano</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 animate-slide-up text-balance" style={{ animationDelay: "0.1s" }}>
            Desenvolvemos tratamentos inovadores e ferramentas digitais baseados em evidências científicas para transformar a saúde mental no Brasil.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <a href="#cst" className="btn-cta px-8 py-4 text-base w-full sm:w-auto">
              Conhecer Treinamento CST
              <ArrowRight size={18} />
            </a>
            <a href="#tratamentos" className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base w-full sm:w-auto rounded-full font-medium border-2 border-white/30 text-white bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              Ver Tratamentos
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber/20 flex items-center justify-center">
                <Brain size={20} className="text-amber" />
              </div>
              <div className="text-left">
                <p className="text-2xl font-bold text-white">15+</p>
                <p className="text-xs text-white/70">Anos de Pesquisa</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber/20 flex items-center justify-center">
                <Users size={20} className="text-amber" />
              </div>
              <div className="text-left">
                <p className="text-2xl font-bold text-white">5.000+</p>
                <p className="text-xs text-white/70">Pacientes Atendidos</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber/20 flex items-center justify-center">
                <Shield size={20} className="text-amber" />
              </div>
              <div className="text-left">
                <p className="text-2xl font-bold text-white">39</p>
                <p className="text-xs text-white/70">Países com CST</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade to content */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;

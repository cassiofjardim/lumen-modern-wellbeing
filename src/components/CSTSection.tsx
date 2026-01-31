import { ArrowRight, FlaskConical, Target, Heart } from "lucide-react";
import neuralVideo from "@/assets/neural-background.mp4";

const CSTSection = () => {
  const highlights = [
    {
      icon: FlaskConical,
      title: "Ciência",
      description: "Protocolo baseado em evidências científicas e validado pela PUC-Rio.",
    },
    {
      icon: Target,
      title: "Prática",
      description: "14 sessões temáticas focadas em estimular memória, linguagem e orientação.",
    },
    {
      icon: Heart,
      title: "Impacto",
      description: "Tratamento centrado na pessoa com benefícios comprovados para pacientes e famílias.",
    },
  ];

  return (
    <section id="cst" className="relative overflow-hidden">
      {/* Video Background with Overlay */}
      <div className="relative min-h-[550px] md:min-h-[600px] flex items-center">
        {/* Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={neuralVideo} type="video/mp4" />
        </video>

        {/* Dark Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-science/90 via-science/85 to-science/95" />

        {/* Content */}
        <div className="relative z-10 container-narrow mx-auto px-6 py-16 md:py-20">
          <div className="max-w-3xl mx-auto text-center">
            {/* Badge */}
            <span className="inline-block text-sm font-medium text-amber uppercase tracking-wider mb-6">
              Capacitação Profissional
            </span>

            {/* Title */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white text-balance leading-tight">
              Domine o Treinamento{" "}
              <span className="text-amber">CST</span>
            </h2>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-white/85 mb-10 max-w-2xl mx-auto text-balance leading-relaxed">
              <strong className="text-white">O primeiro tratamento não medicamentoso para demência</strong>{" "}
              validado no Brasil e presente em{" "}
              <strong className="text-amber">39 países</strong>.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="p-5 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-amber/20 mb-3">
                    <item.icon size={22} className="text-amber" />
                  </div>
                  <h3 className="text-base font-semibold text-white mb-1.5">{item.title}</h3>
                  <p className="text-sm text-white/70 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <a
              href="https://lumen.com/cst-treinamento"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta px-8 py-4 text-base inline-flex group"
            >
              Conhecer Treinamento e Inscrições
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* Bottom fade transition */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent" />
      </div>
    </section>
  );
};

export default CSTSection;

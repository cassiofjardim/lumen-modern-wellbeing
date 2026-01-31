const InstitutionsBar = () => {
  const institutions = [
    { name: "PUC-Rio", abbreviation: "PUC" },
    { name: "FAPERJ", abbreviation: "FAPERJ" },
    { name: "Instituto Gênesis", abbreviation: "GÊNESIS" },
    { name: "CNPq", abbreviation: "CNPq" },
  ];

  return (
    <section className="py-12 md:py-16 border-y border-border/50 bg-secondary/30">
      <div className="container-narrow mx-auto px-6">
        <p className="text-center text-sm text-muted-foreground mb-8">
          Apoio e parceria de instituições renomadas
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {institutions.map((institution) => (
            <div
              key={institution.name}
              className="institution-logo flex items-center justify-center"
            >
              <div className="flex items-center gap-2 px-6 py-3 bg-background rounded-lg border border-border/50">
                <span className="text-lg font-semibold text-primary/70">{institution.abbreviation}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstitutionsBar;

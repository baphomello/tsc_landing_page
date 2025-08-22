import AnimatedElement from './animatedElement';

export default function Title() {
  return (
    <div className="flex flex-col gap-4 [&_span]:text-[#E6CBA1] text-balance px-4">
      <h1 className="text-3xl lg:text-4xl font-bold">
        <AnimatedElement delay={0.1}>
          Maximize o <span>Lucro e a Eficiência</span> do Seu Consultório Odontológico
        </AnimatedElement>
      </h1>
      <h2 className="text-lg lg:text-xl">
        <AnimatedElement delay={0.2}>
          Estratégias comprovadas de gestão financeira e operacional para transformar sua clínica odontológica em um
          negócio mais rentável e organizado.
        </AnimatedElement>
      </h2>
    </div>
  );
}

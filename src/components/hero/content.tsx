import AnimatedElement from './animatedElement';
import Carousel from './carousel';

export default function Content() {
  return (
    <div>
      <div className="px-4">
        <AnimatedElement delay={0.1}>
          <h1 className="text-sm lg:text-base uppercase tracking-wider text-[#E6CBA1]">Conteúdo</h1>
        </AnimatedElement>
        <AnimatedElement delay={0.2}>
          <h2 className="text-xl lg:text-2xl font-bold">O que vai aprender?</h2>
        </AnimatedElement>
      </div>
      <Carousel />
    </div>
  );
}

import Link from 'next/link';
import AnimatedElement from './animatedElement';

export default function Cta() {
  return (
    <div className="flex flex-col px-4">
      <Link
        href={'#'}
        className="text-lg lg:text-xl font-semibold uppercase bg-[#C49B80] py-4 px-8 rounded-sm shadow-sm text-center"
      >
        <AnimatedElement delay={0.1}>Fazer Minha Inscrição</AnimatedElement>
      </Link>
    </div>
  );
}

import AnimatedElement from './animatedElement';
import LogoSvg from './logoSvg';

export default function Logo() {
  return (
    <AnimatedElement>
      <div className="flex items-center gap-2 select-none px-4">
        <LogoSvg width={60} height={45} />
        <div className="flex flex-col items-center text-transparent bg-clip-text bg-gradient-to-b from-[#C49B80] via-[#E6CBA1] to-[#D5AF88]">
          <h1 className="text-6xl tracking-tighter">TSC</h1>
        </div>
      </div>
    </AnimatedElement>
  );
}

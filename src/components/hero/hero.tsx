import Content from './content';
import Cta from './cta';
import Logo from './logo';
import Title from './title';

export default function Hero() {
  return (
    <header className="bg-[#03222F] pb-12 lg:flex lg:justify-center">
      <div className="overflow-hidden flex flex-col lg:container mx-auto gap-12 py-8 text-white max-w-7xl">
        <Logo />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 py-8">
          <div className="flex flex-col gap-8">
            <Title />
            <Cta />
          </div>
        </div>
        <Content />
      </div>
    </header>
  );
}

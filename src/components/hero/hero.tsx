import Pros from './pros';
import Title from './title';
import Self from './self';

export default function Hero() {
  return (
    <section className="text-white relative overflow-hidden w-full">
      <article className="container mx-auto max-w-7xl py-12 px-6 grid grid-cols-1 gap-14 lg:grid-cols-3">
        <Title />
        <Self />
        <Pros />
      </article>
    </section>
  );
}

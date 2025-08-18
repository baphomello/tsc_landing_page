import Header from '@/components/header/header';
import Hero from '@/components/hero/hero';
import { AuroraBackground } from '@/components/ui/shadcn-io/aurora-background';

export default function Home() {
  return (
    <main>
      <AuroraBackground>
        <Header />
        <Hero />
      </AuroraBackground>
    </main>
  );
}

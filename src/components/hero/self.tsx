import Image from 'next/image';
import NotificationPopup from '@/components/hero/notificationPopup';

export default function Self() {
  return (
    <div className="relative w-max mx-auto">
      <div className="absolute top-0 left-0 w-full flex flex-col items-center">
        <div className="pt-12 pl-50 z-20">
          <NotificationPopup text="Sua clínica atendeu 17 clientes a mais do que na semana anterior." />
        </div>
        <div className="pt-12 pr-50 z-40">
          <NotificationPopup text="Essa semana seu faturamento aumentou em 31% em relação a semana anterior." />
        </div>
      </div>
      <Image
        className="mx-auto relative z-30"
        src="/photo001.webp"
        alt="Tanize Photo 001"
        width={320}
        height={320}
      />
    </div>
  );
}

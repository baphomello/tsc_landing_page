import Image from 'next/image';
import Link from 'next/link';

export default function Title() {
  return (
    <div className="flex flex-col space-y-8 lg:col-span-2">
      <h1 className="text-4xl font-semibold">
        Maximize os
        <span className="text-[#e6c67c]"> Resultados </span>
        da Sua Clínica!
      </h1>
      <p className="text-xl">
        Estruture sua gestão financeira e operacional com consistência, visão
        estratégica e foco em resultados
      </p>
      <Link
        href={'#'}
        className="bg-green-500 px-6 py-4 rounded-lg flex items-center justify-center w-fit gap-2"
      >
        <Image
          src="/whatsapp.svg"
          alt="WhatsApp"
          width={36}
          height={36}
          style={{ filter: 'invert(100%)' }}
        />
        <span className="text-xl font-semibold">Contato via WhatsApp</span>
      </Link>
    </div>
  );
}
